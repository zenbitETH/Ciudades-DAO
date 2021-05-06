import { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Form, Button, Row, Col } from 'react-bootstrap';
import IsLoadingModal from '../modals/IsLoadingModal';
import { TaroContext } from '../contexts/TaroContext';

const CreateProposal = () => {
  let [form, setForm] = useState();
  let [loadingModalShow, setLoadingModalShow] = useState();
  let {taroSimple} = useContext(TaroContext);

  //Delay function is only for development
  const delay = () => new Promise(res => setTimeout(res, 2000));

  const handleOnSubmit = async e => {
    e.preventDefault();
    setLoadingModalShow(true);
    // await delay();
    console.log('form: ', form);
    let tx = await taroSimple.addUser(form.title, form.budget);
    await tx.wait(1);
    console.log('tx: ', tx);
    handleOnLoadingModal();
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });
  };

  const handleOnChangeTitle = e => {
    setField('title', e.target.value);
  };

  const handleOnChangeTypeOfAction = e => {
    setField('typeOfAction', e.target.value);
  };

  const handleOnChangeNeighborhood = e => {
    setField('neighborhood', e.target.value);
  };

  const handleOnChangePersonInCharge = e => {
    setField('personInCharge', e.target.value);
  };

  const handleOnChangeDescription = e => {
    setField('description', e.target.value);
  };

  const handleOnChangeExpiration = e => {
    setField('expiration', e.target.value);
  };

  const handleOnChangeBudget = e => {
    setField('budget', e.target.value);
  };

  const handleOnChangeRequiredTaroToVote = e => {
    setField('requiredTaroToVote', e.target.value);
  };

  const handleOnLoadingModal = () => {
    setLoadingModalShow(false);
  };
let {isEnglish} = useContext(LanguageContext);
  return (
    <div>
      {isEnglish ?
      <div>
      <text>Create new urban governance proposal</text>
        <Form className="gray">
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
            <Form.Control type="text" placeholder="neighborhood" onChange={handleOnChangeNeighborhood}/>
          </Form.Group>

          <Form.Group as={Row} controlId="formPersonInCharge">
            <Form.Label  >
              Person in charge
            </Form.Label>        
          <Form.Control type="text" placeholder="Person in charge" onChange={handleOnChangePersonInCharge}/>
            
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
    </div>
    :
    <div>

    </div>
    }
  </div>
  );
};

export default CreateProposal;
