import React, { Component, useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import CountdownClock from './CountdownClock';
import { LanguageContext } from '../contexts/LanguageContext';
import { EthersContext } from '../contexts/EthersContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';


import Taro from '../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json';
import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

const Proposal = ({title, typeOfAction, neighborhood, personInCharge, description, expiration, budget, requiredTaroToVote, forVotes, againstVotes, id, proposer, proposalTime, hasVoted, timeToExpiration}) => {
  let [governorAlpha, setGovernorAlpha] = useState();
  let [taro, setTaro] = useState();
  let [signerAddress, setSignerAddress] = useState();

  let [isEnglish] = useContext(LanguageContext);
  // let {governorAlpha} = useContext(GovernorAlphaContext);
  let {provider} = useContext(EthersContext);

  useEffect(() => {
    const main = async () => {
      // setIsMetamaskInstalled(true);
      // setIsConnected(false);
      try {
        //detect whether the browser is connected to a provider
        let ethereumProvider = await detectEthereumProvider();
        if (ethereumProvider) {
          // setProvider(ethereumProvider);
          startApp(ethereumProvider);
        } else {
          // setIsMetamaskInstalled(false);
          return;
        };
      } catch (error) {
        console.error(error);
      };

      async function startApp(_ethereumProvider) {
        try {
          //The provider detected by detectEthereumProvider() must be the same as window.ethereum
          if (_ethereumProvider !== window.ethereum) {
            // setIsMetamaskInstalled(false);
            return;
          };

          //Check if a MetaMask account has permission to connect to app
          let metamaskAccount;
          let accounts = await _ethereumProvider.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
              metamaskAccount = accounts[0];
              // setCurrentMetaMaskAccount(accounts[0]);
              // setIsMetamaskInstalled(true);
              // setIsConnected(true);
            };
          console.log(`metamaskAccount ${metamaskAccount}`);

          //Force the browser to refresh whenever the network chain is changed
          // let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
          // _ethereumProvider.on('chainChanged', handleChainChanged);
          // console.log('chainId: ', chainId);

          //Create the Ethers.js provider and set it in state
          let _ethersProvider = await new ethers.providers.Web3Provider(_ethereumProvider);
          // setEthersProvider(_ethersProvider);
          console.log('_ethersProvider: ', _ethersProvider)
          // make call to contract to check if current user is validated.
          // this may need to be done inside handleOnConnect as well
          // if user is validated, then set isValidated(true)

          if(accounts.length !== 0) {
            let signer = await _ethersProvider.getSigner();
            // setEthersSigner(signer);

            const _taro = new ethers.Contract(
              taroAddress.Taro,
              Taro.abi,
              signer
            );
            setTaro(_taro);

            let _signerAddress = await signer.getAddress();
            // console.log("signerAddress: ", _signerAddress);
            setSignerAddress(_signerAddress);

            // let _userBalance = await _taro.balanceOf(signerAddress);
            // console.log('_userBalance in useEffect: ', _userBalance.toString());
            // if(_userBalance) {
            //   setUserBalance(_userBalance.toString());
            // };

            const _governorAlpha = new ethers.Contract(
              governorAlphaAddress.GovernorAlpha,
              GovernorAlpha.abi,
              signer
            );
            setGovernorAlpha(_governorAlpha);
          };
        } catch (error) {
          console.error(error);
        };
      };
    };
    main();
  }, []);



  const handleOnClickFor = async () => {
    // console.log('signer address in handle for: ', signerAddress);

    let voteTx = await governorAlpha.castVote(ethers.BigNumber.from(id), true);
    let voteTxReceipt = await voteTx.wait(1);
    console.log(voteTxReceipt);
  };

  const handleOnClickAgainst = async () => {
    let voteTx = await governorAlpha.castVote(ethers.BigNumber.from(id), false);
    let voteTxReceipt = await voteTx.wait(1);
    console.log(voteTxReceipt);
  };
  


  return (
    <div>
      {isEnglish === 'english'
      ?
      <div class="proposal">    
         <div class="proposal-expiration">
           <h4 class="prop-title">💡 Proposal # {id} </h4>
           <span class="yellowr"><CountdownClock timeToExpiration={timeToExpiration}></CountdownClock></span>
         </div>
         <div class="mini-title">🎯 Objetive:</div>
         <div class="prop-hl"> {title}</div><br/><br/>
         <div class="grid-prop">      
           <div class="minit-bg">⚙️ Action: <div class="prop-hl">{typeOfAction}</div></div>
           <div class="minit-bg2">🦸 In charge: <div className="prop-hl">{personInCharge}</div></div>      
           <div class="minit-bg3"> 📍 Where: <div className="prop-hl">{neighborhood}</div></div>
           <div class="minit-bg3">💸 Cost: <div className="prop-hl">{budget} pesos</div> </div>
         </div>  

         <div class="description-bg">📑 Description: <div class="prop-description">{description}</div></div>
         {/*}
         <div className ="proposal-main">
           <div className="proposal-sub">Costo: {budget}</div>
           <div className="proposal-subaction">TARO to vote:{requiredTaroToVote} TARO</div>
         </div>
         */}
         <div class="yellow">made by {proposer}</div><br/>
         <div class="vote-grid">
           {!hasVoted?
           <a class="prop-bgf" onClick={handleOnClickFor}><h1 class="votef">Vote <br/>for</h1></a>
           :
           <div class="prop-bgf2"><h2>For:<br/><br/>{forVotes}<br/><br/>TARO</h2></div>    
           }
           {!hasVoted ?
           <a class="prop-bga" onClick={handleOnClickAgainst}><h1 class="votef">Vote against</h1></a>
           : 
           <div class="prop-bga2"><h2> Against:<br/><br/>{againstVotes}<br/><br/> TARO</h2></div>
           }
         </div>    
       </div>
      :
      <div class="proposal">    
        <div class="proposal-expiration">
          <div class="prop-title">💡 Propuesta # {id} </div>
          <span class="yellowr"><CountdownClock timeToExpiration={timeToExpiration}></CountdownClock></span>
        </div>
        <div class="mini-title">🎯 Objetivo:</div>
        <div class="prop-hl"> {title}</div><br/><br/>
        <div class="grid-prop">      
          <div class="minit-bg">⚙️ Acción: <div class="prop-hl">{typeOfAction}</div></div>
          <div class="minit-bg2">🦸 Responsable: <div className="prop-hl">{personInCharge}</div></div>      
          <div class="minit-bg3"> 📍 Dónde: <div className="prop-hl">{neighborhood}</div></div>
          <div class="minit-bg3">💸 Costo: <div className="prop-hl">{budget} pesos</div> </div>
        </div>
        
        <div class="description-bg"><div>📑 Descripción:</div> <div class="prop-description">{description}</div></div>
        {/*}
        <div className ="proposal-main">
          <div className="proposal-sub">Costo: {budget}</div>
          <div className="proposal-subaction">TARO to vote:{requiredTaroToVote} TARO</div>
        </div>
        */}
        <div class="author">Hecha por {proposer}</div><br/>
        <div class="vote-grid">
          {!hasVoted?
          <a class="prop-bgf" onClick={handleOnClickFor}><h1 class="votef">Vota <br/>a favor</h1></a>
          :
          <div class="prop-bgf2">A favor:<br/>{forVotes}<br/>TARO</div>    
          }
          {!hasVoted ?
          <a class="prop-bga" onClick={handleOnClickAgainst}><h1 class="votef">Vota <br/>en contra</h1></a>
          : 
          <div class="prop-bga2"> En contra:<br/>{againstVotes}<br/> TARO</div>
          }
        </div>    
      </div>
      }
</div>
  );
};

export default Proposal;