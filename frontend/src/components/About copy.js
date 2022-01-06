import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import logo from '../assets/Logow.png';
import bg1 from '../assets/bg1.png'
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
        <div class="about-txbl">
          <div class="about-hlbl">About </div>  
          <img src={logo} alt="VoTARO" class="logo"/> 
          <div className="about-tx">Is a voting DApp that rewards users with $TARO when they propose or vote on cities' public needs. It was developed on the Scaling Ethereum Hackathon 2021.</div>
        </div>  
        <img src={bg1} alt="VoTARO" class="bg1"/> 
      </div>
      <div class="about-ct">
        <div class="about-hlbl">Let's start!</div>  
        <div class="about-txbl">Depending on your experience using blockchain or ethereum tools, choose if you want to know the basics and what you need to use VoTARO
        or jump directly to the advanced path to know the dapp details.</div>
        <div class="about-us">
          <a href="#new" class="us-new"><div class="shake">🥚</div>New user <span class="ustext">I don't have a Metamask wallet</span></a>
          <a href="#mod" class="us-mod"><div class="shake">🐣</div>Casual user<span class="ustext">I'm ready for VoTARO</span></a>
          <a href="#exp" class="us-exp"><div class="shake">🐓</div>Advanced user<span class="ustext">Show me the contract!</span></a>
        </div>   
      </div>
    </div>
    <div class="App">
        <div class="about-ct1">
          <div class="about-hl"><a id="new" class="big-icon">🥚</a><br/>New user</div>
          <div class="ct1-text">
            Bienvenid@ a VoTARO, seguro tienes muchas dudas sobre el impacto que tiene blockchain en nuestras vidas y te resulta dificil identificar
            la utilidad de <span class="yellow">digitalizar la gobernanza de una ciudad en un registro público, transparente, seguro e inmutable.</span>
            <br/><br/>
              Para resolver todas esas dudas, empezaremos por entender por qué la <span class="yellow">Web 3.0 es un esfuerzo global para resolver
              las problemáticas actuales del internet.</span> 
            <div class="center"><img src={bg2} alt="Web2 problems" class="web2p"/></div>
              <br/>
            Como su nombre lo indica, la Web 3.0 es la tercera versión del internet y se concentra en empoderar a los usuarios a través de la criptografía y la verificación del valor;
            a diferencia de la <span class="yellow">Web 2.0 que depende de la centralización de servicios</span> donde los beneficios de estas empresas sobre la recopilación de datos de usuarios ha justificado la continuidad de sus fallas. La centralización de nuestros datos y el delegarle la responsabilidad de su uso a un intermediario genera estos problemas:
          <div class="new-list">
            <li>Punto singular de falla.</li>
            <li>Costos por intermediarios "de confianza".</li>
            <li>Vulnerabilidades de seguridad cibernética.</li>
            <li>Robo de datos personales.</li>
            <li>Robo de fondos bancarios.</li>
          </div>
         </div>

         <div class="timeline">
        <div class="timeyr">  Evolución del Internet 
          <div class="yellow"> de 1989 a 2020</div>
        </div>
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
        </div>
        <div class="timeline">
      <div class="timetl">
        <h3>Evolución del Internet</h3>
        <label> de 1989 a 2020</label>
      </div>
      <div>
        <div class="container">
          <div class="lines">
            <div class="dot"></div>
            <div class="line"></div>
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
            <div class="web4">
              <h4>? 🌌<div class="timesub">20XX - ? </div></h4>
              <li class="timetx">Basada en tiempo y espacio</li>
              <li class="timetx">Redes cuánticas</li>
              <li class="timetx">Infraestructura con alcance desconocido</li>
            </div>
          </div>
        </div>
        <div class="timetl">
          <div>Toca las caracteristicas para conocer las diferencias entre:</div>
        </div>
        <div class="webvs">
          <div class="yellow">Web 2.0</div>
          <div class="yellow">Web 3.0</div>
          <div class="web2vs">
            <div class="vs">🤴 Centralizado</div>
            <div class="vs">👁️ Invasivo</div>
            <div class="vs">🔒 Restrictivo</div>
            <div class="vs">🚫 Censurable</div>
            <div class="vs">📊 Mercado limitado</div>
            <div class="vs">👎 Navegas con tus datos</div>
          </div>
          <div class="web3vs">
            <div class="vs">🌐 Descentralizado</div>
            <div class="vs">🙅‍♀️ No invasivos</div>
            <div class="vs">🔓 Sin restricciones</div>
            <div class="vs">⛰️ Incensurable</div>
            <div class="vs">🚀 Sin fronteras</div>
            <div class="vs">👍 Navegas con una wallet</div>
          </div>
        </div>
      </div>
      </div>
        <div class="aboutwr">
          <div class="big-icon">⚠️</div>
          <h3>Atención</h3>
          <div class="ct1-text"><span>VoTARO es una aplicación de la Web 3.0</span>, por lo tanto <span class="yellow">necesitas una wallet descentralizada</span> para interactuar. 
          <br/><br/>
          Para obtenerla no necesitas dar tus datos personales, solo necesitas <span class="yellow">guardar muy bien la llave privada de tu cuenta</span>, pues <span class="red">solo tu la conocerás y 
          es la única forma de recuperar tu cuenta</span> o usarla en un dispositivo diferente.
          </div>
          <Button class="" > <a href="https://metamask.io">🦊 Descargar Wallet</a></Button>          
        </div>    

        </div>
        <div class="about-ct2">
          <div class="about-hlbl"><a id="mod" class="big-icon">🐣</a><br/>Casual User</div>
          <div className="text-medium-left">
            <div className="purple">✋ Propón</div>
            <div className="purple">🗳️ Vota</div>
            <div className="purple">🥇 Obtén $TARO</div>
          </div>    
        </div>
        <div class="about-ct3">
          <div class="about-hlbl"><a id="exp" class="big-icon">🐓</a><br/>Advanced User</div>
          <div className="text-medium-left">
            <div className="purple">Ropsten contract</div>
            <div className="purple">Tokenomics</div>
            <div className="purple">Github </div>
          </div>    
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
      <div className="yellow"> Benefits for the city</div>
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
      <div className="yellow">🎯 Objetivo</div>
      <div className="main">
        Convertir a la ciudad de Querétaro en una Organización Autónoma Descentralizada que exista de manera automatizada en internet pero que
        dependa fuertemente del talento humano para ejecutar tareas urbanas o virtuales que los contratos inteligentes no puedan completar por si mismo.</div>
      <div className="yellow">🧰 ¿Cómo obtengo $TARO?</div>
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
      <div className="yellow"> Beneficios para la ciudad</div>
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
