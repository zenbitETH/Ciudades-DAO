import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import logo from '../assets/Logow.png';
import wallet from '../assets/wallet.gif'
import bg2 from '../assets/bg2.svg'
import { LanguageContext } from '../contexts/LanguageContext';
import ReactPlayer from "react-player";

const About = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
  <div>
  {isEnglish === 'english' ?
  <div>
    <div class="App">
      <div class="about-ct">
      <div class="about-hl">¿Qué es? </div>  
          <img src={logo} alt="VoTARO" class="logo"/> 
        <div class="about-tx">
          <span>VoTARO es una aplicación Web 3.0</span> para votar por propuestas que solucionen una necesidad pública o para organizar una actividad en la ciudad de Querétaro.
          <br/><br/>
      </div>  
        <div class="subt"> Sigue estos pasos para usar tus habilidades digitales en VoTARO y  la web 3. Toca para ver a detalle. </div>
          <div class="about-us">
          <a href="#step0" class="us-new"><div class="shake">🏁 <span class="oneem">0. Antes de empezar</span></div><span class="ustext">Conoce más sobre VoTARO y cómo generar valor usando tus habilidades digitales en la web 3</span></a>
          <a href="#step1" class="us-new"><div class="shake">🔑 <span class="oneem">1. Crear una dirección cripto </span></div><span class="ustext">Manos a la obra, descarga Metamask y crea tu dirección cripto conectarte a la web 3</span></a>
          <a href="#step2" class="us-mod"><div class="shake">🔐 <span class="oneem">2. Conecta tu dirección</span></div> <span class="ustext">Ahora conecta tu cartera en la pantalla de inicio para que VoTARO identifique tu dirección cripto</span></a>
          <a href="#step3" class="us-mod"><div class="shake">✔️ <span class="oneem">3. ¿Éres de Querétaro?</span></div><span class="ustext">Valida tu dirección con estas preguntas que solo los Queretan@s sabrán contestar<div class="orange"> ¡Gana hasta 100 TARO!</div></span></a>
          <a href="#step4" class="us-exp"><div class="shake">💡 <span class="oneem">4. Crea propuestas</span></div><span class="ustext"> Has una propuesta para resolver una necesidad en tu colonia o realizar una actividad en la ciudad<div class="orange"> ¡Gana 20 TARO en las primeras 5 propuestas!</div></span></a>
          <a href="#step5" class="us-exp"><div class="shake">🗳️ <span class="oneem">5. ¡Vota por las propuestas!</span></div><span class="ustext">¡Es tiempo de votar! Usa el TARO que has ganado para votar por tus propuestas favoritas.<div class="orange"> 1 TARO = 1 Voto</div></span></a>
        </div>
      </div>
      <div class="about-ct">
      <div class="about-hl"><a id="step0" class="big-icon">🏁</a><br/> 0. Antes de empezar</div>
         
         <div class="ct1-text">
            VoTARO es una aplicación descentralizada desarrollada con herramientas de la web 3 como Blockchain, Contratos Inteligentes y direcciones cripto. <br/><br/> Si te quedaste así 😵 no te preocupes, continua leyendo para conocer cómo <span class="orange">obtener recompensas por aprender a usar estas herramientas</span> y participar en la gobernanza de la ciudad.
            Para hacerlo, ocuparás crear una dirección cripto desde una wallet web3. No necesitas dar tus datos personales, <span class="yellow">solo necesitas guardar muy bien la llave privada de tu cuenta,</span> pues solo tu la conocerás y es la única forma de recuperar tu cuenta o usarla en un dispositivo diferente.
            <br/><br/>
            <span class="orange"> Si tienes prisa, puedes ir directo a 🔑Crear una dirección cripto</span> o continua leyendo para conocer por qué la web 3 las utiliza en lugar de pedirte tus datos personales para crear una cuenta. 
           <div class="center"><img src={bg2} alt="Web2 problems" class="web2p"/></div>
           <br/>
          La Web 3 es la tercera versión del internet y se concentra en empoderar a los usuarios a través de la criptografía y la verificación del valor;
           a diferencia de la <span class="yellow">Web 2 que depende de la centralización de servicios y el acceso a tus datos personales para que puedas usar sus aplicaciones.</span>
           <br/><br/>
           En cambio, la Web 3 utiliza direcciones cripto que puedes crear sin dar tus datos personales. De esta manera puedes usar aplicaciones como VoTARO de manera segura y sin comprometer tus datos. Desliza hacia abajo para conocer cómo ha evolucionado internet y las principales diferencias entre la Web 2 y la Web 3.
           <br/><br/>
        </div>
       <div class="timeline">
     <div class="timetl">
       <div class="timeyr">  Evolución del Internet <div class="orange"> de 1989 a 2020</div></div>
      
     </div>
     <div>
       <div class="container">
         <div class="lines">
           <div class="dot"></div>
           <div class="line"></div>
           <div class="dot"></div>
           <div class="line"></div>
           <div class="dot"></div>
         </div>
         <div class="cards">
           <div class="web1">
             <h4 class="">Web 1.0 🔗<div class="timesub"> 1989 - 1998</div></h4>
             <li class="timetx">Basada en hipervínculos HTML</li>
             <li class="timetx">Redes Fijas y Unilaterales</li>
             <li class="timetx">Alcance limitado</li>
           </div>
           <div class="web2">
             <h4 class="">Web 2.0 🌎<div class="timesub"> 1998 - actualidad</div></h4>
             <li class="timetx">Basada en redes sociales y contenido</li>
             <li class="timetx">Redes centralizadas para crear y consumir</li>
             <li class="timetx">Alcance global</li>
           </div>
           <div class="web3">
             <h4 class="">Web 3.0 ☀️<div class="timesub"> 2010 - actualidad</div></h4>
             <li class="timetx">Basada en contextos y consenso</li>
             <li class="timetx">Redes descentralizadas para verificar y presevar</li>
             <li class="timetx">Alcance interplanetario</li>
           </div>
         </div>
       </div>
       <div class="timetl">
         <div>Toca las caracteristicas para conocer las diferencias entre:</div>
       </div>
       <div class="webvs">
         <div class="yellow">Web 2.0</div>
         <div class="orange">Web 3.0</div>
         <div class="web2vs">
           <div class="vs">🤴 Centralizado <span class="ustext">Depende de un intermediario.</span></div>
           <div class="vs">👁️ Invasivo <span class="ustext">Das tus datos personales para usarlo.</span></div>
           <div class="vs">🔒 Restrictivo <span class="ustext">Solo (algunas) personas lo pueden usar.</span></div>
           <div class="vs">🚫 Censurable <span class="ustext">Cancela posturas e impone condiciones.</span></div>
           <div class="vs">📊 Mercado limitado <span class="ustext">Número de usuarios limitado a mercados.</span></div>
         </div>
         <div class="web3vs">
           <div class="vs">🌐 Descentralizado <span class="ustext">Depende de los usuarios.</span></div>
           <div class="vs">🔑 No invasivos <span class="ustext"> Creas una dirección cripto para usarlo.</span></div>
           <div class="vs">🔓 Sin restricciones <span class="ustext">Cualquier persona y máquinas lo pueden usar.</span></div>
           <div class="vs">⛰️ Incensurable <span class="ustext">Preprogramado para  generar consenso.</span></div>
           <div class="vs">🚀 Sin fronteras <span class="ustext">Número de usuarios definido por contextos.</span></div>
         </div>
       </div>
     </div>
     </div> 
       
       
      </div>
    </div>
    <div class="App">
        <div class="about-ct">
        <div class="about-hl"><a id="step1" class="big-icon">🔑</a><br/> 1. Crear dirección cripto</div>
        <div class="about-tx">
        En VoTARO tendrás que usar tus habilidades digitales para participar y obtener recompensas del token TARO, fichas digitales que equivalen a 1 voto a favor o en contra de tus propuestas preferidas.
          <br/><br/>
          Para participar ocuparás crear una dirección cripto desde una wallet web3. No necesitas dar tus datos personales, solo necesitas <span class="orange">guardar muy bien la llave privada de tu cuenta</span>, pues <span class="red">solo tu la conocerás y 
          es la única forma de recuperar tu cuenta</span> o usarla en un dispositivo diferente.
          <br/><br/>
          <div class="Wallet"><Button ><a href="https://metamask.io">🔑 Descargar wallet web3</a></Button></div>
          <br/>
          <div class="orange">Aquí un tutorial del paso a paso para descargarla desde un navegador web.<br/><br/><ReactPlayer width="100%"  url="https://youtu.be/Abzogd_3VBA"/></div>
        </div>
        </div>
        <div class="about-ct1">
          <div class="about-hlbl"><a id="step2" class="big-icon">🔐</a><br/>2. Conecta tu dirección</div>
          <div class="about-txbl">¡Ya tienes dirección cripto! Ahora usala para conectarte a VoTARO. Regresa <a class="alt" href="/Home">aquí</a> a la pantalla principal y presiona:<br/><br/><div class="center"><Button>🔑Conectar Dirección Cripto</Button></div></div>
          <br/>
          <div class="about-txbl">Tras presionarlo aparecerá una ventana parcecida a la de abajo, toca "siguiente" y "Conectar" para establecer conexión con VoTARO.</div>  
          <img src={wallet} alt="VoTARO" class="walletct"/>
          
        </div>
      
      </div>
      
    </div>
  :
  <div>
  <div class="about-tx">There are basic concepts you should know to
      discover why VoTARO is needed to empower Queretaro citizens and how it can create value to our city.</div>

      <div className="main">
      <div className="aboutCo">1. 🦊 Download Wallet</div>
     

      {/*<div className="aboutCo">2. 🧅 Switch to SKALE network</div>
       <p>
       To use decentralized Ethereum applications, you need to pay the "gas fees" for smart contracts. These are usually expensive
          and restrictive for new users. VoTARO implements SKALE, a second layer solution on Ethereum that reduces gas costs to 0.
          <p>This allows that new users can interact with VoTARO contracts without having to pay gas fees, allowing implementations of this technology
          on a large scale as in a city. Go to Home to configure your wallet with a signle click.</p>
       </p>
      <div className ="submitbutton"><Button className="aboutbutton" href="/" > 🧅 Switcht to SKALE on home</Button></div>}*/}
       <div className="aboutCo">2. ✔️ Get validated</div>
       <p>
          VoTARO focuses on the governance of Querétaro City, so you must validate that you are a citizen of Querétaro
          to be able to create proposals or vote the governance module. To validate your account, it is necessary to answer this quiz. </p>
        <p> When you answer it correctly, the contract will validate your address and you will receive from 20 to 100 TARO, depending on the answers
         correct.
       </p>
       <div className ="submitbutton"><Button className="aboutbutton" href="Quiz" >✔️ Validate address</Button></div>
       <div className="aboutCo">3. 🗳️ Create and Vote on proposals</div>
       <p> The city needs you! generate proposals for activities, public works or needs that you have identified in your community Make proposals,
          vote for them and make them come true to get more TARO. Proposals will be available for 3 days to be voted on. </p>
         <p> You will receive 20 TAROs for each proposal you make, but the reward will only be valid for the first 5 proposals. Then you can create proposals
           but you will not receive TARO for new proposals.
         </p>
       <div className ="submitbutton"><Button className="aboutbutton" href="ProposalList" >🗳️ See proposals</Button></div>
    </div>
      <div className="orange"> Benefits for the city</div>
      <div className="text-medium-left">
      <div className = "aboutC"> ⛓️  Urban governance on blockchain. </div>
         <div className = "aboutC"> 🏙️ Urban processes tracked in Smart Contracts. </div>
         <div className = "aboutC"> 🤖 Automation and Decentralization of services. </div>
         <div className = "aboutC"> 🧙‍♂️ Citizens develop digital skills. </div>
         <div className = "aboutC"> 🤝 Transparent and decentralized urban consensus. </div>
         <div className = "aboutC"> 🧬 Predictive Economy and Urban Development. </div>
      </div>
      <div className ="submitbutton"><Button className="alt2" href="/" > 🏠 Return to Home</Button></div>



    <div className="about">
      <div className="text-large">🤔 ¿Qué es <img src={logo} alt="VoTARO" width="250px" />?</div>
      <div className="main">Una Aplicación Descentralizada que recompenza con $TARO por proponer, votar y resolver necesidades públicas.</div>
        <div className="text-medium-left">
            <div className="purple">✋ Propón</div>
            <div className="purple">🗳️ Vota</div>
            <div className="purple">🥇 Obtén $TARO</div>
        </div>
      <div className="main">
        <p>VoTaro es una DApp de Ethereum para digitalizar la gobernanza de la ciudad de Querétaro, utilizando contratos inteligentes
          y herramientas descentralizadas de la web 3.0, desarrollada en el  <a className="alt" href="https://showcase.ethglobal.co/scaling/cities-protocol">Scaling Ethereum Hackathon 2021.</a></p>
        <p><ReactPlayer width="100%"  url="https://www.youtube.com/embed/6xgTw1FEuIA"/></p>
        <p>Los ciudadan@s de Querétaro que utilicen VoTARO para proponer, votar y resolver necesidades de sus colonias, serán recompensados con
         <a className="alt" href="https://github.com/zenbitMX/VoTARO/blob/main/contracts/Taro.sol"> $TARO, un token ERC20 </a>
         que sirve para votar estas propuestas y como instrumento para fondear los costos necesarios para resolverlas.</p>
        <p>Las propuestas se registran y gestionan de manera automatizada por el contrato inteligente
        <a className="alt" href="https://github.com/zenbitMX/VoTARO/blob/main/contracts/Taro.sol"> Gobernador Alfa </a>
          una versión del contrato  <a className="alt" href="https://compound.finance/docs/governance?ref=github&user=ajb413&repo=compound-governance-examples"> GovernorAlpha de Compound </a>
          adaptado para gestionar la gobernanza de problemas urbanos.</p>
        <p>Implementa <a className="alt" href="https://skale.network/">SKALE Network,</a> una solución de segunda capa en Ethereum que reduce a 0 las cuotas de gas e incrementa la rapidez de las transacciones sin comprometer la seguridad</p>
      </div>
      <div className="orange">🎯 Objetivo</div>
      <div className="main">
        Convertir a la ciudad de Querétaro en una Organización Autónoma Descentralizada que exista de manera automatizada en internet pero que
        dependa fuertemente del talento humano para ejecutar tareas urbanas o virtuales que los contratos inteligentes no puedan completar por si mismo.</div>
      <div className="orange">🧰 ¿Cómo obtengo $TARO?</div>
      <div className="main">Necesitas realizar 3 actividades para obtener TARO.</div>
       <div className="text-medium-left">
          <div className="aboutB">1. 🦊 Descargar Metamask</div>
          {/*<div className="aboutC" >2. 🧅 Cambiar wallet a red Skale </div>*/}
          <div className="aboutB">2. ✔️ Validar cuenta</div>
          <div className="aboutB" >3. 🗳️ Crear y votar propuestas </div>
        </div>
      <div className="main">
      <div className="aboutCo">1. 🦊 Descargar Metamask</div>
       <p>VoTARO utiliza herramientas de la web 3.0 para que las personas puedan interactuar con contratos inteligentes
         y algoritmos de manera segura, dandoles control completo sobre tus tokens TARO.</p>
      <p>Una wallet web 3.0 de ethereum cómo Metamask, te permitirá usar los contratos de VoTARO y obtener TARO al proponer necesidades de tu colonia.
        Si aún no tienes una Wallet de Metamask, puedes descargarla en este botón</p>
        <div className ="submitbutton"><Button className="aboutbutton" href="https://metamask.io" > 🦊 Descargar Cartera</Button></div>
        

      {/*<div className="aboutCo">2. 🧅 Cambiar wallet a red Skale</div>
       <p>
         Para usar aplicaciones descentralizadas de Ethereum, necesitas pagar las "cuotas de gas" de los contratos inteligentes. Estas suelen caras
         y restrictivas para nuevos usuarios. VoTARO implementa SKALE, una solución de segunda capa en Ethereum que reduce los costos de gas a 0. Esto permite
         que nuevos usuarios puedan interactuar con los contratos de VoTARO sin necesidad de pagar cuotas de gas, permitiendo implementaciones de esta tecnología
         a gran escala como en una ciudad. Ve al Inicio para confirgurar tu cartera con solo presionar un boton.
       </p>
       <div className ="submitbutton"><Button className="aboutbutton" href="/" > 🧅 Cambiar a Skale en Inicio</Button></div>*/}
       <div className="aboutCo">2. ✔️ Validar que eres queretan@</div>
       <p>
         VoTARO se enfoca en la gobernanza de la ciudad de Querétaro, por lo que deberas validar que eres ciudadan@ de Querétaro.
         para poder crear propuestas o votar el módulo de gobernanza. Para validar tu cuenta, es necesario contestar este cuestionario</p>
       <p>Al contestarlo coorrectamente el contrato validará tu dirección y recibiras de 20 a 100 TARO, dependiendo de las respuestas
        correctas.
       </p>
       <div className ="submitbutton"><Button className="aboutbutton" href="Quiz" >✔️ Validar cuenta</Button></div>
       <div className="aboutCo">3. 🗳️ Crear y votar propuestas</div>
       <p>¡La ciudad te necesita! genera propuestas de actividades, obras públicas o necesidades que hayas identificado en tu comunidad Realiza propuestas,
         vota por ellas y hazlas realidad para obtener más TARO. Las propuestas estarán disponibles por 3 días para ser votadas.</p>
        <p>Recibirás 20 TARO por cada propuesta que realices, pero la recompensa solo será valida por las primeras 5 propuestas. Después puedes crear propuestas
          pero no recibirás TARO por crearlas.
        </p>
       <div className ="submitbutton"><Button className="aboutbutton" href="ProposalList" >🗳️ Ver propuestas</Button></div>
    </div>
      <div className="orange"> Beneficios para la ciudad</div>
      <div className="text-medium-left">
        <div className="aboutC">⛓️ Registro de gobernanza urbana en blockchain.</div>
        <div className="aboutC" >🏙️ Procesos urbanos en Contratos Inteligentes.</div>
        <div className="aboutC">🤖 Automatización y Descentralización de servicios.</div>
        <div className="aboutC" >🧙‍♂️ Ciudadanos desarrollan habilidades digitales.</div>
        <div className="aboutC" >🤝 Consenso urbano transparente y descentralizado.</div>
        <div className="aboutC">🧬 Economía y Desarrollo Urbano Predictivos.</div>
      </div>
      <div className ="submitbutton"><Button className="alt2" href="/" > 🏠 Regresar al inicio</Button></div>
    </div>
  </div>
      }
    </div>
  );
};

export default About;
