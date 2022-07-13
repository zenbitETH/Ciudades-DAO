import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import reward from '../assets/reward.png';
import prop from '../assets/prop.svg';
import vote2 from '../assets/vote2.svg';

const QuizSuccessModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      <Modal
        {...props}
        class="modal-fullscreen-xxl-down"
        size="xl"
        centered
      >
        <h1><span id="vote" class="yellow-jos">¡Felicidades! </span></h1><br/>
          <div class="center"><div class="jump"><img src={reward} alt="Alert about verification" class="prop-img"/></div></div>
          <h1><span> Ahora tienes VOTO</span></h1>
          <h3> <span class="yellow">Has validado cuenta por seis meses y tu recompensa en tokens VOTO se han transferido a su cuenta. </span></h3>
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
    </div>
  );
};

export default QuizSuccessModal;
