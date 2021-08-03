import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import {Alert, Button} from 'react-bootstrap';



const InstallMetamaskAlert = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?

    <Alert className= "valert">
        <h1 class="">⚠️</h1>
        <div class="title3">It appears you don't have a crypto address</div>

        <div className ="floating">
          <Button class="alt2" href="https://www.metamask.io/">Download Wallet</Button>
        </div>

   </Alert>
    :
    <Alert className= "valert">
        <div >
          <h1 class="">⚠️</h1>
          <div class="title3">Parece que no tienes una dirección cripto</div>

          <div class ="floating">
            <Button className="alt2" href="https://metamask.io/"> 🔑 Obtén una dirección cripto</Button>
          </div>
        </div>

    </Alert>
    }</div>
  );
};

export default InstallMetamaskAlert;
