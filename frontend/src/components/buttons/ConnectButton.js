import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectButton = ({handleOnConnect}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
  <span>
    {isEnglish === 'english' ?
    <div class="hudWallet" onClick={handleOnConnect}>
      <div>¿Todo listo? Conecta tu wallet web3</div>
    </div>    
    :
    <div class="hudWallet" onClick={handleOnConnect}>
      <div>Connect your web3 wallet</div>
    </div>
}</span>
  );
};

export default ConnectButton;
