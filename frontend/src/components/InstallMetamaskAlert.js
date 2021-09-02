import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import {Alert, Button} from 'react-bootstrap';
import meta from '../assets/meta.svg';



const InstallMetamaskAlert = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span >
      {isEnglish === 'english' ?
      <div class="no-wallet" >
         <a href="https://www.metamask.io/">
          <img src={meta} class="shake"/>
          <br/>
          <span class="center"><div class="cw">Touch to download a wallet</div></span>
          <div class="jos"><span class="white">You don't have a crypto address</span></div>
        </a>
      </div>
    :
    <div class="no-wallet" >
       <a href="https://www.metamask.io/">
        <img src={meta} class="shake"/>
        <br/>
        <span class="center"><div class="cw">Toca para descargar una cartera web3</div></span>
        <div class="jos"><span class="white">No tienes una dirección cripto</span></div>
      </a>
    </div>
    }</span>
  );
};

export default InstallMetamaskAlert;
