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
      <Alert className="valert">
        <h1 >⚠️</h1>
        <span>Parece que no tienes una dirección cripto</span>
        <span class="floating">
          <Button className="Wallet" href="https://metamask.io/"> 🔑 Obtén una dirección cripto</Button>
        </span>
      </Alert>
    }</span>
  );
};

export default InstallMetamaskAlert;
