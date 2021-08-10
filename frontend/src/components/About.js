import { useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import logo from '../assets/Logow.png';
import wallet from '../assets/wallet.gif'
import www from '../assets/www.svg'
import corner from '../assets/corner.svg'
import { LanguageContext } from '../contexts/LanguageContext';
import ReactPlayer from "react-player";

const About = () => {
  let [isEnglish] = useContext(LanguageContext);
  return (
  <body id="about">
  {isEnglish === 'english' ?
  <div class="about">
    <div class="about-ct">
      <h1 class="about-hl">Bienvenido a</h1>  
      <img src={logo} alt="VoTARO" class="logo"/> 
      <div class="about-tx">
        VoTARO es una aplicación Web 3 que recompensa al crear y votar por propuestas de colaboración urbana en la ciudad de Querétaro.
      </div>
    </div>

    <section>
      <div class="about-reward">
        <h1 class="about-hlbl">¡Gana 100 TARO!</h1>
        <p class="about-tx1">Obtén tu primer recompensa siguiendo estos 3 pasos: (toca los íconos para ver más)</p>
        <div class="reward-grid">
          <div class="reward"><div class="big-icon">🔑</div>1. Descarga <span class="ustext">Descarga una wallet y crea una dirección cripto</span></div>
          <div class="reward"> <div class="big-icon">🔐</div>2. Conecta <span class="ustext">Conecta tu dirección cripto para usar VoTARO</span></div>
          <div class="reward"><div class="big-icon">✔️</div>3. Verifica <span class="ustext">Verifica tus habilidades digitales y gana hasta 100 TARO </span></div>
          <Button className="about-bt" href="https://metamask.io"> Ir </Button>
          <Button className="about-bt" href="/Home"> Ir </Button>
          <Button className="about-bt" href="/Quiz"> Ir </Button>
        </div>
      </div>
    </section>
    <section class="about-topics">
      <div class="about-hl1">Conoce más sobre VoTARO</div>
      <div class="about-grid">
        <div class="about-bg"><a href="#step0">
          <img src={corner} class="ribbon"/> 
          <div class="big-icon">🔑</div>
          <h2>A. Tu dirección cripto</h2>
          <div class="about-tx2">Necesitas una dirección cripto para guardar las recompensas que obtengas en VoTARO, toca y descubre cómo obtenerla y usarla.</div>
        </a></div>
        <div class="about-bg"><a href="#step1">
        <img src={corner} class="ribbon"/> 
        <div class="big-icon" >☀️</div>
          <h2>B. Las recompensas TARO</h2>
          <div class="about-tx2">Conoce más sobre TARO, las recompensas que recibirás al interactuar en VoTARO y que podrás usar para votar propuestas.</div>
        </a></div>
        <div class="about-bg"><a href="#step2">
          <img src={corner} class="ribbon"/> 
          <div class="big-icon" >🗳️</div>
          <h2>C. Propón y vota en Querétaro</h2>
          <div class="about-tx2">Obtén TARO al proponer nececidades, actividades o eventos en tu colonia y vota para hacerlas realidad.</div>
        </a></div>
        <div class="about-bg"><a href="#step3">
          <img src={corner} class="ribbon"/> 
          <div class="big-icon" >🌌</div>
          <h2>D. Un nuevo Internet</h2>
          <div class="about-tx2">Descubre las herramientas de la web 3 utilizadas en VoTARO. Desarrolla tus habilidades digitales para navegar de manera segura, privada y sin restricciones. </div>
        </a></div>
      </div>
    </section>      

    <section class="about-grid2">
      <div class="about-hl1"><span class="orange">Lo que debes saber antes de empezar:</span></div>
      <div class="about-bg1">
        <div class="about-hl1"><a id="step0" class="big-icon">🔑</a><br/> A. Tu dirección cripto</div>
          <div class="about-tx2">
          Para usar VoTARO ocupas descargar una wallet de ethereum en tu computadora o móvil y crear una dirección cripto. Con esta dirección cripto podrás acceder aplicaciones web 3 cómo VoTARO de manera segura, privada y sin restricciones.
          <br/><br/>
          Para crear una dirección cripto no necesitas dar tus datos personales, solo necesitas <span class="orange">guardar muy bien la llave privada de tu cuenta</span>, pues <span class="yellow">solo tu la conocerás y 
          es la única forma de recuperar tu dirección cripto</span> o usarla en un dispositivo diferente. Sigue estos pasos para obtener tu dirección cripto.
          <br/><br/>
          <h2 class="orange-lex">🦊 1. Descarga una cartera web 3</h2>
          Primero descarga una cartera web 3 y crea una dirección cripto, sigue el paso a paso para descargar una dirección cripto en este tutorial. Cuando estés list@ toca el botón para descargar tu carterta Web 3.
          <br/><br/><ReactPlayer width="100%"  url="https://youtu.be/Abzogd_3VBA"/>
          <br/>
          <div class="center"><Button className="Wallet" href="https://metamask.io">🔑 Descargar cartera web 3</Button></div>
          <br/>
          <h2 class="orange-lex">🔐 2. Conecta tu dirección cripto</h2>
          ¡Ya tienes dirección cripto! Ahora usala para conectarte a VoTARO. Toca el botón y conecta tu dirección cripto:
          <br/><br/>
          <div class="center"><Button className="Wallet" href="/home">🔐Conectar Dirección Cripto</Button></div>
          <br/>
          Tras presionarlo aparecerá una ventana parcecida a la de abajo, toca "siguiente" y "Conectar" para establecer conexión con VoTARO.
          <br/><div class="center"><img src={wallet} alt="VoTARO" class="walletct"/></div>
        </div>
      </div>
      
      <div class="about-bg1">
        <div class="about-hl1"><a id="step1" class="big-icon">☀️</a><br/>B. Las recompensas TARO</div>
        <div class="about-tx2"><br/><br/></div>
        <br/>
        <div class="about-txbl"></div>  
      </div>

      <div class="about-bg1">
        <div class="about-hl1"><a id="step2" class="big-icon">🗳️</a><br/>C. Propón y vota en Querétaro</div>
        <div class="about-tx2">¡Ya tienes dirección cripto! Ahora úsala para conectarte a VoTARO. Regresa <a class="alt" href="/Home">aquí</a> a la pantalla principal y presiona:<br/><br/><div class="center"><Button>🔑Conectar Dirección Cripto</Button></div></div>
        <br/>
        <div class="about-txbl">Tras presionarlo aparecerá una ventana parcecida a la de abajo, toca "siguiente" y "Conectar" para establecer conexión con VoTARO.</div>  
        <img src={wallet} alt="VoTARO" class="walletct"/>
      </div>

      <div class="about-bg1">
        <div class="about-hl1"><a id="step3" class="big-icon">🌌</a><br/>D. Un nuevo Internet</div>
        <div class="about-tx2">VoTARO es una aplicación descentralizada desarrollada con herramientas de la web 3 como Blockchain, Contratos Inteligentes y direcciones cripto. <br/><br/> Si te quedaste así 😵 no te preocupes, continua leyendo para conocer cómo <span class="orange">obtener recompensas por aprender a usar estas herramientas</span> y participar en la gobernanza de la ciudad.
          <div class="center"><img src={www} alt="Web2 problems" class="web2p"/></div>
          <br/>
           La Web 3 es la tercera versión del internet y se concentra en empoderar a los usuarios a través de la criptografía y la verificación del valor;
           a diferencia de la <span class="yellow">Web 2 que depende de la centralización de servicios y el acceso a tus datos personales para que puedas usar sus aplicaciones.</span>
          <br/><br/>
           En cambio, la Web 3 utiliza direcciones cripto que puedes crear sin dar tus datos personales. De esta manera puedes usar aplicaciones como VoTARO de manera segura y sin comprometer tus datos. Desliza hacia abajo para conocer cómo ha evolucionado internet y las principales diferencias entre la Web 2 y la Web 3.
          <br/><br/>
        </div>
        <div class="timeline">
        <div class="timeyr">  Evolución del Internet 
          <div class="orange"> de 1989 a 2020</div>
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
        Toca las características para conocer las diferencias entre:
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
    </section>
  </div>
  :
  <div class="about">
    <div class="about-ct">
      <h1 class="about-hl">Bienvenido a</h1>  
      <img src={logo} alt="VoTARO" class="logo"/> 
      <span class="about-tx">
        VoTARO es una aplicación Web 3 que recompensa al crear y votar por propuestas de colaboración urbana en la ciudad de Querétaro.
      </span>
    </div>

    <section>
      <div class="about-reward">
        <h1 class="about-hlbl">¡Gana 100 TARO!</h1>
        <p class="about-tx1">Obtén tu primer recompensa siguiendo estos 3 pasos: (toca los íconos para ver más)</p>
        <div class="reward-grid">
          <div class="reward"><div class="big-icon">🔑</div>1. Descarga <span class="ustext">Descarga una wallet y crea una dirección cripto</span></div>
          <div class="reward"> <div class="big-icon">🔐</div>2. Conecta <span class="ustext">Conecta tu dirección cripto para usar VoTARO</span></div>
          <div class="reward"><div class="big-icon">✔️</div>3. Verifica <span class="ustext">Verifica tus habilidades digitales y gana hasta 100 TARO </span></div>
          <Button className="about-bt" href="https://metamask.io"> Ir </Button>
          <Button className="about-bt" href="/Home"> Ir </Button>
          <Button className="about-bt" href="/Quiz"> Ir </Button>
        </div>
      </div>
    </section>
    
    <section class="about-grid">
      <h2>Conoce más sobre VoTARO</h2>
      <div class="about-bg"><a href="#step0">
        <img src={corner} class="ribbon"/> 
        <div class="big-icon">🔑</div>
        <h2>A. Tu dirección cripto</h2>
        <div class="about-tx2">Necesitas una dirección cripto para guardar las recompensas que obtengas en VoTARO, toca y descubre cómo obtenerla y usarla.</div>
      </a></div>
      <div class="about-bg"><a href="#step1">
      <img src={corner} class="ribbon"/> 
      <div class="big-icon" >☀️</div>
        <h2>B. Las recompensas TARO</h2>
        <div class="about-tx2">Conoce más sobre TARO, las recompensas que recibirás al interactuar en VoTARO y que podrás usar para votar propuestas.</div>
      </a></div>
      <div class="about-bg"><a href="#step2">
        <img src={corner} class="ribbon"/> 
        <div class="big-icon" >🗳️</div>
        <h2>C. Propón y vota en Querétaro</h2>
        <div class="about-tx2">Obtén TARO al proponer nececidades, actividades o eventos en tu colonia y vota para hacerlas realidad.</div>
      </a></div>
      <div class="about-bg"><a href="#step3">
        <img src={corner} class="ribbon"/> 
        <div class="big-icon" >🌌</div>
        <h2>D. Un nuevo Internet</h2>
        <div class="about-tx2">Descubre las herramientas de la web 3 utilizadas en VoTARO. Desarrolla tus habilidades digitales para navegar de manera segura, privada y sin restricciones. </div>
      </a></div>
    </section>

    <section class="about-grid2">   
      <div class="about-bg1">
        <div class="about-hl1"><a id="step0" class="big-icon">🔑</a><br/> A. Tu dirección cripto</div>
          <div class="about-tx2">
          Para usar VoTARO ocupas descargar una wallet de ethereum en tu computadora o móvil y crear una dirección cripto. Con esta dirección cripto podrás acceder aplicaciones web 3 como VoTARO de manera segura, privada y sin restricciones.
          <br/><br/>
          Para crear una dirección cripto no necesitas dar tus datos personales, solo necesitas <span class="orange">guardar muy bien la llave privada de tu cuenta</span>, pues <span class="yellow">solo tu la conocerás y 
          es la única forma de recuperar tu dirección cripto</span> o usarla en un dispositivo diferente. Sigue estos pasos para obtener tu dirección cripto.
          <br/><br/>
          <h2 class="orange-lex">1. Descarga una cartera web 3</h2>
          Primero descarga una cartera web 3 y crea una dirección cripto, sigue el paso a paso para descargar una dirección cripto en este tutorial. Cuando estés list@ toca el botón para descargar tu carterta Web 3.
          <br/><br/><ReactPlayer width="100%"  url="https://youtu.be/Abzogd_3VBA"/>
          <br/>
          <div class="center"><Button className="Wallet" href="https://metamask.io">🔑 Descargar cartera web 3</Button></div>
          <br/>
          <h2 class="orange-lex">2. Conecta tu dirección cripto</h2>
          ¡Ya tienes dirección cripto! Ahora úsala para conectarte a VoTARO. Toca el botón y conecta tu dirección cripto:
          <br/><br/>
          <div class="center"><Button className="Wallet" href="/home">🔐Conectar Dirección Cripto</Button></div>
          <br/>
          Tras presionarlo aparecerá una ventana parcecida a la de abajo, toca "siguiente" y "Conectar" para establecer conexión con VoTARO.
          <br/><div class="center"><img src={wallet} alt="VoTARO" class="walletct"/></div>
        </div>
      </div>
      
      <div class="about-bg1">
        <div class="about-hl1"><a id="step1" class="big-icon">☀️</a><br/>B. Las recompensas TARO</div>
        <div class="about-tx2"><br/><br/></div>
        <br/>
        <div class="about-txbl"></div>  
      </div>

      <div class="about-bg1">
        <div class="about-hl1"><a id="step2" class="big-icon">🗳️</a><br/>C. Propón y vota en Querétaro</div>
        <div class="about-tx2">¡Ya tienes dirección cripto! Ahora usala para conectarte a VoTARO. Regresa <a class="alt" href="/Home">aquí</a> a la pantalla principal y presiona:<br/><br/><div class="center"><Button>🔑Conectar Dirección Cripto</Button></div></div>
        <br/>
        <div class="about-txbl">Tras presionarlo aparecerá una ventana parcecida a la de abajo, toca "siguiente" y "Conectar" para establecer conexión con VoTARO.</div>  
        <img src={wallet} alt="VoTARO" class="walletct"/>
      </div>

      <div class="about-bg1">
        <div class="about-hl1"><a id="step3" class="big-icon">🌌</a><br/>D. Un nuevo Internet</div>
        <div class="about-tx2">VoTARO es una aplicación descentralizada desarrollada con herramientas de la web 3 como Blockchain, Contratos Inteligentes y direcciones cripto. <br/><br/> Si te quedaste así 😵 no te preocupes, continua leyendo para conocer como <span class="orange">obtener recompensas por aprender a usar estas herramientas</span> y participar en la gobernanza de la ciudad.
          <div class="center"><img src={www} alt="Web2 problems" class="web2p"/></div>
          <br/>
           La Web 3 es la tercera versión del internet y se concentra en empoderar a los usuarios a través de la criptografía y la verificación del valor;
           a diferencia de la <span class="yellow">Web 2 que depende de la centralización de servicios y el acceso a tus datos personales para que puedas usar sus aplicaciones.</span>
          <br/><br/>
           En cambio, la Web 3 utiliza direcciones cripto que puedes crear sin dar tus datos personales. De esta manera puedes usar aplicaciones como VoTARO de manera segura y sin comprometer tus datos. Desliza hacia abajo para conocer cómo ha evolucionado internet y las principales diferencias entre la Web 2 y la Web 3.
          <br/><br/>
        </div>
        <div class="timeline">
        <div class="timeyr">  Evolución del Internet 
          <div class="orange"> de 1989 a 2020</div>
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
        Toca las características para conocer las diferencias entre:
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
    </section>
  </div>
      }
    </body>
  );
};

export default About;