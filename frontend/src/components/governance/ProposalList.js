import { useContext, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import Proposal from '../Proposal';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ValidationRequiredContext } from '../../contexts/ValidationRequiredContext';
import { GovernorAlphaContext } from '../../contexts/GovernorAlphaContext';
import ValidationRequired from '../../alerts/ValidationRequired';
import { EthersContext } from '../../contexts/EthersContext';

import Taro from '../../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json';
import governorAlphaAddress from '../../contracts/contracts/GovernorAlpha/contract-address.json';

import prop from '../assets/prop.png';
import reward from '../assets/TAROrew.png';
import vote from '../assets/vote.png';
import vote2 from '../assets/vote2.svg';
import past from '../assets/past.png';
import verify from '../assets/verify.png';

const ProposalList = () => {
  let [retrievedProposals, setRetrievedProposals] = useState([]);
  let [taro, setTaro] = useState();
  let [signerAddress, setSignerAddress] = useState();

  let {isValidated, setIsValidated} = useContext(ValidationRequiredContext);
  let [isEnglish] = useContext(LanguageContext);
  let {governorAlpha} = useContext(GovernorAlphaContext);
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
            // console.log("signerAddress: ", signerAddress);
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
            // setGovernorAlpha(_governorAlpha);

            let _isValidated = await _governorAlpha.getValidityStatus();
            let userExpirationTime = _isValidated[0].toNumber();
            let currentBlockTimestamp = _isValidated[1].toNumber();

            if(userExpirationTime === 0) {
              // console.log('user is zero time; not validated');
              setIsValidated(false);
            } else if (currentBlockTimestamp > userExpirationTime){
              // console.log('user is past validity period; not validated');
              setIsValidated(false);
            } else {
              setIsValidated(true);
              // console.log('user exp time: ', _isValidated[0].toNumber());
              // console.log('block.timestamp: ', _isValidated[1].toNumber());
            };

            let proposalCount = await _governorAlpha.proposalCount();
            proposalCount = +proposalCount;

            if(proposalCount > 0) {
              let activeProposals = [];
              let proposal, currentTimeInSeconds, _hasVoted;
              for(let i = 1; i <= proposalCount; i++) {
                proposal = await _governorAlpha.proposals(ethers.BigNumber.from(i));
                _hasVoted = await _governorAlpha.checkHasVoted(_signerAddress, ethers.BigNumber.from(i));
                // currentBlockNumber = await _ethersProvider.getBlockNumber();
                // console.log('block number: ', currentBlockNumber)
                // console.log('proposal:', proposal.endBlock.toNumber());
                // console.log('forVotes: ', proposal.forVotes.toString());
                // console.log('againstVotes: ', proposal.againstVotes.toString());
                // console.log('proposal: ', proposal);
                // console.log('hasVoted: ', _hasVoted);

                currentTimeInSeconds = Date.parse(new Date(Date.now())) / 1000;

                if(proposal.endBlock.toNumber() > currentTimeInSeconds) {
                  let timeToExpiration = proposal.endBlock.toNumber() - currentTimeInSeconds;

                  console.log('endBlock: ', proposal.endBlock.toNumber());
                  console.log('currentTimeInSeconds: ', currentTimeInSeconds);

                  let fVotes = proposal.forVotes.toString();
                  let tempForVotes = fVotes.slice(0, -18);
                  console.log('tempForVotes: ', tempForVotes);
                  

                  activeProposals.push({
                    title: proposal[9][0],
                    typeOfAction: proposal[9][1],
                    neighborhood: proposal[9][2],
                    personInCharge: proposal[9][3],
                    description: proposal[9][4],
                    expiration: proposal[9][5].toString(),
                    budget: proposal[9][6].toString(),
                    requiredTaroToVote: proposal[9][7].toString(),
                    forVotes: proposal.forVotes.div('1000000000000000000').toString(),
                    againstVotes: proposal.againstVotes.div('1000000000000000000').toString(),
                    id: proposal.id.toString(),
                    proposer: proposal.proposer.toString(),
                    proposalTime: proposal[9].proposalTime.toNumber(),
                    hasVoted: _hasVoted,
                    timeToExpiration
                  });
                };
              };
              // console.log('activeProposals: ', activeProposals)
              activeProposals.reverse();
              setRetrievedProposals(activeProposals);
            };
          };
        } catch (error) {
          console.error(error);
        };
      };
    };
    main();
  }, []);

  const list = retrievedProposals.map((proposal, i) => {
    return (
      <div key={i}>
        <Proposal
          title={proposal.title}
          typeOfAction={proposal.typeOfAction}
          neighborhood={proposal.neighborhood}
          personInCharge={proposal.personInCharge}
          description={proposal.description}
          expiration={proposal.expiration}
          budget={proposal.budget}
          taroToVote={proposal.taroToVote}
          forVotes={proposal.forVotes}
          againstVotes={proposal.againstVotes}
          id={proposal.id}
          proposer={proposal.proposer}
          proposalTime={proposal.proposalTime}
          hasVoted={proposal.hasVoted}
          timeToExpiration={proposal.timeToExpiration}
        />
      </div>
    )
  });
  //const handleOnClickDelegate = async () => {
  //  let delegate = await taro.delegate(signerAddress);
  //  let delegateReceipt = await delegate.wait(1);
  //  console.log('delegateReceipt: ', delegateReceipt);
  //}


  window.onscroll = function() {myFunction()}
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  

  return (
  <body id="create">
      {isEnglish === 'english'
      ?
        <div class="proplist">
          <div class="progress-holder">
            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>
          </div>
          <span>{isValidated ? "" : <ValidationRequired />}</span>
          <h1><span class="yellow">Gobernanza Urbana</span></h1>
          <div class="center"><img src={vote} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>          
          <div className= "propgrid">
            <div class="prop-bg"><a href="/createProposal">
              <img src={prop} class="ribbons"/> 
              <div class="propsub">Crea una propuesta</div>
              <div class="propopt">Proponer</div>
            </a></div>
            <div class="prop-bg2"><a href="#vote">
              <img src={vote2} class="ribbons"/> 
              <div class="propsub">Propuestas disponibles</div>
              <div class="propopt">Por votar</div>
            </a></div>
            <div class="prop-bgh"><a href="/PastProposals">
              <img src={past} class="ribbons"/> 
              <div class="propsub">Propuestas pasadas</div>
              <div class="propopt">Historial</div>
            </a></div>
            <div class="prop-bgr"><a href="/PastrProposal">
              <img src={reward} class="ribbons"/>
              <div class="propsub">Crea propuestas, gana TARO</div>
              <div class="propopt">Recompensas</div>
            </a></div>
          </div>
        <div><br/>
          {list.length > 0 ?
            <div id="vote" className="props">
              <h1><span >Propuestas por votar</span></h1><br/>
              <img src={vote2} alt="Alert about key" class="prop-img"/>
                <div class="floating">
                  <div class="about-tx2">Usa el TARO que has ganado para 
                  votar por propuestas de gobernanza en la ciudad de Querétaro.</div>
                  </div><h1>1 TARO = 1 Voto</h1><br/>
                {list}
            </div>
           :
            <div id="vote" className="void">                
              <div class="center"><img src={vote2} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
              <h1><span  class="red">No hay propuestas por votar</span></h1><br/>
                <div class="floating">
                  <div class="about-tx2">Crea una propuesta o valida tu cuenta para participar. 
                    También puedes ver el historial de propuesta o conoce más antes de empezar.
                  </div>
                </div>
                <div class="void-link">
                  <div class="prop-bg"><a href="/createProposal">
                    <img src={prop} class="ribvan"/> 
                    <div class="propsub">Crea una propuesta</div>
                    <div class="propopt">Proponer</div>
                  </a></div>
                  <div class="prop-bgv"><a href="/Quiz">
                    <img src={verify} class="ribvan"/>
                    <div class="propsub">Antes de empezar</div>
                    <div class="propopt">Validar</div>
                  </a></div>
                  <div class="prop-bgh"><a href="/PastProposals">
                    <img src={past} class="ribvan"/> 
                    <div class="propsub">Propuestas pasadas</div>
                    <div class="propopt">Historial</div>
                  </a></div>
                  <div class="prop-bgr"><a href="/Pastrroposal">
                    <img src={reward} class="ribvan"/>
                    <div class="propsub">Ver documentación</div>
                    <div class="propopt">Conoce +</div>
                  </a></div>
                </div>
            </div>
          }
        </div>
      </div>
    :
      <div>
        <div>
          <div className= "valert">
            {isValidated ? "" : <ValidationRequired />}
          </div>
          <div className= "yellowB">
            <div className="text-large">Crea una nueva propuesta</div>
            <div className="big-icon">🦸🦸‍♂️</div>
            <div className="main">¡La ciudad te necesita! genera propuestas de actividades, obras públicas o necesidades que hayas identificado en tu comunidad
              Realiza propuestas, vota por ellas y hazlas realidad para obtener más TARO.
            </div>
            <div className ="floating">
              <Link className="alt2" to="/createproposal"> ✍🏼 Crear propuesta</Link>
            </div>
          </div >
        <div>
          {list.length > 0 ?
            <div className ="space">
              <div className= "yellowB">
    
                <div className="text-large"> Propuestas para votar </div>
                <div className="big-icon">🗳️</div>
                <div className="text-large">1 TARO = 1 Voto</div>
                <div className="main">Usa tu taro TARO para votar a favor o en contra de las propuestas disponibles. Tu poder de voto depende de la cantidad de tokens TARO que tengas en tu wallet.
                </div>
                {list}
                <div className="floating">
                <Link className="alt2" to="/PastProposals">📅 Propestas pasadas</Link>
                </div>
              </div >
            </div>
          :
          <div className="space">
          <div className= "yellowB">
            <div className="text-large"> Propuestas para votar </div>
            <div className="big-icon">🗳️</div>
            <div className="text-large">1 TARO = 1 Voto</div>
            <div className="main">Usa tu taro TARO para votar a favor o en contra de las propuestas disponibles. Tu poder de voto depende de la cantidad de tokens TARO que tengas en tu wallet.</div>
            <div className="floating">
            <div className="title2">⛔No hay propuestas activas.⛔</div>
            </div>
            <div className="floating">
              <Link className="alt2" to="/PastProposals">📅 Ver propuestas pasadas</Link>
            </div>
          </div >
          <div className="floating">
              <Link className="alt2" to="/">Regresar al inicio</Link>
            </div>
        </div>
          }
        </div>
      </div>
    </div>
    }
    </body>
  );
};

 export default ProposalList;
