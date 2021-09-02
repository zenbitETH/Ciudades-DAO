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
      <div>Conect your wallet </div>
       <img src={meta} class="shake2"/>
      </a>
    </div>
    :
    <div className="prop-wallet" onClick={handleOnConnect}>
      <a>
      <div>Conecta tu cartera web 3 </div>
       <img src={meta} class="shake2"/>
      </a>
    </div>
}</span>
  );
};

export default ConnectButton;
