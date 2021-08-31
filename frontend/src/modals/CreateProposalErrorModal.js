import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import voidz from '../assets/void.png';
import prop from '../assets/prop.png';

const CreateProposalErrorModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english'

      ?

      <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-2"
    >
      <div class="center"><div><img src={voidz} alt="Alert about verification" class="prop-img"/></div></div>
      <h1><span>Proposal was not submitted </span></h1><br/>
      <div class="about-tx"> </div>

      
      <Modal.Body class="about-tx">
        <div>
        ⚠️ 1. Please be sure you are connected to MetaMask and that you entered your information correctly.
        </div>
        <p/>
        <div>
        ⚠️ 2. Make sure you have passed the quiz so that you are validated to make proposals.
        </div>
        <p/>
        <div>
        ⚠️ 3. Review that all the fields are filled correctly.
        </div>
        <p/>

  
          <div class="prop-bg"><a href="/CreateProposal">
            <img src={prop} class="ribbons"/>
            <div class="propsub">Review your proposal</div>
            <div class="propopt">Try again</div>
          </a></div>
      </Modal.Body>
    </Modal>

      :

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-2"
      >
        <div className="big-icon">🚫<div className="modalheader">
          No se envió tu propuesta</div>
        </div>
        <Modal.Body className="main">
          <div>
          ⚠️ 1. Asegúrese de estar conectado a MetaMask y de haber ingresado su información correctamente.
          </div>
          <p/>
          <div>
          ⚠️ 2. Además, asegurate de haber validado tu cuenta y haber llenado todos los campos.
          </div>
          <p/>
          <div>
          ⚠️ 3. El costo deben ser solo números.
          </div>
          <p/>
          <div className="modalheader">
            Verifica e intenta de nuevo
          </div>
        </Modal.Body>
      </Modal>
      }
    </div>
  );
};

export default CreateProposalErrorModal;
