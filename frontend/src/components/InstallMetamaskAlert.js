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
          <div class="">You don't have a crypto address</div>
          <div class="">Touch to download a wallet</div>
        </a>
      </div>
    :
    <div class="no-wallet" >
      
    </div>
    }</span>
  );
};

export default InstallMetamaskAlert;
