import {Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectButton = ({handleOnConnect}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <span>
    {isEnglish === 'english' ?
    <Button className="Wallet" onClick={handleOnConnect}>🔑 Connect wallet</Button>
    :
    <Button className="Wallet" onClick={handleOnConnect}>🔑 Conectar dirección</Button>
}</span>
  );
};

export default ConnectButton;
