import { useState, useContext, useEffect } from 'react';
import { Form, Button, Row} from 'react-bootstrap';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import IsLoadingModal from '../modals/IsLoadingModal';
import CreateProposalSuccessModal from '../modals/CreateProposalSuccessModal';
import CreateProposalErrorModal from '../modals/CreateProposalErrorModal';
import { LanguageContext } from '../contexts/LanguageContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';
import { EthersContext } from '../contexts/EthersContext';
import { TaroContext } from '../contexts/TaroContext';

import prop from '../assets/prop.png';

import Taro from '../contracts/contracts/Taro.sol/Taro.json';
import taroAddress from '../contracts/contracts/Taro/contract-address.json';

import GovernorAlpha from '../contracts/contracts/GovernorAlpha.sol/GovernorAlpha.json';
import governorAlphaAddress from '../contracts/contracts/GovernorAlpha/contract-address.json';

const CreateProposal = () => {
  let [form, setForm] = useState();
  let [loadingModalShow, setLoadingModalShow] = useState();
  let [errorModalShow, setErrorModalShow] = useState();
  let [isConnected, setIsConnected] = useState();
  let [ethersProvider, setEthersProvider] = useState();
  let [signerAddress, setSignerAddress] = useState();
  let [successModalShow, setSuccessModalShow] = useState();

  let [isEnglish] = useContext(LanguageContext);
  let {ethersSigner, setEthersSigner, provider, setProvider} = useContext(EthersContext);
  let {taro, setTaro} = useContext(TaroContext);
  let {governorAlpha, setGovernorAlpha} = useContext(GovernorAlphaContext);
  
  useEffect(() => {
    const main = async () => {
      // setIsMetamaskInstalled(true);
      setIsConnected(false);
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
              setIsConnected(true);
            };
          console.log(`metamaskAccount ${metamaskAccount}`);

          //Force the browser to refresh whenever the network chain is changed
          // let chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
          // _ethereumProvider.on('chainChanged', handleChainChanged);
          // console.log('chainId: ', chainId);

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

  //Delay function is only for development
  // const delay = () => new Promise(res => setTimeout(res, 2000));

  const handleOnSubmit = async e => {
    e.preventDefault();
    setLoadingModalShow(true);
    console.log('form: ', form);

    try {
      form.budget = ethers.BigNumber.from(form.budget);

      let tx = await governorAlpha.propose(form);
      let txReceipt = await tx.wait(1);
      console.log('form tx: ', txReceipt);
      handleOnLoadingModal();
      setSuccessModalShow(true);
    } catch (e) {
      handleOnLoadingModal();
      setErrorModalShow(true);
    };
  };
  //expiration and requiredTaroToVote are hardcoded because these fields are needed for the smart contract.  The front end is not ready to use these fields.  Later, when the front end is ready, these inputs can be added back into the form inputs.
  const setField = (field, value) => {
    const date = new Date();
    const time = date.getTime();
    let timeAsBigNumber = ethers.BigNumber.from(time);

    setForm({
      ...form,
      [field]: value,
      expiration: 0,
      requiredTaroToVote: 0,
      proposalTime: timeAsBigNumber,
      proposer: signerAddress
    });
  };

  const handleOnChangeTitle = e => {
    setField('title', (e.target.value).toString());
  };

  const handleOnChangeTypeOfAction = e => {
    setField('typeOfAction', (e.target.value).toString());
  };

  const handleOnChangeNeighborhood = e => {
    setField('neighborhood', (e.target.value).toString());
  };

  const handleOnChangePersonInCharge = e => {
    setField('personInCharge', (e.target.value).toString());
  };

  const handleOnChangeDescription = e => {
    setField('description', (e.target.value).toString());
  };

  // const handleOnChangeExpiration = e => {
  //   setField('expiration', ethers.BigNumber.from(e.target.value));
  // };

  const handleOnChangeBudget = e => {
    setField('budget', e.target.value);
  };

  // const handleOnChangeRequiredTaroToVote = e => {
  //   setField('requiredTaroToVote', ethers.BigNumber.from(e.target.value));
  // };

  const handleOnLoadingModal = () => {
    setLoadingModalShow(false);
  };

  const handleOnErrorModal = () => {
    setErrorModalShow(false);
    window.location.reload();
  };

  const handleOnAlreadySubmitted = () => {
    window.location.reload();
  };
  

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

  return (
    <body id="quiz">
      {isEnglish === 'english'
      ?
      <div id="proposal" class="newprop">
      <div class="progress-holder">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
      </div>
      <h1><span  class="yellow">New Proposal</span></h1><br/><br/>
      <div class="center"><img src={prop} alt="New proposal" class="prop-img"/></div>
      
      <Form autocomplete="off" id="margin">
          <Form.Group as={Row} controlId="formTitle">
          <Form.Label  >
            1. Proposal Title
            </Form.Label>
            <Form.Control type="text"
              placeholder="🎯 what needs to be done?"
              onChange={handleOnChangeTitle}/>
          </Form.Group>

          <Form.Group as={Row} controlId="formNeighborhood" >
            <Form.Label  >
            2. Location
            </Form.Label>
              <Form.Control as="select" data-live-search="true"
                onChange={handleOnChangeNeighborhood}>
                <option disabled selected>📍 Where will the proposal take place</option>
                <optgroup label="Del. Felipe Carrillo Puerto Región 7">
                  <option>Cerro Prieto</option>
                  <option>El Patol</option>
                  <option>El Pie</option>
                  <option>El Transito</option>
                  <option>La Purisima</option>
                  <option>La Tinaja de la Estancia</option>
                  <option>San Isidro el Alto</option>
                </optgroup>
 
                <optgroup label="Del. Felipe Carrillo Puerto Región 8">
                  <option>El Nabo</option>
                  <option>El Zapote</option>
                  <option>Huertas La Joya</option>
                  <option>Jardines de Azucenas</option>
                  <option>La Palma</option>
                  <option>Las Camelinas</option>
                  <option>Laderas de San Pedro / Prados del Rincon</option>
                  <option>Mompani</option>
                  <option>Patria Nueva</option>
                  <option>Puerta Navarra</option>
                  <option>Puerta del Sol</option>
                  <option>Puerta Verona</option>
                  <option>Rancho San Pedro</option>
                  <option>Santo Niño de Praga</option>
                  <option>Tenochtitlan</option>
                  <option>Tlacote el Alto</option>
                  <option>Tlacote el Bajo</option>
                  <option>Valle de Santiago</option>
                  <option>Villa Real </option>
                  <option>Viñedos</option>
                </optgroup>

                <optgroup label="Del. Felipe Carrillo Puerto Región 9">
                  <option>5 de Febrero</option>
                  <option>Campo Militar</option>
                  <option>Comisión Estatal de Aguas</option>
                  <option>Demetrio Vallejo</option>
                  <option>Desarrollo Especial</option>
                  <option>Ejido Modelo</option>
                  <option>Ensueño</option>
                  <option>El Rosario</option>
                  <option>Eucaliptos</option>
                  <option>Fraccionamiento Carolina</option>
                  <option>Ferrocarrileros</option>
                  <option>Jardines del Valle</option>
                  <option>José María Arteaga</option>
                  <option>La Aurora</option>
                  <option>La Carambada</option>
                  <option>La Capilla</option>
                  <option>Las Flores</option>
                  <option>La Sierrita</option>
                  <option>Parque La Gloria</option>
                  <option>Prados de la Capilla</option>
                  <option>Residencial Italia</option>
                  <option>Residencial Galindas</option>
                  <option>Residencial Gema</option>
                  <option>Rayito</option>
                  <option>Rinconada La Capilla</option>
                  <option>Rinconada Santa Anita</option>
                  <option>Santa Anita</option>
                  <option>San Antonio del Maurel</option>
                  <option>San Antonio de la Punta</option>
                  <option>Santa María Magdalena</option>
                  <option>Santiago</option>
                  <option>Villas Las Arboledas</option>
                  <option>Virreyes</option>
                  <option>Zona Industrial</option>
                  <option>Ampolletas</option>
                </optgroup>
                
                <optgroup label="Del. Felipe Carrillo Puerto Región 10">
                  <option>Arcangel</option>
                  <option>Aduana / Vías</option>
                  <option>Alborada</option>
                  <option>Bosques del Chamisal</option>
                  <option>Bosques del Sol</option>
                  <option>Carrillo</option>
                  <option>El Tintero</option>
                  <option>El Higo</option>
                  <option>El Mirador</option>
                  <option>El Sol</option>
                  <option>El Progreso</option>
                  <option>Ex-Hacienda "El Tintero"</option>
                  <option>Felipe Carrillo Puerto</option>
                  <option>Las Teresas</option>
                  <option>Los Laureles</option>
                  <option>La Luna</option>
                  <option>Rancho Bellavista</option>
                  <option>San Diego</option>
                  <option>San Sebastián</option>
                  <option>Santa Mónica</option>
                  <option>Santa Mónica 2</option>
                  <option>Solidaridad 90</option>
                  <option>Tabachines</option>
                  <option>Tonatiuh 1</option>
                  <option>Tonatiuh Secc. 2</option>
                  <option>Tonatiuh 3</option>
                  <option>Tonatiuh Secc. 4</option>
                  <option>Valle de San Pedro</option>
                  <option>Valle el Mezquital</option>
                </optgroup> 
              </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="formTypeOfAction">
          <Form.Label >
            3. Type of activity
            </Form.Label>
            <Form.Control as="select" data-live-search="true"
              onChange={handleOnChangeTypeOfAction}>
                <option disabled selected>⚙️ Select the type of acitivity</option>
                <option>Face-to-face event</option>
                <option>Online event</option>
                <option>Mixed event</option>
                <option>Public Work</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="formPersonInCharge">    
            <Form.Label  >
              4. Person in charge
            </Form.Label>
            <Form.Control as="select" class="selectpicker show-tick form-control"
              onChange={handleOnChangePersonInCharge}>
              <option disabled selected>🦸 Who will do the proposal?</option>
              <option>Citizens</option>
              <option>Government</option>
              <option>Organization or group</option>
              <option>Other (especify in description)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label>
             5. Description
          </Form.Label>
          <Form.Control className="description" as="textarea"
            type="text" rows={3}
            placeholder="📑Give details about your proposal"
            onChange={handleOnChangeDescription}/>
          </Form.Group>

          {/*
          <Form.Group as={Row} controlId="formExpiration">
            <Form.Label  >
              Expiration
            </Form.Label>
            <Form.Control type="text" placeholder="expiration" onChange={handleOnChangeExpiration}/>
          </Form.Group>
          */}

          <Form.Group as={Row} controlId="formBudget">
            <Form.Label  >
              6. Cost
            </Form.Label>
            <Form.Control as="select"
              onChange={handleOnChangeBudget}>
              <option disabled selected>💸 Proposal budget range</option>
              <option value="0">0, voluntary, unknown</option>
              <option value="1000">Up to 1,000 pesos</option>  
              <option value="10000">Up to 10,0000 pesos</option>
              <option value="100000">Up to 100,000 pesos</option>
            </Form.Control>
          </Form.Group>
          {/*
          <Form.Group as={Row} controlId="formRequiredTaroToVote">
            <Form.Label  >
              Required TARO to vote
          </Form.Label>
            <Form.Control type="text" placeholder="required TARO to vote" onChange={handleOnChangeRequiredTaroToVote}/>
          </Form.Group>
          */}
          <a class="jos" href="#proposal">Check your post before sending</a>
          <div class="center"><div class="quiz-bt" classntype="submit" onClick={handleOnSubmit}>🚀 Send Proposal</div></div>
          </Form>
        <IsLoadingModal
          show={loadingModalShow}
          onHide={handleOnLoadingModal}
        />

        <CreateProposalErrorModal
          show={errorModalShow}
          onHide={handleOnErrorModal}
        />

        <CreateProposalSuccessModal
          show={successModalShow}
          onHide={handleOnAlreadySubmitted}
        />
      </div>

        :

      <div id="proposal" class="newprop">
        <div class="progress-holder">
          <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
          </div>
        </div>
        <h1><span  class="yellow">Nueva propuesta</span></h1><br/><br/>
        <div class="center"><img src={prop} alt="New proposal" class="prop-img"/></div>
          
        <Form autocomplete="off" id="margin">
            <Form.Group as={Row} controlId="formTitle">
            <Form.Label  >
              1. Nombre de la propuesta
              </Form.Label>
              <Form.Control type="text"
                placeholder="🎯 ¿Qué hay que hacer?"
                onChange={handleOnChangeTitle}/>
            </Form.Group>
          
            <Form.Group as={Row} controlId="formNeighborhood" >
              <Form.Label  >
              2. Lugar
              </Form.Label>
                <Form.Control as="select" data-live-search="true"
                  onChange={handleOnChangeNeighborhood}>
                  <option disabled selected>📍 ¿Dónde es la propuesta?</option>
                  <optgroup label="Del. Felipe Carrillo Puerto Región 7">
                    <option>Cerro Prieto</option>
                    <option>El Patol</option>
                    <option>El Pie</option>
                    <option>El Transito</option>
                    <option>La Purisima</option>
                    <option>La Tinaja de la Estancia</option>
                    <option>San Isidro el Alto</option>
                  </optgroup>
          
                  <optgroup label="Del. Felipe Carrillo Puerto Región 8">
                    <option>El Nabo</option>
                    <option>El Zapote</option>
                    <option>Huertas La Joya</option>
                    <option>Jardines de Azucenas</option>
                    <option>La Palma</option>
                    <option>Las Camelinas</option>
                    <option>Laderas de San Pedro / Prados del Rincon</option>
                    <option>Mompani</option>
                    <option>Patria Nueva</option>
                    <option>Puerta Navarra</option>
                    <option>Puerta del Sol</option>
                    <option>Puerta Verona</option>
                    <option>Rancho San Pedro</option>
                    <option>Santo Niño de Praga</option>
                    <option>Tenochtitlan</option>
                    <option>Tlacote el Alto</option>
                    <option>Tlacote el Bajo</option>
                    <option>Valle de Santiago</option>
                    <option>Villa Real </option>
                    <option>Viñedos</option>
                  </optgroup>
          
                  <optgroup label="Del. Felipe Carrillo Puerto Región 9">
                    <option>5 de Febrero</option>
                    <option>Campo Militar</option>
                    <option>Comisión Estatal de Aguas</option>
                    <option>Demetrio Vallejo</option>
                    <option>Desarrollo Especial</option>
                    <option>Ejido Modelo</option>
                    <option>Ensueño</option>
                    <option>El Rosario</option>
                    <option>Eucaliptos</option>
                    <option>Fraccionamiento Carolina</option>
                    <option>Ferrocarrileros</option>
                    <option>Jardines del Valle</option>
                    <option>José María Arteaga</option>
                    <option>La Aurora</option>
                    <option>La Carambada</option>
                    <option>La Capilla</option>
                    <option>Las Flores</option>
                    <option>La Sierrita</option>
                    <option>Parque La Gloria</option>
                    <option>Prados de la Capilla</option>
                    <option>Residencial Italia</option>
                    <option>Residencial Galindas</option>
                    <option>Residencial Gema</option>
                    <option>Rayito</option>
                    <option>Rinconada La Capilla</option>
                    <option>Rinconada Santa Anita</option>
                    <option>Santa Anita</option>
                    <option>San Antonio del Maurel</option>
                    <option>San Antonio de la Punta</option>
                    <option>Santa María Magdalena</option>
                    <option>Santiago</option>
                    <option>Villas Las Arboledas</option>
                    <option>Virreyes</option>
                    <option>Zona Industrial</option>
                    <option>Ampolletas</option>
                  </optgroup>
                  
                  <optgroup label="Del. Felipe Carrillo Puerto Región 10">
                    <option>Arcangel</option>
                    <option>Aduana / Vías</option>
                    <option>Alborada</option>
                    <option>Bosques del Chamisal</option>
                    <option>Bosques del Sol</option>
                    <option>Carrillo</option>
                    <option>El Tintero</option>
                    <option>El Higo</option>
                    <option>El Mirador</option>
                    <option>El Sol</option>
                    <option>El Progreso</option>
                    <option>Ex-Hacienda "El Tintero"</option>
                    <option>Felipe Carrillo Puerto</option>
                    <option>Las Teresas</option>
                    <option>Los Laureles</option>
                    <option>La Luna</option>
                    <option>Rancho Bellavista</option>
                    <option>San Diego</option>
                    <option>San Sebastián</option>
                    <option>Santa Mónica</option>
                    <option>Santa Mónica 2</option>
                    <option>Solidaridad 90</option>
                    <option>Tabachines</option>
                    <option>Tonatiuh 1</option>
                    <option>Tonatiuh Secc. 2</option>
                    <option>Tonatiuh 3</option>
                    <option>Tonatiuh Secc. 4</option>
                    <option>Valle de San Pedro</option>
                    <option>Valle el Mezquital</option>
                  </optgroup> 
                </Form.Control>
            </Form.Group>
          
            <Form.Group as={Row} controlId="formTypeOfAction">
            <Form.Label >
              3. Tipo de actividad 
              </Form.Label>
              <Form.Control as="select" data-live-search="true"
                onChange={handleOnChangeTypeOfAction}>
                  <option disabled selected>⚙️ Selecciona el tipo de actividad</option>
                  <option>Evento presencial</option>
                  <option>Evento en linea</option>
                  <option>Evento mixto</option>
                  <option>Obra Pública</option>
              </Form.Control>
            </Form.Group>
          
            <Form.Group as={Row} controlId="formPersonInCharge">    
              <Form.Label  >
                4. Responsable
              </Form.Label>
              <Form.Control as="select" class="selectpicker show-tick form-control"
                onChange={handleOnChangePersonInCharge}>
                <option disabled selected>🦸 ¿Quién tiene que hacerlo?</option>
                <option>Ciudadanos</option>
                <option>Gobierno</option>
                <option>Organismo o asociación</option>
                <option>Otro (especifica en descripción) </option>
              </Form.Control>
            </Form.Group>
          
            <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
              <Form.Label>
               5. Descripción
            </Form.Label>
            <Form.Control className="description" as="textarea"
              type="text" rows={3}
              placeholder="📑Describe a detalle tu propuesta"
              onChange={handleOnChangeDescription}/>
            </Form.Group>
          
            {/*
            <Form.Group as={Row} controlId="formExpiration">
              <Form.Label  >
                Expiration
              </Form.Label>
              <Form.Control type="text" placeholder="expiration" onChange={handleOnChangeExpiration}/>
            </Form.Group>
            */}
 
            <Form.Group as={Row} controlId="formBudget">
              <Form.Label  >
                6. Costo
              </Form.Label>
              <Form.Control as="select"
                onChange={handleOnChangeBudget}>
                <option disabled selected>💸 Presupuesto de la propuesta</option>
                <option value="0">0, voluntario o desconocido</option>
                <option value="1000">hasta 1,000 pesos</option>  
                <option value="10000">hasta 10,0000 pesos</option>
                <option value="100000">hasta 100,000 pesos</option>
              </Form.Control>
            </Form.Group>
            {/*
            <Form.Group as={Row} controlId="formRequiredTaroToVote">
              <Form.Label  >
                Required TARO to vote
            </Form.Label>
              <Form.Control type="text" placeholder="required TARO to vote" onChange={handleOnChangeRequiredTaroToVote}/>
            </Form.Group>
            */}
            <a class="jos" href="#proposal">Revisa tu puesta antes de enviar</a>
              <div class="center"><div class="quiz-bt" classntype="submit" onClick={handleOnSubmit}>🚀 Enviar propuesta</div></div>
            </Form>
          <IsLoadingModal
            show={loadingModalShow}
            onHide={handleOnLoadingModal}
          />
 
          <CreateProposalErrorModal
            show={errorModalShow}
            onHide={handleOnErrorModal}
          />
 
          <CreateProposalSuccessModal
            show={successModalShow}
            onHide={handleOnAlreadySubmitted}
          />
        </div>
        }
      </body>
      );
    };
export default CreateProposal;
