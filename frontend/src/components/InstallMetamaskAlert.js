import {Alert} from 'react-bootstrap';
import {Link} from "react-router-dom";

const InstallMetamaskAlert = () => {
  return (
    <Alert variant="primary">
      <Alert.Heading>Parece que no tienes una wallet de Metamask</Alert.Heading>
      <p>
      <Link to="/about">Conoce más</Link>
      </p>
    </Alert>
  );
};

export default InstallMetamaskAlert;
