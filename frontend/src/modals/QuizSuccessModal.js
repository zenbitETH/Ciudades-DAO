import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import reward from '../assets/reward.png';
import prop from '../assets/prop.png';
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
      <h1><span id="vote" class="yellow-jos">¡Felicidades! </span></h1><br/>
        <div class="center"><div class="jump"><img src={reward} alt="Alert about verification" class="prop-img"/></div></div>
        <h1><span> Ahora tienes TARO</span></h1>
        <h3> <span class="yellow">Has validado cuenta por seis meses y tu recompensa en tokens TARO se han transferido a su cuenta. </span></h3>
      <Modal.Body>
      <div class="void-link">
            <div class="prop-bgr"><a href="/createProposal">
              <img src={prop} class="ribvan"/> 
              <div class="propsub">Crea una propuesta</div>
              <div class="propopt">Proponer</div>
            </a></div>
            <div class="prop-bgr"><a href="/ProposalList#vote">
            <img src={vote2} class="ribvan"/> 
            <div class="propsub">Propuestas</div>
            <div class="propopt">Por votar</div>
          </a></div>
          </div>
      </Modal.Body>
    </Modal>
      :
      <Modal
        {...props}
        class="modal-fullscreen-xxl-down"
        size="xl"
        centered
      >
        <h1><span id="vote" class="yellow-jos"> Congratulations! </span></h1><br/>
        <div class="center"><div class="jump"><img src={reward} alt="Alert about verification" class="prop-img"/></div></div>
        <h1><span> Validated address</span></h1>
        <div class="about-tx"> <span class="yellow">You have validated your account for six   months and TARO tokens have been transfered to your account. </span></div>
        <Modal.Body>
        <div class="void-link">
          <a class="prop-bgr"href="/createProposal">
            <img src={prop} class="ribvan"/> 
            <div class="propsub">Create proposal</div>
            <div class="propopt">Propose</div>
          </a>
          <a class="prop-bgr" href="/ProposalList#vote">
            <img src={vote2} class="ribvan"/> 
            <div class="propsub">Available proposals</div>
            <div class="propopt">Vote</div>
          </a>
        </div>
        </Modal.Body>
      </Modal>
      
    }
    </div>
  );
};

export default QuizSuccessModal;
