import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext';

import confirm from '../assets/confirm.svg';
import prop from '../assets/prop.png';
import vote2 from '../assets/vote2.svg';


const QuizAlreadySubmittedModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
    {isEnglish === 'english' ?

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-2"
      >
      <div class="center"><div><img src={confirm} alt="Alert about verification" class="prop-img"/></div></div>
      <h1><span>Account already validated </span></h1><br/>
      <div class="about-tx"> Now you can create and vote on proposals on the urban governance page.</div>
      <Modal.Body>
        <div class="void-link">
        <div class="prop-bg"><a href="/Createproposal">
          <img src={prop} class="ribvan"/> 
          <div class="propsub">Create a proposal</div>
          <div class="propopt">Propose</div>
        </a></div>
        <div class="prop-bg2"><a href="/ProposalList">
          <img src={vote2} class="ribvan"/>
          <div class="propsub">Avalilable proposals</div>
          <div class="propopt">Vote</div>
        </a></div>
      </div>
      </Modal.Body>
      </Modal>
      :
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-2"
    >

<div className="big-icon">🚫<div className="modalheader">
Ya has respondido el cuestionario</div>
    </div>
      
      <Modal.Body>
        <p>
         Ahora puedes crear y votar propuestas en la gobernanza urbana<Link className="alt2" to="/proposalList">🗳️ Ver propuestas</Link>
        </p>
      </Modal.Body>
    </Modal>
    }
    </div>
  );
};

export default QuizAlreadySubmittedModal;
