import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import meta from '../assets/meta.svg';



const InstallMetamaskAlert = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span >
      {isEnglish === 'english' ?
      <div class="no-wallet" >
         <a href="https://www.metamask.io/">
          <div class="dw">Touch to download a wallet
            <div class="jos"><span class="white">You don't have a crypto address</span></div>
            <img src={meta} class="shake"/>
          </div>
          
        </a>
      </div>
    :
    <div class="no-wallet" >
       <a href="https://www.metamask.io/">
        <div class="dw">Toca y descarga una cartera web3
          <div class="jos"><span class="white">No tienes una dirección cripto</span></div>
          <img src={meta} class="shake"/>
        </div>
        
      </a>
    </div>
    }</span>
  );
};

export default InstallMetamaskAlert;
