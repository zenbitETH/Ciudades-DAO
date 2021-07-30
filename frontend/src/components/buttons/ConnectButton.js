import {Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectButton = ({handleOnConnect}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?
      
    <div>
      <div>
      <Card.Text>Necesitas una 🔑 Dirección Cripto para usar VoTARO</Card.Text>
        <Button onClick={handleOnConnect}>🔐 Conectar Dirección Cripto</Button>
       
      </div>
      
    </div>
    :
    <div>
      <div>
        <Button onClick={handleOnConnect}>Conectar Wallet</Button>
        <Card.Text>Necesitas una wallet de Metamask para usar VoTARO</Card.Text>
      </div>
      
    </div>
}</div>
  );
};

export default ConnectButton;
