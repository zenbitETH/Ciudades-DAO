import { useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import Proposal from './Proposal';
import { LanguageContext } from '../contexts/LanguageContext';
import { ValidationRequiredContext } from '../contexts/ValidationRequiredContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';
import ValidationRequired from '../alerts/ValidationRequired';
import { EthersContext } from '../contexts/EthersContext';
import { ConnectedContext } from '../contexts/ConnectedContext';


import Taro from '../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json';
import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

import prop from '../assets/prop.png';
import vote2 from '../assets/vote2.svg';
import past from '../assets/past.png';
import key from '../assets/about-img.svg'


const ProposalList = () => {
  let [retrievedProposals, setRetrievedProposals] = useState([]);
  let [taro, setTaro] = useState();
  let [signerAddress, setSignerAddress] = useState();
  

  let {setIsValidated,isValidated} = useContext(ValidationRequiredContext);
  let [isEnglish] = useContext(LanguageContext);
  let {setGovernorAlpha} = useContext(GovernorAlphaContext);

  let [ethersProvider, setEthersProvider] = useState();
  let [isConnecting, setIsConnecting] = useState();
  let [isMetamaskInstalled, setIsMetamaskInstalled] = useState();
//let [isSkaleSwitched, setIsSkaleSwitched] = useState();
  let [currentMetaMaskAccount, setCurrentMetaMaskAccount] = useState(null);
  var [userBalance, setUserBalance] = useState();
//let [isConnectingToSkale, setIsConnectingToSkale] = useState();
  
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
  

  return (
  <body id="">
      {isEnglish === 'english'
      ?
   
        <div class="proplist">
          {isConnected ?
            <span>{isValidated ? <div id="margin"><br/>
          {list.length > 0 ?
            <div id="vote" className="props">
              <h1><span >Proposals to vote</span></h1><br/>
              <img src={vote2} alt="Alert about key" class="prop-img"/>
                <div class="floating">
                  <h3>Use the TARO you have earned to
                   vote for governance proposals in the city of Querétaro.</h3>
                  </div><h1>1 TARO = 1 Vote</h1><br/>
                {list}
                <div class="void-link">
                  <div class="bg-grid0"><a href="/PastProposals">
                  <img src={past} class="homevan"/> 
                    <div class="propsub">Past proposals</div>
                    <div class="propopt">Record</div>
                  </a></div>
                  <div class="bg-grid0"><a href="/createProposal">
                    <img src={prop} class="homevan"/> 
                    <div class="propsub">Create a proposal</div>
                    <div class="propopt">Propose</div>
                  </a></div>
                </div>
            </div>
           :
            <div><br/>
              <div class="center"><img src={vote2} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
              <h1><span  class="red">No proposals to vote</span></h1><br/>
      
                  <div class="void-link">
                  <div class="bg-grid0"><a href="/PastProposals">
                  <img src={past} class="homevan"/> 
                    <div class="propsub">Past proposals</div>
                    <div class="propopt">Record</div>
                  </a></div>
                  <div class="bg-grid0"><a href="/createProposal">
                    <img src={prop} class="homevan"/> 
                    <div class="propsub">Create a proposal</div>
                    <div class="propopt">Propose</div>
                  </a></div>
                </div>
            </div>
          }
        </div> : <ValidationRequired />}</span>
        : 
        <div class="connect">
          <div class="center"><img src={key} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
          <h1 class="white">Connect your web3 address</h1><br/>
        </div>
        }
      </div>
    :

    <div class="proplist">
    {isConnected ?
      <span>{isValidated ? <div id="margin"><br/>
    {list.length > 0 ?
      <div id="vote" className="props">
        <h1><span >Propuestas por votar</span></h1><br/>
        <img src={vote2} alt="Alert about key" class="prop-img"/>
          <div class="floating">
            <h3>Usa tu TARO para votar por propuestas de VoTARO Ciudad DAO</h3>
            </div><h1>1 TARO = 1 Voto</h1><br/>
          {list}
          <div class="void-link">
            <div class="bg-grid0"><a href="/PastProposals">
            <img src={past} class="homevan"/> 
              <div class="propsub">Propuestas pasadas</div>
              <div class="propopt">Historial</div>
            </a></div>
            <div class="bg-grid0"><a href="/createProposal">
              <img src={prop} class="homevan"/> 
              <div class="propsub">Crear propuesta</div>
              <div class="propopt">Proponer</div>
            </a></div>
          </div>
      </div>
     :
      <div><br/>
        <div class="center"><img src={vote2} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
        <h1><span  class="red">Sin propuestas por votar</span></h1><br/>

            <div class="void-link">
            <div class="bg-grid0"><a href="/PastProposals">
            <img src={past} class="homevan"/> 
              <div class="propsub">Propuestas pasadas</div>
              <div class="propopt">Historial</div>
            </a></div>
            <div class="bg-grid0"><a href="/createProposal">
              <img src={prop} class="homevan"/> 
              <div class="propsub">Crear propuesta</div>
              <div class="propopt">Proponer</div>
            </a></div>
          </div>
      </div>
    }
  </div> : <ValidationRequired />}</span>
  : 
  <div class="connect">
    <div class="center"><img src={key} id="CityDAO" alt="Querétaro DAO" class="prop-img"/></div>
    <h1 class="white">Conecta tu llave web3</h1>
  </div>
  }
</div>
    }
    </body>
  );
};

 export default ProposalList;
