import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';

import meta from '../../assets/meta.svg';


const ConnectButton = ({handleOnConnect}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
  <span>
    {isEnglish === 'english' ?
    <div class="prop-wallet" onClick={handleOnConnect}>
      <div class="dw">Connect your web3 key </div>
    </div>
    :
    <div class="prop-wallet" onClick={handleOnConnect}>
      <div class="dw">Conecta tu llave web3 </div>
       <img src={meta} class="shake2"/>
    </div>
}</span>
  );
};

export default ConnectButton;
