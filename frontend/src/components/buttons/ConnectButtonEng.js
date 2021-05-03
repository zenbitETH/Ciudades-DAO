import { Button } from 'react-bootstrap';

const ConnectButton = ({handleOnConnect}) => {
  return (
    <Button onClick={handleOnConnect}>Connect Wallet</Button>
  );
};

export default ConnectButton;
