import {Alert} from 'react-bootstrap';
import {Link} from "react-router-dom";
import { LanguageContext } from '../contexts/LanguageContext';


const InstallMetamaskAlert = () => {
  let {isEnglish} = useContext(LanguageContext);
  return (
    <div>
      {isEnglish ?
    <Alert variant="primary">
      <Alert.Heading>Parece que no tienes una wallet de Metamask</Alert.Heading>
      <p>
      <Link to="/about">Conoce más</Link>
      </p>
    </Alert>
    :
    <Alert variant="primary">
      <Alert.Heading>It appears you don't have MetaMask installed</Alert.Heading>
      <p>
      <Link to="/about">More info</Link>
      </p>
    </Alert>
    }</div>

  );
};

export default InstallMetamaskAlert;
