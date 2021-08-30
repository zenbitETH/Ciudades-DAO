import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext';
import reward from '../assets/reward.png';
import prop from '../assets/prop.png';
import past from '../assets/past.png';
import vote2 from '../assets/vote2.svg';

const QuizSuccessModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?

      <Modal
        {...props}
        class="modal-fullscreen-xxl-down"
        size="xl"
        centered
      >
        <h1><span id="vote" class="orange-jos"> Congratulations! </span></h1><br/>
          <div class="center"><div class="jump"><img src={reward} alt="Alert about verification" class="prop-img"/></div></div>
          <h1><span> Now you have TARO</span></h1>
          <div class="about-tx2"> <span class="orange">You have validated your account for six months and TARO tokens have been transfered to your account. </span> 
          Now you can create or vote on urban governance proposals. Touch one section below to start using your TARO.</div>
        <Modal.Body>
        <div class="void-link">
              <div class="prop-bg"><a href="/createProposal">
                <img src={prop} class="ribvan"/> 
                <div class="propsub">Crea una propuesta</div>
                <div class="propopt">Proponer</div>
              </a></div>
              <div class="prop-bg2"><a href="#vote">
              <img src={vote2} class="ribvan"/> 
              <div class="propsub">Propuestas</div>
              <div class="propopt">Por votar</div>
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
        </Modal.Body>
      </Modal>
      :


      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="big-icon">🎉<div className="modalheader">
        !Felicidades! pasaste el cuestionario!</div>
            </div>
            <p className="main">Has ganado tokens TARO y ahora puedes participar en la gobernanza de la ciudad al crear o votar propuestas.</p>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link className="alt2" to="/ProposalList">🗳️ Crea o vota propuestas</Link>
        </Modal.Body>
      </Modal>
    }
    </div>
  );
};

export default QuizSuccessModal;
