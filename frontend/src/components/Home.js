import { useEffect, useState, useContext } from 'react';
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers';
import ConnectButton from './buttons/ConnectButton';
import ConnectingButton from './buttons/ConnectingButton';
import InstallMetamaskAlert from './InstallMetamaskAlert';
//import SkaleButton from './buttons/SkaleButton';
//import SkaleSwitch from './buttons/SkaleSwitch';
//import SwitchSkaleAlert from './SwitchSkaleAlert';
import { ValidationRequiredContext } from '../contexts/ValidationRequiredContext';
import { TaroContext } from '../contexts/TaroContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { EthersContext } from '../contexts/EthersContext';
import { ConnectedContext } from '../contexts/ConnectedContext';


import Taro from '../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json'
import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

import reward from '../assets/TAROrew.png';
import TARO from '../assets/taro.png';
import prop from '../assets/prop.png';
import past from '../assets/past.png';
import verify from '../assets/verify.png';
import vote from '../assets/vote.png';


function Home() {
  let [ethersProvider, setEthersProvider] = useState();
  let [isConnecting, setIsConnecting] = useState();
  let [isMetamastInstalled, setIsMetamaskInstalled] = useState();
//let [isSkaleSwitched, setIsSkaleSwitched] = useState();
  let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);
  let [userBalance, setUserBalance] = useState();
//let [isConnectingToSkale, setIsConnectingToSkale] = useState();

  let {setIsValidated} = useContext(ValidationRequiredContext);
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

          //Force the browser to refresh whenever the network chain is changed
         // let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
         // _ethereumProvider.on('chainChanged', handleChainChanged);
         // console.log('chainId: ', chainId);
         //
         // if (chainId === '0x3ad0e149d0bf5') {
         //   setIsSkaleSwitched(true);
         // };

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

  //Enable app to have SKALE among listed networks
  //const listSkaleInMetamask = async () => {
  //  setIsConnectingToSkale(true);
  //  let endpoint = "http://eth-global-11.skalenodes.com:10323";
  //  let chainId = "0x3ad0e149d0bf5";
//
  //  let switchToSKALE = {
  //    chainId: chainId,
  //    chainName: "SKALE Network Testnet",
  //    rpcUrls: [endpoint],
  //    nativeCurrency: {
  //      name: "SKALE ETH",
  //      symbol: "skETH",
  //      decimals: 18
  //    },
  //    blockExplorerUrls: [
  //      "https://expedition.dev/?network=SKALE&rpcUrl=" + endpoint
  //    ]
  //  };
  //  //Request current account selected in Metamask
  //  let metamaskAccount;
  //  let accounts = await provider.request({ method: 'eth_requestAccounts' });
  //    if (accounts.length > 0) {
  //      metamaskAccount = accounts[0];
  //      setCurrentMetaMaskAccount(accounts[0]);
  //      setIsMetamaskInstalled(true);
  //      setIsConnected(true);
  //    } else {
  //    };
  //  console.log(`metamaskAccount in Skale function: ${metamaskAccount}`);
//
  //  //Request change to SKALE network
  //  try {
  //    await provider.request({
  //      method: "wallet_addEthereumChain",
  //      params: [switchToSKALE, accounts[0]]
  //    });
//
  //    setIsConnectingToSkale(false);
  //    setIsSkaleSwitched(true);
