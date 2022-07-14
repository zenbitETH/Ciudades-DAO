import '../../styles/Home.css';


const ConnectButton = ({handleOnConnect}) => {

  return (
  <span>
    <div class="hudWallet" onClick={handleOnConnect}>
      <div>¿Todo listo? Conecta tu wallet web3</div>
    </div>
  </span>
  );
};

export default ConnectButton;
