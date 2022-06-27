import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const InstallMetamaskAlert = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span >
      {isEnglish === 'english' ?
      <div class="no-wallet" >
        <a href="https://www.metamask.io/">
          <div class="">No tienes una wallet web3</div>
          <div class="">Toca para descargar</div>
        </a>
      </div>
      :
      <div class="no-wallet" >
         <a href="https://www.metamask.io/">
          <div class="">You don't have a web3 wallet</div>
          <div class="">Touch to download</div>
        </a>
      </div>
    }</span>
  );
};

export default InstallMetamaskAlert;
