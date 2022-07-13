import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectingButton = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span>
    <div class="hudWallet">
      <span class="spinner-grow" role="status"></span> 
      <span class="cw">Conectando...</span>
    </div>
    </span>
  );
};

export default ConnectingButton;
