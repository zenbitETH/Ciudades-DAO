import {Button} from 'react-bootstrap';
import logo from '../assets/Logo.svg';

const About = () => {
  return (
    <div className="App">
      <div className="gray3">
        <div>
          <img className="text-large" src={logo} alt="VoTARO" width="250px" />
        </div>
        <div>
          Protocolo para digitalizar la gobernanza urbana mediante interacciones gamificadas en blockchain.
        </div>
        <div className="text-large">
          ✋ 1 Propon 
        </div>
        <div className="text-large">
          🗳️ 2 Vota
        </div>
        <div className="text-large">
          🥇 3 Obtén recompensas
        </div>
        <div>
          The last step for the user to begin earning TARO is to validate their account.  This is done by taking a quiz about Queretaro.  This helps to keep the TARO tokens among people who care about their city.
        </div>
      </div>
      <Button className="Quiz" href="/quiz" >Take the Queretaro quiz</Button>
    </div>
  );
};

export default About;



