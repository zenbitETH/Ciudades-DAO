import { useEffect, useState, useContext } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers';
import {Card, Button } from 'react-bootstrap';
import ConnectButton from './buttons/ConnectButton';
import ConnectingButton from './buttons/ConnectingButton';
import InstallMetamaskAlert from './InstallMetamaskAlert';
import '../styles/Home.css';
import { TaroSimpleContext } from '../contexts/TaroSimpleContext';
import TaroSimple from '../contracts/contracts/TaroSimple.sol/TaroSimple.json';


function Home() {
  let [provider, setProvider] = useState();
  let [ethersProvider, setEthersProvider] = useState();
  let [ethersSigner, setEthersSigner] = useState();
  let [isConnected, setIsConnected] = useState();
  let [isConnecting, setIsConnecting] = useState();
  let [isMetamastInstalled, setIsMetamaskInstalled] = useState();
  let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);

  let {setTaroSimple} = useContext(TaroSimpleContext);

  useEffect(() => {
    const init = async () => {
      setIsMetamaskInstalled(true);
      setIsConnected(false);
      try {
        //detect whether the browser is connected to a provider
        let ethereumProvider = await detectEthereumProvider();
        if (ethereumProvider) {
          setProvider(ethereumProvider);
          startApp(ethereumProvider);
        } else {
          setIsMetamaskInstalled(false);
          return;
        };
      } catch (error) {
        console.error(error);
      };

      async function startApp(_ethereumProvider) {
        try {
          //The provider detected by detectEthereumProvider() must be the same as window.ethereum
          if (_ethereumProvider !== window.ethereum) {
            setIsMetamaskInstalled(false);
            return;
          };

          //Check if a MetaMask account has permission to connect to app
          let metamaskAccount;
          let accounts = await _ethereumProvider.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
              metamaskAccount = accounts[0];
              setCurrentMetaMaskAccount(accounts[0]);
              setIsMetamaskInstalled(true);
              setIsConnected(true);
            } else {
            };
          console.log(`metamaskAccount ${metamaskAccount}`);

          //Force the browser to refresh whenever the network chain is changed
          let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
          _ethereumProvider.on('chainChanged', handleChainChanged);
          console.log('chainId: ', chainId);

          //Create the Ethers.js provider and set it in state
          let _ethersProvider = await new ethers.providers.Web3Provider(_ethereumProvider);
          setEthersProvider(_ethersProvider);

          let signer = await _ethersProvider.getSigner();
          setEthersSigner(signer);

          let taroSimple = new ethers.Contract(
            '0xC7b3af5cfB93B9f7E669cB5a98B609645c3A6186',
            TaroSimple.abi,
            signer
          );
          setTaroSimple(taroSimple);

          console.log(taroSimple);
        } catch (error) {
          console.error(error);
        };
      };
    };
    init();
  }, []);

  const getAccounts = async () => {
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      await handleAccountsChanged(accounts);
    } catch (error) {
      console.error(error);
    };
  };

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentMetaMaskAccount) {
      console.log('account[0]: ', accounts[0]);
      setCurrentMetaMaskAccount(accounts[0]);
      setIsConnected(true);
      setIsConnecting(false);
      setIsMetamaskInstalled(true);
    }
  };

  function handleChainChanged(_chainId) {
    window.location.reload();
  };

  //Give a MetaMask account permission to interact with the app
  const handleOnConnect = async () => {
    setIsConnecting(true);
    try {
      await getAccounts();

      provider.on('accountsChanged', handleAccountsChanged);

      let signer = await ethersProvider.getSigner();
      setEthersSigner(signer);
    } catch (error) {
      console.error(error);
    };
  };

  return (
          <div className="App">
            <Card.Text>Protocolo para digitalizar la gobernanza urbana de la ciudad de Querétaro</Card.Text>
          <div className="Wallet">
            <Card.Text className="purple2">Necesitas una wallet de Metamask para usar VoTARO</Card.Text>
            {!isMetamastInstalled ?
            <InstallMetamaskAlert />:isConnected ? '' : isConnecting? 
            <ConnectingButton />: 
            <ConnectButton handleOnConnect={handleOnConnect}/>}
          </div>
          <Card className="gray">
          <Card.Title className="text-large">Bloqueado</Card.Title>
            <div className="item2">
             <Card.Body>
               <Card.Text>TARO en la cartera</Card.Text>
               <Card.Text className="text-large">-</Card.Text>
               <Button disabled block>Obtén TARO</Button>
             </Card.Body>
              <Card.Body>
                <Card.Text>TARO para votar</Card.Text>
                <Card.Text className="text-large">-</Card.Text>
                <Button disabled block>Delegar TARO</Button>
              </Card.Body>
            </div>
            </Card>
              <Card className="gray">
                <Card.Title className="text-large">Bloqueado</Card.Title>
                <div className="item2">
                  <Card.Body>
                    <Card.Text>Propuestas por votar</Card.Text>
                    <Card.Text className="text-large">-</Card.Text>
                    <Button disabled block>Votar</Button>
                  </Card.Body> 
                  <Card.Body>
                    <Card.Text>Propuestas generadas</Card.Text>
                    <Card.Text className="text-large">-</Card.Text>
                    <Button disabled block>Generar propuestas</Button>
                  </Card.Body>
                </div>
              </Card>
          </div>
        );
      } 

export default Home;
