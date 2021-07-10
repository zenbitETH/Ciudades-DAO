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
      <Card.Text>You need a Metamask wallet to use VoTARO</Card.Text>
        <Button onClick={handleOnConnect}>Connect Wallet</Button>
       
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
