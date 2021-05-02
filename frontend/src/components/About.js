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
        <div className="text-large">
          1 ✋ Propon 
        </div>
        <div className="text-large">
          2 🗳️ Vota
        </div>
        <div className="text-large">
          3 🥇 Obtén TARO
        </div>
        <div className="orange">
          Objetivo
        </div>
        <div className="main">
          Convertir a la ciudad de Querétaro en una Organización Autónoma Descentralizada que existen de manera automatizada en internet pero que dependen fuertemente del 
          talento humano para desarrollar tareas que el protocolo no puede por si mismo.
        </div>
      </div>
      <div className="gray3">    
       
      </div>
      <div className="gray3">    
        <div className="orange">
          Beneficios para la ciudad
        </div>
        <div className="text-medium-left" >
        <div >
           ⛓️ Registro transparente e inmutable en blockchain.
        </div>
          <div >
          🏙️ Procesos urbanos en Contratos Inteligentes. 
        </div>
        <div>
          🤖 Automatización y Descentralización de servicios.
        </div>
        <div >
           🧙‍♂️ Ciudadanos desarrollan habilidades digitales.
        </div>
          <div >
          🤝 Procesos urbanos en Contratos Inteligentes.
        </div>
        <div>
         🧬 Economía y Desarrollo Urbano Predictivos.
        </div>
        </div>
        <div className="orange">
          ¿Vives en Querétaro? Compruebalo y obtén TARO 
        </div>
        <div>
          Contesta este cuestionario para verififcar que eres queretano y recibe hasta 100 TARO para votar por las propuestas.
        </div>
        <Button className="Quiz" href="/quiz" >Take the Queretaro quiz</Button>
      </div> 
    </div>
  );
};

export default About;



