import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';

import meta from '../../assets/meta.svg';


const ConnectButton = ({handleOnConnect}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span>
    {isEnglish === 'english' ?
    <div className="prop-wallet" onClick={handleOnConnect}>
      <a>
      <span>Conect your wallet </span>
       <img src={meta} class="shake2"/>
      </a>
    </div>
    :
    <div className="prop-wallet" onClick={handleOnConnect}>
      <a>
      <span>Conecta tu cartera web 3 </span>
       <img src={meta} class="shake2"/>
      </a>
    </div>
}</span>
  );
};

export default ConnectButton;
