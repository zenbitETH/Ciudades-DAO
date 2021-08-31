import { useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import logo from '../assets/Logow.png';
import meta from '../assets/meta.svg';
import img from '../assets/about-img.svg';
import img2 from '../assets/about-img2.png';
import img3 from '../assets/about-img3.png';
import img4 from '../assets/about-img4.svg';
import wallet from '../assets/wallet.gif'
import TAROcon from '../assets/TAROcon.png';
import TAROtok from '../assets/TAROtok.png';
import TAROrew from '../assets/TAROrew.png';
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
          <div class="reward"><div class="big-icon">🔑</div>1. Descarga <span class="ustext">Descarga una cartera y crea una llave cripto</span></div>
          <div class="reward"> <div class="big-icon">🔐</div>2. Conecta <span class="ustext">Conecta tu llave cripto para usar VoTARO</span></div>
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
          <h2>A. Tu llave cripto</h2>
          <div class="about-tx2">Descarga una cartera web 3 y crea una llave cripto para guardar las recompensas que obtengas en VoTARO, descubre aquí cómo obtenerla.</div>
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
          <div class="about-tx2">Obtén TARO al proponer necesidades, actividades o eventos en tu colonia y vota para hacerlas realidad.</div>
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
        <div class="about-hl1"><a id="step0" class="big-icon">🔑</a><br/> A. Tu llave cripto</div>
        <div class="about-tx2">
          Para usar VoTARO y guardar tus recompensas ocupas descargar una cartera de ethereum en tu computadora o móvil y crear una llave cripto. 
          Con ella podrás acceder aplicaciones web 3 como VoTARO de manera segura, privada y sin restricciones.
        <br/><br/>
         <span class="orange">Toca o coloca el cursor encima de las imágenes</span> para conocer más sobre tu llave cripto:
      
        <div class="about-grid3">
          <div class="address-img"><h2 class="lex">Metamask: una cartera web 3</h2><img src={meta} alt="Private Key" class="about-img"/>
            <span class="ustext"> Metamask es una cartera de ethereum con la cual podrás <span class="orange">crear una llave cripto.</span> Esta cartera es descentralizada, lo que significa que solo tú
            podrás tener acceso a ella y todo el tiempo tendrás custodia total de los activos digitales que se depositen en ella. Descárgala desde su sitio en una computadora o 
            dispositivo móvil:
            <div class="center"><Button className="Wallet" href="https://metamask.io">🔑 Descargar Metamask</Button></div>
            </span>
          </div>
          <div class="address-img"><h2 class="yellow-lex">Dos llaves para cuidar tu cuenta</h2><img src={img} alt="Private Key" class="about-img"/>
            <span class="ustext"> La web 3 sustituye con llaves cripto a los correos y datos personales utilizados para crear cuentas en la web 2.
            <div class="center"><div class="lex"><span class="em">Tu llave cripto se forma con:</span></div></div>
              <div class="keys">
                <div class="center"><div class="p-key"><h2>🔐</h2><span class="lex">Llave privada</span></div></div>
                <div class="pu-key"><h2>📬</h2> <span class="lex">Llave pública</span></div>
                <p class="yellow-lex">Solo para ti</p>
                <p class="orange-lex">Para compartir</p>
              </div>
             
              La <span class="yellow-text">llave privada </span>da acceso a tu cuenta sin pedir tus datos personales y protege tu cuenta con 12 palabras que solo tú debes conocer.<br/>
              La <span class="orange">llave pública</span> es como tu número de teléfono, puedes compartirlo con otras personas para recibir activos digitales o participar en aplicaciones de la web 3.
            </span>
          </div>
          <div class="address-img"><h2 class="yollow-lex">Las 12 palabras de tu llave privada</h2><img src={img2} alt="Private Key" class="about-img"/>
            <span class="ustext">
            Tu llave cripto se vincula con <span class="yollow-text">12 palabras secretas</span>, las cuales decodifican tu cartera y son la <span class="red">única
              forma de acceder a tu cartera</span> o recuperarla en caso de que extravíes tu equipo.
              <div class="center"><div class="yollow-lex"><span class="em">12 palabras secretas</span></div></div>
              <div class="words">
                <div class="cword">1</div>
                <div class="cword">2</div>
                <div class="cword">3</div>
                <div class="cword">4</div>
                <div class="cword">5</div>
                <div class="cword">6</div>
                <div class="cword">7</div>
                <div class="cword">8</div>
                <div class="cword">9</div>
                <div class="cword">10</div>
                <div class="cword">11</div>
                <div class="cword">12</div>
              </div>
                <span class="center"><h2>=</h2></span>
                <div class="e-pkey">
                  <div class="p-key2"><span class="lex">🔐 <br/>Llave privada</span></div>  
                </div>
              Es muy importante que las anotes en <span class="yollow-text">el orden en que aparecen pues solo en ese orden podrás acceder a tu cuenta.</span><br/>
              Para resguardarlas se recomienda que las anotes a mano en un diario o documento privado para asegurar que nadie más que tú las conozca.
            </span>
          </div>
          <div class="address-img"><h2 class="orange-lex">La llave pública es para compartir</h2><img src={img3} alt="Public Key" class="about-img"/>
            <span class="ustext"> <span class="orange">La llave pública es similar a tu número de telefono</span>: un seudónimo que compartes con tus contactos para poder interactuar en diferentes aplicaciones. 
            <div class="e-pkey">
              <div class="pu-key2"><span class="lex">📬 <br/>Llave pública</span></div>  
              <div class="center"><span class="orange-lex"><span class="em">Empiezan con 0x</span></span></div>
            </div>
            En la web3 tu llave pública te identifica
            ante otros usuarios, te permite interactuar con contratos inteligentes y <span class="orange">recibir activos digitales.</span>
            </span>
          </div>
          <div class="address-img"><h2 class="red-lex">Tú eres responsable de tu llave</h2><img src={img4} alt="Alert about key" class="about-img"/>
            <span class="ustext"> 
              <div class="valert3">
               <div class="center"><span id="step0" class="big-icon">⚠️<br/>Atención</span></div>
               <div class="about-tx2">Ni VoTARO, ni Zenbit o Metamask conoceremos tus llaves privadas y nunca tendremos custodia de tus activos digitales; por lo que en caso de extravío, 
                 no podremos ayudarte a recuperar tu cartera o tus llaves. ¡Cuídalas muy bien!
               </div>
              </div>         
            </span>
          </div>
        </div>
          En el siguiente tutorial conocerás el paso a paso para descargar una cartera web 3 y crear una llave cripto:
        <br/><br/>
      </div>
        <ReactPlayer class="player"  url="https://youtu.be/Abzogd_3VBA"/>
        <br/>
      </div>

      <div class="about-bg1">
        <div class="about-hl1"><a id="step1" class="big-icon">☀️</a><br/>B. Las recompensas TARO</div>
        <div class="about-tx2">
          Usamos un <span class="yellow-text">contrato ERC20 para crear los tokens TARO (TARO.sol) </span>y un <span class="orange">contrato de gobernanza descentralizada para gestionar los votos y recompensas de VoTARO (GovernorAlpha.sol) 
          </span> con el objetivo digitalizar el valor inherente de la ciudad de Querétaro al crear un registro público de las necesidades 
          de la ciudad y usar el token TARO como un incentivo para resolver, fondear y validar la resolución de estas necesidades.<br/><br/>
          Esta primer versión de los contratos de VoTARO se emitió en una red de pruebas en la que podrás familiarizarte con las herramientas y desarrollar tus habilidades digitales 
          a la par de las funciones que añadiremos para facilitar el cumplimiento de las propuestas.<br/><br/>
          <div class="center"><h2 class="yellow-lex">TARO es un contrato inteligente<img src={TAROcon} alt="TARO ERC20 contract" class="about-img"/></h2></div><br/>
          <span class="yellow-text">Un contrato inteligente es un programa procesado por un blockchain </span> o computadora global
          en lugar de tu equipo. Al usar una computadora global, <span class="yellow-text">todas las interacciones se registran y validan de manera pública </span>
          por lo que una vez emitido es resistente a cambios sin consenso, siendo <span class="orange">útil evitar que información y transacciones de interés público
          sean censuradas o manipuladas.</span><br/> Los contratos inteligentes de VoTARO descentralizan la gestión de la gobernanza y las recompensas para que las descisiones se tomen con el consenso
          de sus usuarios.<br/><br/>
          <a href="https://github.com/zenbitMX/VoTARO/blob/main/contracts/Taro.sol"> Aquí</a> puedes consultar la redacción completa del contrato pero en resumen <span class="orange">
          el contrato TARO estipula:</span>
          <ol class="oneem">
            <li>Los datos públicos del token TARO para identificarlo en el blockchain.</li><br/>
            <li>La creación de 10,000,000 tokens TARO.</li><br/>
            <li>El registro permanente de las llaves públicas que interactuan con el token TARO.</li><br/>
            <li>La función de los tokens para votar en la gobernanza urbana de VoTARO.</li>          
          </ol>
          
          <div class="address-img">
          
          </div>
          <div class="address-img"><h2 class="orange-lex">Recompensas TARO disponibles <img src={TAROrew} alt="TARO rewards" class="about-img"/></h2>
            asdasdas
          </div>
        </div>
        
      </div>

        <div class="about-bg1">
          <div class="about-hl1"><a id="step2" class="big-icon">🗳️</a><br/>C. Propón y vota en Querétaro</div>

          <h2 class="yellow-lex">¿Cuantos TAROs existen? <img src={TAROtok} alt="TARO tokenomics" class="about-img"/></h2>
          <div class="address-img"><h2 class="lex">¿Cómo es la votación con TARO?</h2>
          <span class="yellow-text">Cada TARO equivale a un voto y podrás usarlo en la gobernanza de las propuestas</span> que realicen los ciudadanos de Querétaro.<br/><br/>
            asdasdas
          </div>
          <div class="address-img"><h2 class="lex">¿Cómo creo propuestas?</h2>
            asdasdas
          </div>
          <div class="address-img"><h2 class="lex">¿Cómo voto las propuestas?</h2>
            asdasdas
          </div>
        </div>

      <div class="about-bg1">

        <table id="stacked-example-4" class="charts-css column hide-data show-heading show-labels show-primary-axis show-3-secondary-axes data-spacing-10 multiple stacked">
            <caption> Percentage Stacked Columns </caption> 
            <thead>
              <tr>
                <th scope="col"> Continent </th> 
                <th scope="col"> #1 </th> 
                <th scope="col"> #2 </th> 
                <th scope="col"> #3 </th> 
                <th scope="col"> #4 </th>
              </tr>
            </thead> 
            
            <tbody>
              <tr>
                <th scope="row"> America </th>
                 <td styles="--size:calc(50 / (50 + 50 + 30 + 20));"><span class="data"> 50$ </span></td> 
                 <td styles="--size:calc(50 / (50 + 50 + 30 + 20));"><span class="data"> 50$ </span></td> 
                 <td styles="--size:calc(30 / (50 + 50 + 30 + 20));"><span class="data"> 30$ </span></td> 
                 <td styles="--size:calc(20 / (50 + 50 + 30 + 20));"><span class="data"> 20$ </span></td>
              </tr> 
              <tr>
                <th scope="row"> Asia </th> 
                <td styles="--size:calc(30 / (30 + 30 + 30 + 30));"><span class="data"> 30$ </span></td> 
                <td styles="--size:calc(30 / (30 + 30 + 30 + 30));"><span class="data"> 30$ </span></td> 
                <td styles="--size:calc(30 / (30 + 30 + 30 + 30));"><span class="data"> 30$ </span></td>
                <td styles="--size:calc(30 / (30 + 30 + 30 + 30));"><span class="data"> 30$ </span></td>
              </tr> 
              <tr>
                <th scope="row"> Europe </th> 
                <td styles="--size:calc(40 / (40 + 25 + 45 + 30));"><span class="data"> 40$ </span></td> 
                <td styles="--size:calc(25 / (40 + 25 + 45 + 30));"><span class="data"> 25$ </span></td> 
                <td styles="--size:calc(45 / (40 + 25 + 45 + 30));"><span class="data"> 45$ </span></td>
                <td styles="--size:calc(30 / (40 + 25 + 45 + 30));"><span class="data"> 30$ </span></td>
              </tr> 
              <tr>
                <th scope="row"> Africa </th> 
                <td styles="--size:calc(20 / (20 + 20 + 20 + 20));"><span class="data"> 20$ </span></td> 
                <td styles="--size:calc(20 / (20 + 20 + 20 + 20));"><span class="data"> 20$ </span></td> 
                <td styles="--size:calc(20 / (20 + 20 + 20 + 20));"><span class="data"> 20$ </span></td> 
                <td styles="--size:calc(20 / (20 + 20 + 20 + 20));"><span class="data"> 20$ </span></td>
              </tr>
            </tbody>
            </table>




        <div class="about-hl1"><a id="step3" class="big-icon">🌌</a><br/>D. Un nuevo Internet</div>
        <div class="about-tx2">VoTARO es una aplicación descentralizada desarrollada con herramientas de la web 3 como Blockchain, Contratos Inteligentes y llave cripto. <br/><br/> Si te quedaste así 😵 no te preocupes, continua leyendo para conocer como <span class="orange">obtener recompensas por aprender a usar estas herramientas</span> y participar en la gobernanza de la ciudad.
          <div class="center"><img src={www} alt="Web2 problems" class="web2p"/></div>
          <br/>
           La Web 3 es la tercera versión del internet y se concentra en empoderar a los usuarios a través de la criptografía y la verificación del valor;
           a diferencia de la <span class="yellow">Web 2 que depende de la centralización de servicios y el acceso a tus datos personales para que puedas usar sus aplicaciones.</span>
          <br/><br/>
           En cambio, la Web 3 utiliza direcciones cripto que puedes crear sin dar tus datos personales. De esta manera puedes usar aplicaciones como VoTARO de manera segura y sin comprometer tus datos. Desliza hacia abajo para conocer como ha evolucionado internet y las principales diferencias entre la Web 2 y la Web 3.
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
            <div class="vs">🔑 No invasivos <span class="ustext"> Creas una llave cripto para usarlo.</span></div>
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
          Para crear una dirección cripto no necesitas dar tus datos personales, solo necesitas <span class="orange">guardar muy bien la llave privada de tu cuenta</span>, pues <span class="yellow">solo tú la conocerás y 
          es la única forma de recuperar tu dirección cripto</span> o usarla en un dispositivo diferente. Sigue estos pasos para obtener tu dirección cripto.
          <br/><br/>
          <h2 class="orange-lex">1. Descarga una cartera web 3</h2>
          Primero descarga una cartera web 3 y crea una dirección cripto, sigue el paso a paso para descargar una dirección cripto en este tutorial. Cuando estés list@ toca el botón para descargar tu carterta Web 3.
          <br/><br/><ReactPlayer width="100%"  url="https://youtu.be/Abzogd_3VBA"/>
          <br/>
          <div class="center"><Button className="Wallet" href="https://metamask.io">🔑 Descargar cartera web 3</Button></div>
          <br/>

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