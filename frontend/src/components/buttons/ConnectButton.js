import {Card, Button } from 'react-bootstrap';

const ConnectButton = ({handleOnConnect}) => {
  return (
    <div>
      <Card.Text className="purple2">Necesitas una wallet de Metamask para usar VoTARO</Card.Text>
      <Button onClick={handleOnConnect}>Conectar Wallet</Button>
    </div>
  );
};

export default ConnectButton;
