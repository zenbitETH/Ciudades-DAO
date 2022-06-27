import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
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
        <h1><span>Wrong answers </span></h1><br/>
        <h3 >You have failed the validation or some answer is missing, take a look to the about page and try again.</h3>
        <Modal.Body>
        <div class="void-link">
          <a class="prop-bgr" href="/About">
            <img src={reward} class="ribvan"/> 
            <div class="propsub">Check the docs</div>
            <div class="propopt">About</div>
          </a>
          <a class="prop-bgr" href="/Quiz">
            <img src={verify} class="ribvan"/>
            <div class="propsub">Review your ansers</div>
            <div class="propopt">Try again</div>
          </a>
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
        <h1><span>Respuesta incorrecta </span></h1><br/>
        <h3>Fallaste la validación o falta alguna respuesta, echa un vistazo a la documentación o intenta nuevamente.</h3>
        <Modal.Body>
        <div class="void-link">
          <div class="prop-bgr"><a href="/About">
            <img src={reward} class="ribvan"/> 
            <div class="propsub">Ver documentación</div>
            <div class="propopt">Conoce +</div>
          </a></div>
            <div class="prop-bgr"><a href="/Quiz">
            <img src={verify} class="ribvan"/>
            <div class="propsub">Intentalo de nuevo </div>
            |<div class="propopt">Revisar</div>
          </a></div>
        </div>
        </Modal.Body>
      </Modal>
    }
    </div>
  );
};

export default QuizFailureModal;
