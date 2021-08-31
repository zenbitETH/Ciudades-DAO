import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext';
import prop from '../assets/prop.png';

import send from '../assets/sended.svg';
import vote2 from '../assets/vote2.svg';

const CreateProposalSuccessModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?

      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="main"
      >
      <div class="center"><div class="jump"><img src={send} alt="Alert about verification" class="prop-img"/></div></div>
      <h1><div >Proposal sended! </div></h1><br/>
      <div class="about-tx">You have successfully created a proposal!
        Create more proposals to increase your voting power.
        The first 20 proposals will give you 100 TARO each!
      </div>
        <div class="void-link">
          <div class="prop-bgr"><a href="/ProposalList#vote">
              <img src={vote2} class="ribvan"/> 
              <div class="propsub">Avaliable proposals</div>
              <div class="propopt">Vote</div>
            </a></div>
            <div class="prop-bg2"><a href="/CreateProposal">
              <img src={prop} class="ribvan"/>
              <div class="propsub">New proposal</div>
              <div class="propopt">Create </div>
            </a></div>
          </div>
        
      </Modal>
      :
      <Modal
        {...props}
        size="lg"
        centered
        className="main"
      >
        <div className="big-icon">🎉<div className="modalheader">
          ¡Creaste una propuesta!</div>
        </div>
         <p className="white">Ve a la siguiente pantalla para votar por ella</p>
        
        <Modal.Body>
          
          <p className="main">
            Crea más propuestas para incrementar tu poder de voto.
            ¡Las primeras 5 propuestas te daran 20 TARO cada una !
          </p>
          <p>
            <Link className="alt2" to="/ProposalList">Ver propuestas</Link>
          </p>
        </Modal.Body>
      </Modal>
    }
    </div>
  );
};

export default CreateProposalSuccessModal;