//
  //    window.location.reload();
  //  }catch (error) {
  //    console.log(error);
  //    window.location.reload();
  //  };
  //};

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

 // function handleChainChanged(_chainId) {
 //   window.location.reload();
 // };

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
            <div class="headline">
              <h1>Querétaro City DAO </h1>
              <p class="headline-p">Urban Governance on Ethereum Blockchain.</p>
            </div>
            <div class="center">
            {!isMetamastInstalled ?
                    <InstallMetamaskAlert /> : isConnected ?'' : isConnecting ?
                    <ConnectingButton /> : <ConnectButton handleOnConnect={handleOnConnect}/>
                }
                {/*isSkaleSwitched ? '' : isConnectingToSkale ?
                  <SkaleSwitch /> : <SkaleButton handleOnConnect={listSkaleInMetamask}/>
                */}
            </div>
            <div class="grid-block">
              <div>
                {isConnected ?
                <section id="">
                  <div class="homegrid">
                    <div class="bg-grid"><a href="/createProposal">
                      <img src={reward} class="ribvan"/> 
                      <div class="propsub">You have</div>
                      <div class="propopt2"> {userBalance} TARO</div>
                    </a></div>
                    <div class="bg-reward"><a href="/Quiz">
                      <img src={verify} class="ribvan"/>
                      <div class="propsub">Get up to 1,000 TARO</div>
                      <div class="propopt">Validate</div>
                    </a></div>
                 
                    
                    <div class="bg-grid"><a href="/ProposalList">
                      <img src={past} class="ribvan"/> 
                      <div class="propsub">Vote with your TARO</div>
                      <div class="propopt">City DAO</div>
                    </a></div>
                     
                    <div class="bg-reward"><a href="/createProposal">
                      <img src={prop} class="ribvan"/> 
                      <div class="propsub">Get 50 TARO per proposal</div>
                      <div class="propopt">Propose</div>
                    </a></div>
                   
                    <div class="prop-bgr"><a href="/About">
                      <img src={vote} class="ribvan"/>
                      <div class="propsub">Learn +</div>
                      <div class="propopt">Docs</div>
                    </a></div>
                
                      
                   
                    
                
                    
                
                    
                    
                  
                    
                  </div>
                </section>
                :
                <section>
                  <div class="govgrid">
                    <div class="prop-bgr"><a href="/About">
                        <img src={prop} class="rivban"/> 
                        <div class="propsub">What is a VoTARO?</div>
                        <div class="propopt">Start here</div>
                      </a></div>
                      <div class="prop-bgr"><a href="/About">
                        <img src={vote} class="rivban"/>
                        <div class="propsub">Urban Governance</div>
                        <div class="propopt">City DAO</div>
                      </a></div>
                  </div>  
                </section>      
                }
              </div>
            </div>
        </div>
      :
      <div class="App">
          <div class="headline">
            <h1>La DAO de Querétaro </h1>
            <p class="headline-p">Aplicación de consenso urbano para un presupuesto descentralizado</p>
          </div>
          
            <div class="center">     
              {!isMetamastInstalled ?
                  <InstallMetamaskAlert /> : isConnected ?'' : isConnecting ?
                  <ConnectingButton /> : <ConnectButton handleOnConnect={handleOnConnect}/>
              }
              {/*isSkaleSwitched ? '' : isConnectingToSkale ?
                <SkaleSwitch /> : <SkaleButton handleOnConnect={listSkaleInMetamask}/>
              */}
            </div>            
            <div class="grid-block">
            
            
            <div>
              {isConnected ?
              <section>
                <div class="homegrid">
                  <div class="bg-grid"><a href="/createProposal">
                    <img src={reward} class="ribvan"/> 
                    <div class="propsub">Tienes</div>
                    <div class="propopt2"> {userBalance} TARO</div>
                  </a></div>    
                  <div class="bg-reward"><a href="/Quiz">
                    <img src={verify} class="ribvan"/>
                    <div class="propsub">Obtén hasta 1,000 TARO</div>
                    <div class="propopt">Validar</div>
                  </a></div>
                  <div class="bg-grid"><a href="/ProposalList">
                    <img src={past} class="ribvan"/> 
                    <div class="propsub">Usa tu TARO para votar</div>
                    <div class="propopt">Ciudad DAO</div>
                  </a></div>
                  <div class="bg-reward"><a href="/createProposal">
                    <img src={prop} class="ribvan"/> 
                    <div class="propsub">50 TARO por propuesta </div>
                    <div class="propopt">Proponer</div>
                  </a></div>
                  <div class="prop-bgr"><a href="/About">
                    <img src={reward} class="ribvan"/>
                    <div class="propsub">Conoce la ciudad DAO</div>
                    <div class="propopt">+ Info</div>
                  </a></div>  
                </div>
              </section>
              :
              <section>
              <div class="govgrid">
                <div class="prop-bgr"><a href="/About">
                    <img src={prop} class="rivban"/> 
                    <div class="propsub">¿Qué es una cartera web 3?</div>
                    <div class="propopt">Empieza Aquí</div>
                  </a></div>
                  <div class="prop-bgr"><a href="/About">
                    <img src={vote} class="rivban"/>
                    <div class="propsub">¿Qué es el presupuesto descentralizado? </div>
                    <div class="propopt">Ciudad DAO</div>
                  </a></div>
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
