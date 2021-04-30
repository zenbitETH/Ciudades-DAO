import { Button } from 'react-bootstrap';

const ConnectButton = ({handleOnConnect}) => {
  return (
    <Button onClick={handleOnConnect}>Connect Wallet to Unlock</Button>
  );
};

export default ConnectButton;
