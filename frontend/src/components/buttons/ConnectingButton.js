import { Button, Spinner,Card } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectingButton = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span>
    {isEnglish === 'english' ?
    <div class="prop-wallet">
      <div class="spinner-grow" role="status"></div>
      <span class="center"><div class="cw">Connecting...</div></span>
    </div>
    :
    <div class="prop-wallet">
      <div class="spinner-grow" role="status"></div>
      <span class="center"><div class="cw">Connecting...</div></span>
    </div>
    }
    </span>
  );
};

export default ConnectingButton;
