import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext';
import voidz from '../assets/void.png';
import reward from '../assets/TAROrew.png';
import verify from '../assets/verify.png';

const QuizFailureModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?

      
        <Modal
          {...props}
          size="lg"
          centered
          className="modal-2"
        >

          <div class="center"><div><img src={voidz} alt="Alert about verification" class="prop-img"/></div></div>
          <h1><span>Wrong answers </span></h1><br/>
          <div class="about-tx">You have failed the validation or some answer is missing, take a look to the about page and try again.</div>
          <Modal.Body>
          <div class="void-link">
            <div class="prop-bgr"><a href="/About">
                <img src={reward} class="ribvan"/> 
                <div class="propsub">Votaro documentation</div>
                <div class="propopt">About</div>
              </a></div>
              <div class="prop-bg2"><a href="/Quiz">
                <img src={verify} class="ribvan"/>
                <div class="propsub">Review your ansers</div>
                <div class="propopt">Try again</div>
              </a></div>
            </div>
          </Modal.Body>
        </Modal>
    

      :

      <Modal
      {...props}
      size="lg"
      centered
      className="modal-2"
    >

      <div class="center"><div><img src={voidz} alt="Alert about verification" class="prop-img"/></div></div>
      <h1><span>Respuesta incorrecta </span></h1><br/>
      <div class="about-tx">Fallaste la validación o falta alguna respuesta, echa un vistazo a la documentación o intenta nuevamente.</div>
      <Modal.Body>
      <div class="void-link">
        <div class="prop-bgr"><a href="/About">
            <img src={reward} class="ribvan"/> 
            <div class="propsub">Ver documentación</div>
            <div class="propopt">Conoce +</div>
          </a></div>
          <div class="prop-bg2"><a href="/Quiz">
            <img src={verify} class="ribvan"/>
            <div class="propsub">Intentalo de nuevo </div>
            <div class="propopt">Revisar</div>
          </a></div>
        </div>
      </Modal.Body>
    </Modal>
    }
    </div>
  );
};

export default QuizFailureModal;
