import { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import Proposal from './Proposal';
import { LanguageContext } from '../contexts/LanguageContext';
import { ValidationRequiredContext } from '../contexts/ValidationRequiredContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';
import ValidationRequired from '../alerts/ValidationRequired';
import { EthersContext } from '../contexts/EthersContext';

import Taro from '../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json';
import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

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
  <body id="">
      {isEnglish === 'english'
      ?
        <div class="proplist">
          <div class="progress-holder">
            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>
          </div>
        
            <span>{isValidated ? "" : <ValidationRequired />}</span>
          <h1><span class="orange">Querétaro City DAO</span></h1><br/><br/>
          <div class="center"><img src={vote} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>          
          <div id="margin">
           <div className= "govgrid" id="">
             <div class="propose-bg"><a href="/createProposal">
               <img src={prop} class="ribbons"/> 
               <div class="propsub">Create a proposal</div>
               <div class="propopt">Propose</div>
             </a></div>
             <div class="bg-grid3"><a href="#vote">
               <img src={vote2} class="ribbons"/> 
               <div class="propsub">Available proposals</div>
               <div class="propopt">Vote</div>
             </a></div>
             <div class="prop-bgh"><a href="/PastProposals">
               <img src={past} class="ribbons"/> 
               <div class="propsub">Past proposals</div>
               <div class="propopt">Record</div>
             </a></div>
            </div>
          </div>

        <div id="margin"><br/>
          {list.length > 0 ?
            <div id="vote" className="props">
              <h1><span >Proposals to vote</span></h1><br/>
              <img src={vote2} alt="Alert about key" class="prop-img"/>
                <div class="floating">
                  <div class="about-tx2">Use the TARO you have earned to
                   vote for governance proposals in the city of Querétaro.</div>
                  </div><h1>1 TARO = 1 Vote</h1><br/>
                {list}
                <div class="void-link">
                  <div class="prop-bg"><a href="/PastProposals">
                  <img src={past} class="ribvan"/> 
                    <div class="propsub">Past proposals</div>
                    <div class="propopt">Record</div>
                  </a></div>
                  <div class="prop-bg"><a href="/createProposal">
                    <img src={prop} class="ribvan"/> 
                    <div class="propsub">Create a proposal</div>
                    <div class="propopt">Propose</div>
                  </a></div>
                </div>
            </div>

           :

            <div id="margin"> 
              <div class="center"><img src={vote2} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
              <h1><span  class="red">There are no proposals to vote</span></h1><br/>
                <div class="floating">
                  <div class="about-tx2">
                    Create a proposal or validate your account to participate.
                    You can also view the proposal history or learn more before you start.
                  </div>
                </div>
                <div class="govgrid">
                  <div class="prop-bg"><a href="/createProposal">
                    <img src={prop} class="ribvan"/> 
                    <div class="propsub">Create a proposal</div>
                    <div class="propopt">Propose</div>
                  </a></div>
                  <div class="prop-bgr"><a href="/About">
                    <img src={reward} class="ribvan"/>
                    <div class="propsub">Learn +</div>
                    <div class="propopt">Docs</div>
                  </a></div>
                </div>
            </div>

          }
        </div>
      </div>

    :

      <div class="proplist">
        <div class="progress-holder">
          <div class="progress-container">
            <div class="progress-bar" id="myBar">

            </div>
          </div>
        </div>
          <span>{isValidated ? "" : <ValidationRequired />}</span>
        <h1><span class="orange">Propuestas en Querétaro</span></h1><br/><br/>
        <div class="center"><img src={vote} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>

        <div id="margin">
         <div className="govgrid">
          <div class="propose-bg"><a href="/createProposal">
            <img src={prop} class="ribbons"/> 
            <div class="propsub">Crea una propuesta</div>
            <div class="propopt">Proponer</div>
          </a></div>
          <div class="bg-grid3"><a href="#vote">
            <img src={vote2} class="ribbons"/> 
            <div class="propsub">Propuestas disponibles</div>
            <div class="propopt">Por votar</div>
          </a></div>
          <div class="prop-bgh"><a href="/PastProposals">
            <img src={past} class="ribbons"/> 
            <div class="propsub">Propuestas pasadas</div>
            <div class="propopt">Historial</div>
          </a></div>
          </div>
        </div>

        <div id="margin"><br/>
        {list.length > 0 ?
          <div id="vote" className="props">
            <h1><span >Propuestas por votar</span></h1><br/>
            <img src={vote2} alt="Alert about key" class="prop-img"/>
              <div class="floating">
                <div class="about-tx2">Usa el TARO que has ganado para 
                votar por propuestas de gobernanza en la ciudad de Querétaro.</div>
                </div><h1>1 TARO = 1 Voto</h1><br/>
              {list}
              <div class="void-link">
                <div class="prop-bg"><a href="/PastProposals">
                <img src={past} class="ribvan"/> 
                  <div class="propsub">Propuestas pasads</div>
                  <div class="propopt">Historial</div>
                </a></div>
                <div class="prop-bg"><a href="/createProposal">
                  <img src={prop} class="ribvan"/> 
                  <div class="propsub">Crea una propuesta</div>
                  <div class="propopt">Proponer</div>
                </a></div>
              </div>
          </div>
         :
          <div id="vote">                
            <div class="center"><img src={vote2} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
            <h1><span  class="red">No hay propuestas por votar</span></h1><br/>
              <div class="floating">
                <div class="about-tx2">
                  Crea una propuesta o valida tu cuenta para participar. 
                  También puedes ver el historial de propuestas o conoce más antes de empezar.
                </div>
              </div>
              <div class="govgrid">
                <div class="prop-bg"><a href="/createProposal">
                  <img src={prop} class="ribvan"/> 
                  <div class="propsub">Crea una propuesta</div>
                  <div class="propopt">Proponer</div>
                </a></div>
                <div class="prop-bgr"><a href="/About">
                  <img src={reward} class="ribvan"/>
                  <div class="propsub">Ver documentación</div>
                  <div class="propopt">Conoce +</div>
                </a></div>
              </div>
          </div>
    }
  </div>
</div>
    }
    </body>
  );
};

 export default ProposalList;
