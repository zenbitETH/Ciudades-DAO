import { useEffect, useState, useContext } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers';
import {Card, Button } from 'react-bootstrap';
import ConnectButton from './buttons/ConnectButton';
import ConnectingButton from './buttons/ConnectingButton';
import InstallMetamaskAlert from './InstallMetamaskAlert';
import '../styles/Home.css';
import { ValidationRequiredContext } from '../contexts/ValidationRequiredContext';
import { TaroContext } from '../contexts/TaroContext';
import { LanguageContext } from '../contexts/LanguageContext';


//remove for production
import Comp from '../contracts/contracts/Comp.sol/Comp.json';

function Home() {
  let [provider, setProvider] = useState();
  let [ethersProvider, setEthersProvider] = useState();
  let [ethersSigner, setEthersSigner] = useState();
  let [isConnected, setIsConnected] = useState();
  let [isConnecting, setIsConnecting] = useState();
  let [isMetamastInstalled, setIsMetamaskInstalled] = useState();
  let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);
  let [userBalance, setUserBalance] = useState();

  let {setIsValidated} = useContext(ValidationRequiredContext);
  let {taro, setTaro} = useContext(TaroContext);
  let {isEnglish} = useContext(LanguageContext);

   // remove for production
   const Taro = Comp;

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
 
           // make call to contract to check if current user is validated.
           // this may need to be done inside handleOnConnect as well
           // if user is validated, then set isValidated(true)
 
 
           const _taro = new ethers.Contract(
             '0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f',
             Taro.abi,
             signer
           );
           setTaro(_taro);
 
           let signerAddress = await signer.getAddress();
           console.log("signerAddress: ", signerAddress);
 
           let _userBalance = await _taro.balanceOf(signerAddress);
           _userBalance = _userBalance.toString();
           if(_userBalance) {
             setUserBalance(_userBalance);
           };
 
 
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
    <div>
      {isEnglish ?
          <div className="App">
          <Card.Text>Urban governance protocol for Queretaro City DAO</Card.Text>
          <div className="Wallet">
          
            {!isMetamastInstalled ?
            <InstallMetamaskAlert />:isConnected ? '' : isConnecting? 
            <ConnectingButton />: 
            <ConnectButton handleOnConnect={handleOnConnect}/>}
          </div>
          <Card className="gray">
          <Card.Title className="text-large">Locked</Card.Title>
            <div className="item2">
             <Card.Body>
               <Card.Text>TARO on wallet</Card.Text>
               <Card.Text className="text-large">-</Card.Text>
               <Button disabled block>Get TARO</Button>
             </Card.Body>
              <Card.Body>
                <Card.Text>Delegated TARO</Card.Text>
                <Card.Text className="text-large">-</Card.Text>
                <Button disabled block>Delegate TARO</Button>
              </Card.Body>
            </div>
            </Card>
              <Card className="gray">
                <Card.Title className="text-large">Locked</Card.Title>
                <div className="item2">
                  <Card.Body>
                    <Card.Text>Proposals to vote</Card.Text>
                    <Card.Text className="text-large">-</Card.Text>
                    <Button disabled block>Vote</Button>
                  </Card.Body> 
                  <Card.Body>
                    <Card.Text>My proposals</Card.Text>
                    <Card.Text className="text-large">-</Card.Text>
                    <Button disabled block>Create Proposal</Button>
                  </Card.Body>
                </div>
              </Card>
          </div>

     :

        <div className="App">
            <Card.Text>Protocolo para digitalizar la gobernanza urbana de la ciudad de Querétaro</Card.Text>
          <div className="Wallet">
          
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
          
            }
      </div>
        );
      } 

export default Home;
