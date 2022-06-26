import { useEffect, useState, useContext } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers';
import PolygonButton from './buttons/PolygonButton';
import PolygonSwitch from './buttons/PolygonSwitch';
import SwitchPolygonAlert from './SwitchPolygonAlert';
import { ValidationRequiredContext } from '../contexts/ValidationRequiredContext';
import { TaroContext } from '../contexts/TaroContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { EthersContext } from '../contexts/EthersContext';
import { ConnectedContext } from '../contexts/ConnectedContext';

import test from '../assets/confirm.svg';
import prop from '../assets/prop.png';
import past from '../assets/past.png';
import verify from '../assets/verify.png';


import Taro from '../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json'
import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

function Home() {
  let [ethersProvider, setEthersProvider] = useState();
  let [isConnecting, setIsConnecting] = useState();
  let [isMetamaskInstalled, setIsMetamaskInstalled] = useState();
  let [IsPolygonSwitched, setIsPolygonSwitched] = useState();
  let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);
  var [userBalance, setUserBalance] = useState();
  let [isConnectingToPolygon, setIsConnectingToPolygon] = useState();

  let {setIsValidated,isValidated} = useContext(ValidationRequiredContext);
  let {setTaro} = useContext(TaroContext);
  let {setGovernorAlpha} = useContext(GovernorAlphaContext);
  let [isEnglish] = useContext(LanguageContext);
  let {setEthersSigner, provider, setProvider} = useContext(EthersContext);
  let {isConnected, setIsConnected} = useContext(ConnectedContext);

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

         // Force the browser to refresh whenever the network chain is changed
          let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
          _ethereumProvider.on('chainChanged', handleChainChanged);
          console.log('chainId: ', chainId);
         
          if (chainId === '80001') {
            setIsPolygonSwitched(true);
          };

          //Check if a MetaMask account has permission to connect to app
          let metamaskAccount;
          let accounts = await _ethereumProvider.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            metamaskAccount = accounts[0];
            setCurrentMetaMaskAccount(accounts[0]);
            setIsMetamaskInstalled(true);
            setIsConnected(true);
          };
          console.log(`metamaskAccount ${metamaskAccount}`);

          //Create the Ethers.js provider and set it in state
          let _ethersProvider = await new ethers.providers.Web3Provider(_ethereumProvider);
          setEthersProvider(_ethersProvider);
          console.log('_ethersProvider: ', _ethersProvider)
          // make call to contract to check if current user is validated.
          // this may need to be done inside handleOnConnect as well
          // if user is validated, then set isValidated(true)

          if(accounts.length !== 0) {
            let signer = await _ethersProvider.getSigner();
            setEthersSigner(signer);

            const _taro = new ethers.Contract(
              taroAddress.Taro,
              Taro.abi,
              signer
            );
            setTaro(_taro);

            let signerAddress = await signer.getAddress();
            console.log("signerAddress: ", signerAddress);

            let _userBalance = await _taro.balanceOf(signerAddress);
                _userBalance = _userBalance.div(Math.pow(10,18).toString());
              console.log('_userBalance in useEffect: ', _userBalance.toString());
            if(_userBalance) {
              setUserBalance(_userBalance.toString());
            };

            const _governorAlpha = new ethers.Contract(
              governorAlphaAddress.GovernorAlpha,
              GovernorAlpha.abi,
              signer
            );
            setGovernorAlpha(_governorAlpha);

            let _isValidated = await _governorAlpha.getValidityStatus();
            let userExpirationTime = _isValidated[0].toNumber();
            let currentBlockTimestamp = _isValidated[1].toNumber();

            if(userExpirationTime === 0) {
              console.log('user is zero time; not validated');
              setIsValidated(false);
            } else if (currentBlockTimestamp > userExpirationTime){
              console.log('user is past validity period; not validated');
              setIsValidated(false);
            } else {
              setIsValidated(true);
              console.log('user exp time: ', _isValidated[0].toNumber());
              console.log('block.timestamp: ', _isValidated[1].toNumber());
            };

          };
        } catch (error) {
          console.error(error);
        };
      };
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Enable app to have Polygon among listed networks
  const listPolygonInMetamask = async () => {
    setIsConnectingToPolygon(true);
    //let endpoint = "http://eth-global-11.skalenodes.com:10323";
    let chainId = "0x13881";

    let switchToPOLYGON = {
      chainId: chainId,
      chainName: "Polygon Testnet",
      rpcUrls: "https://matic-mumbai.chainstacklabs.com/",
      nativeCurrency: {
        name: "MATIC token",
        symbol: "MATIC",
        decimals: 18
      },
      blockExplorerUrls: [
        "https://mumbai.polygonscan.com/"
      ]
    };
    //Request current account selected in Metamask
    let metamaskAccount;
    let accounts = await provider.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        metamaskAccount = accounts[0];
        setCurrentMetaMaskAccount(accounts[0]);
        setIsMetamaskInstalled(true);
        setIsConnected(true);
      } else {
      };
    console.log(`metamaskAccount in Skale function: ${metamaskAccount}`);

    //Request change to Polygon network
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [switchToPOLYGON, accounts[0]]
      });

      setIsConnectingToPolygon(false);
      setIsPolygonSwitched(true);

      window.location.reload();
    }catch (error) {
      console.log(error);
      window.location.reload();
    };
  };

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

      const _taro = new ethers.Contract(
        taroAddress.Taro,
        Taro.abi,
        signer
      );
      setTaro(_taro);

      let signerAddress = await signer.getAddress();
      console.log("signerAddress in handleOnConnect: ", signerAddress);

      let _userBalance = await _taro.balanceOf(signerAddress);
          _userBalance = _userBalance.div(Math.pow(10,18).toString());
          console.log('_userBalance in useEffect: ', _userBalance.toString());
        if(_userBalance) {
          setUserBalance(_userBalance.toString());
        };

      const _governorAlpha = new ethers.Contract(
        governorAlphaAddress.GovernorAlpha,
        GovernorAlpha.abi,
        signer
      );
      setGovernorAlpha(_governorAlpha);
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <div>
      {isEnglish === 'english' ?
        <div class="App">
          <div class="grid-block">
            <div>
              {isConnected ?
              <section id="">
              <div class="homegrid">
                {isValidated ? '':
                <a class="bg-reward"href="/Quiz">
                  <img src={verify} class="homevan"/>
                  <div class="propsub">Obtén hasta 100 TARO</div>
                  <div class="propopt">Prueba Web3</div>
                </a>}
                {isValidated ? <a class="bg-reward" href="/createProposal">
                  <img src={prop} class="homevan"/> 
                  <div class="propsub">Obtén 10 TARO por</div>
                  <div class="propopt">Propuestas DAO</div>
                </a>
                 : <div class="bg-blocked" >
                 <img src={prop} class="homevan"/> 
                 <div class="propsub">3 Valida para desbloquear</div>
                 <div class="propopt">Propuestas DAO</div>
               </div>}
               {isValidated ?
              <a class="bg-grid0" href="/ProposalList">
                  <img src={past} class="homevan"/> 
                  <div class="propsub">4 Vota con tu TARO</div>
                  <div class="propopt">Querétaro DAO</div>
                </a>
                :
                <div class="bg-blocked" >
                  <img src={past} class="homevan"/> 
                  <div class="propsub">4 Valida para desbloquear</div>
                  <div class="propopt">Qurétaro DAO</div>
                </div>}
              </div>
            </section>
              :
              <section>
                <div class="headline">
                  <h1 class="yellow">Reto Querétaro Web3</h1>
                  <h2>¿Estas listo para empezar?</h2>
                </div>
                <div class="grid-blocked">
                  <div class="homegrid">
                    <a href="/About" class="bg-grid0">
                      <img src={prop} class="homevan"/> 
                      <div class="propsub">¿Tienes cómo conectarte?</div>
                      <div class="propopt">Ir por Wallet web3</div>
                    </a>
                    <a class="bg-grid0" href="https://faucet.polygon.technology/">
                      <img src={test} class="homevan"/> 
                      <div class="propsub">¿Estas en la red correcta?</div>
                      <div class="propopt">Ir a red de pruebas </div>
                    </a>
                    <a class="bg-grid0" href="https://faucet.polygon.technology/">
                      <img src={test} class="homevan"/> 
                      <div class="propsub">¿Tienes gas? </div>
                      <div class="propopt">Conseguir Gas </div>
                    </a>
                  </div>
                </div>
              
              </section>      
              }
            </div>
          </div>
        </div>
      :
      <div class="App">
        <div class="grid-block">
          <div>
            {isConnected ?
            <section id="">
              <div class="homegrid">
                {isValidated ? '':
                <a class="bg-reward"href="/Quiz">
                  <img src={verify} class="homevan"/>
                  <div class="propsub">Get up to 100 TARO</div>
                  <div class="propopt">Validate</div>
                </a>}
                {isValidated ? <a class="bg-reward" href="/createProposal">
                  <img src={prop} class="homevan"/> 
                  <div class="propsub">Get 10 TARO per proposal</div>
                  <div class="propopt">Propose</div>
                </a>
                :
                <div class="bg-blocked" >
                 <img src={prop} class="homevan"/> 
                 <div class="propsub">Validate to unlock</div>
                 <div class="propopt">Propose</div>
               </div>}
               {isValidated ?
              <a class="bg-grid0" href="/ProposalList">
                  <img src={past} class="homevan"/> 
                  <div class="propsub">Vote with your TARO</div>
                  <div class="propopt">Qurétaro DAO</div>
                </a>
                :
                <div class="bg-blocked" >
                  <img src={past} class="homevan"/> 
                  <div class="propsub">Validate to unlock</div>
                  <div class="propopt">Qurétaro DAO</div>
                </div>}
              </div>
              
            </section>
            :
            <section>
              <div class="headline">
                  <h1 class="yellow">Querétaro Web3 Quest</h1>
                  <h2>Are you ready to start?</h2>
                </div>
                <div class="grid-blocked">
                  <div class="homegrid">
                    <a href="/About" class="bg-grid0">
                      <img src={prop} class="homevan"/> 
                      <div class="propsub">Do you have a web3 wallet</div>
                      <div class="propopt">Go for Wallet</div>
                    </a>
                    <a class="bg-grid0" href="https://faucet.polygon.technology/">
                      <img src={test} class="homevan"/> 
                      <div class="propsub">Are you on the right network?</div>
                      <div class="propopt">Go to testnet </div>
                    </a>
                    <a class="bg-grid0" href="https://faucet.polygon.technology/">
                      <img src={test} class="homevan"/> 
                      <div class="propsub">Do you have gas? </div>
                      <div class="propopt">Get Gas </div>
                    </a>
                  </div>
                </div>

            </section>      
            }
          </div>
        </div>
    </div>
  }
</div>
    
  );
}


export default Home;

