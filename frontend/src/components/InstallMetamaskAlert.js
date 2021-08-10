import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import {Alert, Button} from 'react-bootstrap';



const InstallMetamaskAlert = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div class="floating">
      {isEnglish === 'english' ?
      <Alert className="valert">
       <h1>⚠️</h1>
       <div class="white">It appears you don't have a crypto address</div>
       <div class="floating">
         <Button className="Wallet" href="https://www.metamask.io/">Download Wallet</Button>
       </div>
      </Alert>
    :
      <Alert className="valert">
        <h1 >⚠️</h1>
        <span>Parece que no tienes una dirección cripto</span>
        <span class="floating">
          <Button className="Wallet" href="https://metamask.io/"> 🔑 Obtén una dirección cripto</Button>
        </span>
      </Alert>
    }</div>
  );
};

export default InstallMetamaskAlert;
