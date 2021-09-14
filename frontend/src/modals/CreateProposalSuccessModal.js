import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';

import prop from '../assets/prop.png';
import send from '../assets/sended.svg';
import vote2 from '../assets/vote2.svg';

const CreateProposalSuccessModal = (props) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div >
      {isEnglish === 'english' ?

      <Modal
        class="grid-block"
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="main"
      >
      <div class="center"><div class="jump"><img src={send} alt="Alert about verification" class="prop-img"/></div></div>
      <h1><div >Proposal sended! </div></h1><br/>
      
        
        <h3>
           Your proposal is ready to be voted, <span class="orange">use your TARO to vote.</span>
          <span class="yellow"> The first 20 proposals will give you 50 TARO each! </span>
          Create more proposals to increase your voting power. 
        </h3>
        
      
        <div class="void-link">
          <div class="prop-bgr"><a href="/ProposalList#vote">
              <img src={vote2} class="ribvan"/> 
              <div class="propsub">Avaliable proposals</div>
              <div class="propopt">Vote</div>
            </a></div>
            <div class="prop-bg2"><a href="/CreateProposal">
              <img src={prop} class="ribvan"/>
              <div class="propsub">New proposal</div>
              <div class="propopt">Propose </div>
            </a></div>
          </div>
        
      </Modal>
      :
      <Modal
      class="grid-block"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="main"
    >
    <div class="center"><div class="jump"><img src={send} alt="Alert about verification" class="prop-img"/></div></div>
    <h1><div >¡Propuesta enviada! </div></h1><br/>
    <h3>Tu propuesta esta lista para ser votada<span class="orange"> usa tu TARO para votar. </span>
      <span class="yellow">¡Las primeras 20 propuestas te darán 50 TARO cada una! </span>
      Crea mas propuestas para incrementar tu poder de voto. 
    </h3>
      <div class="void-link">
        <div class="prop-bgr"><a href="/ProposalList#vote">
            <img src={vote2} class="ribvan"/> 
            <div class="propsub">Propuestas por</div>
            <div class="propopt">Votar</div>
          </a></div>
          <div class="prop-bgr"><a href="/CreateProposal">
            <img src={prop} class="ribvan"/>
            <div class="propsub">Nueva propuesta</div>
            <div class="propopt">Proponer </div>
          </a></div>
        </div>
      
    </Modal>
    }
    </div>
  );
};

export default CreateProposalSuccessModal;
