import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import verify from '../assets/verify.png';

const ValidationRequired = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div class="connect">
      {isEnglish === 'english'
      ?
      <a href="/quiz" >
        <div className="main">
        <h1><span id="vote">Valida tu cuenta</span></h1><br/>
            <div class="center"><img src={verify} alt="Alert about verification" class="prop-img"/></div>
        </div>
        <div className ="floating">
        </div>
      </a>
      :
      <a href="/quiz" >
      <div className="main">
      <h1><span id="vote">Validate your address</span></h1><br/>
          <div class="center"><img src={verify} alt="Alert about verification" class="prop-img"/></div>
      </div>
      <div className ="floating">
      </div>
    </a>
      }
    </div>
  );
};

export default ValidationRequired;
