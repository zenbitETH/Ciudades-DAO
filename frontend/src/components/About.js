import {Button} from 'react-bootstrap';
import logo from '../assets/Logo.svg';

const About = () => {
  return (
    <div className="App">
      <div className="gray3">
        <div className="text-large">
          ¿Qué es <img src={logo} alt="VoTARO" width="250px" />?
        </div>
        <div>
          Protocolo para digitalizar la gobernanza urbana mediante interacciones gamificadas en blockchain.
        </div>
        <div className="text-large-left">
          ✋ 1 Propon 
        </div>
        <div className="text-large-left">
          🗳️ 2 Vota
        </div>
        <div className="text-large-left">
          🥇 3 Obtén TARO
        </div>
        <div className="orange">
          Objetivo
        </div>
        <div>
          Convertir Queretaro en una Organización Autónoma Descentralizada que existen de manera automatizada en internet pero que dependen fuertemente del 
          talento humano para desarrollar tareas que el protocolo no puede por si mismo.
        </div>
        <div >
          ⛓️ Registro en blockchain de Ethereum.
          <div >
          🏙️ Procesos urbanos en Contratos Inteligentes 
        </div>
        <div>
          🤖 Automatización y Descentralización de servicios urbanos
        </div>
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



