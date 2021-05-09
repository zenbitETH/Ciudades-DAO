
import { useState, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { ethers } from 'ethers';
import CreateProposalErrorModal from '../modals/CreateProposalErrorModal';
import IsLoadingModal from '../modals/IsLoadingModal';
import { LanguageContext } from '../contexts/LanguageContext';
import { GovernorAlphaContext } from '../contexts/GovernorAlphaContext';

const CreateProposal = () => {
  let [form, setForm] = useState();
  let [loadingModalShow, setLoadingModalShow] = useState();
  let [errorModalShow, setErrorModalShow] = useState();

  let {isEnglish} = useContext(LanguageContext);
  let {governorAlpha} = useContext(GovernorAlphaContext);

  //Delay function is only for development
  // const delay = () => new Promise(res => setTimeout(res, 2000));

  const handleOnSubmit = async e => {
    e.preventDefault();
    setLoadingModalShow(true);
    console.log('form: ', form);

    try {
      let tx = await governorAlpha.propose(form);
      let txReceipt = await tx.wait(1);
      console.log('form tx: ', txReceipt);
      handleOnLoadingModal();
    } catch (e) {
      handleOnLoadingModal();
      setErrorModalShow(true);
    };
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
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

  const handleOnChangeExpiration = e => {
    setField('expiration', ethers.BigNumber.from(e.target.value));
  };

  const handleOnChangeBudget = e => {
    setField('budget', ethers.BigNumber.from(e.target.value));
  };

  const handleOnChangeRequiredTaroToVote = e => {
    setField('requiredTaroToVote', ethers.BigNumber.from(e.target.value));
  };

  const handleOnLoadingModal = () => {
    setLoadingModalShow(false);
  };

  const handleOnErrorModal = () => {
    setErrorModalShow(false);
  };
  
  return (
    <div>
      {isEnglish ?
      <div className="gray">
        <Form >
        <text className="orange2">Create new urban governance proposal</text>
          <Form.Group as={Row} controlId="formTitle">
            <Form.Label>
              Title
            </Form.Label>
            <Form.Control type="text" placeholder="title" onChange={handleOnChangeTitle}/>
          </Form.Group>

          <Form.Group as={Row} controlId="formTypeOfAction">
            <Form.Label  >
              Type of action
            </Form.Label>
            <Form.Control type="text" placeholder="type" onChange={handleOnChangeTypeOfAction}/>
          </Form.Group>

          <Form.Group as={Row} controlId="formNeighborhood">
            <Form.Label  >
              Neighborhood
            </Form.Label>
            <Form.Control as="select" onChange={handleOnChangeNeighborhood}>
              <option>Santa Mónica 2</option>
              <option>Santa Mónica</option>
              <option>Progreso</option>
              <option>Ex-Hacienda El Tintero</option>
              <option>El Tintero</option>
              <option>El Mirador</option>
              <option>Otra (mencionar en propuesta)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="formPersonInCharge">
            <Form.Label  >
              Person in charge
            </Form.Label>        
            <Form.Control as="select" onChange={handleOnChangeTypeOfAction}>
              <option>Actividad</option>
              <option>Acuerdo</option>
              <option>Obra o servicio público</option>
            </Form.Control>            
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label  >
              Description
          </Form.Label>          
          <Form.Control as="textarea" type="text" rows={3} placeholder="description" onChange={handleOnChangeDescription}/>            
          </Form.Group>

          <Form.Group as={Row} controlId="formExpiration">
            <Form.Label  >
              Expiration
            </Form.Label>          
            <Form.Control type="text" placeholder="expiration" onChange={handleOnChangeExpiration}/>            
          </Form.Group>

          <Form.Group as={Row} controlId="formBudget">
            <Form.Label  >
              Budget
            </Form.Label>          
            <Form.Control type="text" placeholder="budget" onChange={handleOnChangeBudget}/>            
          </Form.Group>

          <Form.Group as={Row} controlId="formRequiredTaroToVote">
            <Form.Label  >
              Required TARO to vote
          </Form.Label>        
            <Form.Control type="text" placeholder="required TARO to vote" onChange={handleOnChangeRequiredTaroToVote}/>          
          </Form.Group>
          <Button className="submitbutton"classNtype="submit" onClick={handleOnSubmit}>Submit proposal</Button>
        </Form>

        <IsLoadingModal
            show={loadingModalShow}
            onHide={handleOnLoadingModal}
          />

          <CreateProposalErrorModal
            show={errorModalShow}
            onHide={handleOnErrorModal}
          />
    </div>
    :
    <div className="gray">
      <Form >
        <text className="orange2">Crear nueva propuesta de gobernanza urbana</text>
          <Form.Group as={Row} controlId="formTitle">
            <Form.Label>
              Título
            </Form.Label>
            <Form.Control type="text" placeholder="Título" onChange={handleOnChangeTitle}/>
          </Form.Group>

          <Form.Group as={Row} controlId="formTypeOfAction">
            <Form.Label  >
              Tipo de acción
            </Form.Label>
            <Form.Control as="select" onChange={handleOnChangeTypeOfAction}>
              <option>Actividad</option>
              <option>Acuerdo</option>
              <option>Obra o servicio público</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="formNeighborhood">
            <Form.Label  >
              Colonia
            </Form.Label>
            <Form.Control as="select" onChange={handleOnChangeNeighborhood}>
              <option>Santa Mónica 2</option>
              <option>Santa Mónica</option>
              <option>Progreso</option>
              <option>Ex-Hacienda El Tintero</option>
              <option>El Tintero</option>
              <option>El Mirador</option>
              <option>Otra (mencionar en propuesta)</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="formPersonInCharge">
            <Form.Label  >
              Persona o entidad a cargo
            </Form.Label>        
          <Form.Control type="text" placeholder="Vecinos, Gobierno" onChange={handleOnChangePersonInCharge}/>            
          </Form.Group>

          <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
            <Form.Label  >
              Descripción
          </Form.Label>          
            <Form.Control as="textarea" type="text" rows={3} placeholder="Describe tu propuesta" onChange={handleOnChangeDescription}/>            
          </Form.Group>

          <Form.Group as={Row} controlId="formExpiration">
            <Form.Label>
              Expiración
          </Form.Label>
            <Form.Control as="select" onChange={handleOnChangeTypeOfAction}>
              <option>1 semana</option>
              <option>1 mes</option>
              <option>Hasta que se cumpla</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="formBudget">
            <Form.Label  >
              Presupuesto
          </Form.Label>
          
            <Form.Control type="text" placeholder="Presupuesto" onChange={handleOnChangeBudget}/>
            
          </Form.Group>

          <Form.Group as={Row} controlId="formRequiredTaroToVote">
            <Form.Label  >
              TARO delegado minimo
          </Form.Label>        
            <Form.Control type="text" placeholder="Establece el TARO minimo para votar" onChange={handleOnChangeRequiredTaroToVote}/>          
          </Form.Group>
          <Button className="submitbutton"classNtype="submit" onClick={handleOnSubmit}>Enviar propuesta</Button>
        </Form>

        <IsLoadingModal
            show={loadingModalShow}
            onHide={handleOnLoadingModal}
          />
          <CreateProposalErrorModal
            show={errorModalShow}
            onHide={handleOnErrorModal}
          />
    </div>
    }
  </div>
  );
};

export default CreateProposal;
