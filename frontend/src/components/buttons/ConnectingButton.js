import { Button, Spinner,Card } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectingButton = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span>
    {isEnglish === 'english' ?
    <div class="hudWallet">
      <span class="spinner-grow" role="status"></span>
      <span class="cw">Connecting...</span>
    </div>
    :
    <div class="">
      <div class="" role=""></div>
      <div class=""><span class="cw">Conectando...</span></div>
    </div>
    }
    </span>
  );
};

export default ConnectingButton;
