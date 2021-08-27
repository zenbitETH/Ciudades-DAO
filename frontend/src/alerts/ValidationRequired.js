import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import verify from '../assets/verify.png';

const ValidationRequired = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english'
      ?
      <a href="/quiz">
        <div className="main">
        <h1><span id="vote" class="orange">Validate Account</span></h1><br/>
          <div class="center"><img src={verify} alt="Alert about verification" class="prop-img"/></div>
          <div class="white-jos">
            Only validated Querétaro citizens can create new proposals or vote on the available proposals. <br/><br/>
            <div class="center">Touch to validate your account.</div>
          </div>
        </div>
        <div className ="floating">
        </div>
      </a>
      :
      <a>
        <div className="main">
          <div className="title3">Valida tu cuenta</div>
          <div className="big-icon">⚠️</div>
          <div className="white">
          Solo los usuarios que validen ser ciudadanos de Querétaro podran crear nuevas propuestas, presiona aquí para validarte
          </div>
        </div>
        <div className ="floating">
        </div>
      </a>
      }
    </div>
  );
};

export default ValidationRequired;
