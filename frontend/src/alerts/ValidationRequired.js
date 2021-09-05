import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import verify from '../assets/verify.png';

const ValidationRequired = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div class="valert2">
      {isEnglish === 'english'
      ?
      <a href="/quiz" >
        <div className="main">
          <br/><br/>
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
      <a href="/quiz" >
        <div className="main">
          <br/><br/>
        <h1><span id="vote" class="orange">Valida tu cuenta</span></h1><br/>
          <div class="center"><img src={verify} alt="Alert about verification" class="prop-img"/></div>
          <div class="white-jos">
            Solo las direcciones cripto que hayan sido validadas por VoTARO podrán crear y votar por las propuestas
            disponibles.
            <br/><br/>
            <div class="center">Toca para validar tu cuenta.</div>
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
