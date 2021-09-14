import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactPlayer from "react-player";

import logo from '../assets/Logow.png';
import meta from '../assets/meta.svg';
import img from '../assets/about-img.svg';
import vote from '../assets/vote.png';
import img3 from '../assets/about-img3.png';
import img4 from '../assets/about-img4.svg';
import wallet from '../assets/wallet.gif'
import TAROtok from '../assets/TAROtok.png';
import past from '../assets/past.png';
import TARO from '../assets/taro.png';
import words from '../assets/about-img2.png';
import TAROrew from '../assets/TAROrew.png';
import www from '../assets/www.svg'
import dk from '../assets/dk.png'
import corner from '../assets/corner.svg'

import DAO from '../assets/DAO.svg'
import voting from '../assets/voting.svg'
import fases from '../assets/fases.svg'
import fase1 from '../assets/fase1.svg'
import fase2 from '../assets/fase2.svg'
import fase3 from '../assets/fase3.svg'
import restrict from '../assets/restrict.svg'
import moon from '../assets/moon.svg'
import open from '../assets/open.svg'
import door from '../assets/door.svg'
import market from '../assets/market.svg'
import censor from '../assets/censor.svg'
import spy from '../assets/spy.svg'
import central from '../assets/central.svg'
import route from '../assets/route.svg'

import ticon from '../assets/ticon.png'
import governor from '../assets/governor.png';
import TAROcon from '../assets/TAROcon.png';
import verify from '../assets/verify.png';
import prop from '../assets/prop.png';



const About = () => {
  let [isEnglish] = useContext(LanguageContext);
  
  return (
  <body id="about">
  {isEnglish === 'english' ?
  <div class="about">
    <div class="about-ct">
      <br/><br/><br/><br/>
      <div class="aboutbg-grid">
        <h1 class=""><span class="jos">Empieza aquí</span></h1>
        <h3>
          VoTARO es una <span class="orange"> aplicación Web 3 para obtener cripto</span> al participar en la ciudad DAO en Querétaro para un
           <span class="orange"> presupuesto descentralizado,</span> con el que los ciudadanos puedan convertir los gastos de traslado en ingresos y se establecería un canal descentralizado para fondear obras, actividades o contratación de talento humano que resuelva las necesidades de la ciudad.<br/><br/> Obtén una llave cripto para participar y ganar TARO, el  token de VoTARO
           con el que podrás votar por propuestas que definirán el uso del presupuesto descentralizado de la ciudad DAO.
        </h3>
        </div>
      <br/>
    </div>    
    <h1 class="white"><span class="jos">¿Cómo participar?</span></h1>
    <div id="">
      <div class="about-grid">
        <div class="bg-grid"><a>
         <div class="about-hl">1. Obtén una llave cripto</div><br/>
        <img src={img} class="about-img"/>
        <span class="ustext"> <div class="center"><img src={meta} class="ribbon"/></div><br/>Metamask es una cartera de ethereum con la que podrás
        <span class="orange"> crear una llave cripto. </span> Esta cartera es descentralizada, por lo que que solo tú tendrás acceso a ella y custodia total de los activos digitales que se depositen. Descárgala desde su sitio en una computadora o dispositivo móvil:

        <div class="usgrid">
          <a class="about-bt" href="https://metamask.io">Descargar Metamask</a>
          <a class="about-bt" href="/CreateProposal">Lee sobre tu llave cripto</a>
        </div>
          
        </span>
         
        </a></div>
        <div class="bg-reward2"><a href="#step1">
         <div class="about-hl">2. Participa y gana TARO</div><br/>
        <img src={TAROrew} class="about-img"/> 
        <span class="ustext"> <div class="center"><img src={TARO} class="ribbon"/></div><br/><span class="orange">Obtén 1,000 TARO </span> al obtener tu llave cripto y validarla. 
          Ya que tengas tu llave cripto validada <span class="orange">podrás obtener 50 TARO por cada una </span> de las primeras 20 propuestas que realices.<br/><br/>
        <div class="usgrid">
          <a class="bg-reward3" href="/Quiz">Validar <br/>(1000 TARO) </a>
          <a class="bg-reward3" href="/CreateProposal">Proponer <br/>(50 TARO x20)</a>  
        </div>
        <br/>
        <div class="center"><a class="about-bt" href="/CreateProposal">Lee sobre token TARO</a></div>
        </span>
        
          
        </a></div>
        <div class="bg-grid"><a href="#step2">
         <div class="about-hl">3. Vota en la Ciudad DAO</div><br/>
        <img src={vote} class="about-img"/> 
        <span class="ustext"> <div class="center"><img src={past} class="ribbon"/></div><br/>VoTARO es una DAO (Organización Autónoma Descentralizada) 
        con el objetivo de crear un presupuesto descentralizado y gestionar la toma de deciones de la ciudad de Querétaro mediante contratos inteligentes. <span class="orange">Cada TARO que obtengas equivale a un voto</span> y cada propuesta se podrá votar durante 15 días.
        <div class="usgrid">
          <a class="about-bt" href="/Quiz">Propuestas por votar </a>
          <a class="about-bt" href="/CreateProposal">Leer sobre la Ciudad DAO</a>
        </div>
        </span>
         
        </a></div>
        <div class="bg-grid"><a href="#step3">
         <div class="about-hl">4. Mejora tus habilidades digitales</div>
        <img src={dk} class="about-img"/> 
        <span class="ustext"> <div class="center"><img src={TAROtok} class="ribbon"/></div><br/>
        Para participar en una DAO es necesario contar con las habilidades digitales necesarias para interactuar con las herramientas de la web 3 como una llave cripto o usar tus 
        tokens TARO para votar. <span class="orange">Conoce cuales son y el mapa de ruta para mejorarlas </span> con tu participación en la DAO de la ciudad de Querétaro.
        
        <div class="usgrid">
          <a class="about-bt" href="/Quiz">Habilidades digitales </a>
          <a class="about-bt" href="/CreateProposal">Ver mapa de ruta</a>
        </div>
        </span>
          
        </a></div>
        
      </div><br/><br/>
      </div>
      <h1 class="white"><span class="jos">Fases de implementación</span></h1>
      <img src={fases} alt="Public Key" class="fases"/><br/><br/><br/><br/>
      
    <section >
      <div class="aboutbg-grid2"><br/>
        <img src={img} class="ribbon2"/>
        <h1 class="about-hl2">1. Obtén una llave cripto</h1>
        <h3>
          Para usar VoTARO y guardar tus recompensas ocupas descargar una cartera de ethereum en tu computadora o móvil y crear una llave cripto. 
          Con ella podrás acceder aplicaciones web 3 como VoTARO de manera segura, privada y sin restricciones.
          <br/><br/>
         </h3>
         <h3>En el siguiente tutorial conocerás el paso a paso para descargar una cartera web 3 y crear una llave cripto:</h3>
         <ReactPlayer class="player"  url="https://youtu.be/Abzogd_3VBA"/>
        <br/>
        <h3>Toca o coloca el cursor encima de las imágenes para conocer más sobre tu llave cripto:</h3>
        <div >
        <div class="about-grid2">  
          <div class="bg-grid"><h2 class="yellow-lex">Dos llaves para cuidar tu cuenta</h2><div class="center"><img src={img} class="about-img"/></div>
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
          <div class="bg-grid"><h2 class="yollow-lex">Las 12 palabras de tu llave privada</h2>
          <div class="center"><img src={words} alt="Public Key" class="about-img"/></div>
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
          <div class="bg-grid"><h2 class="orange-lex">La llave pública es para compartir</h2><div class="center"><img src={img3} alt="Public Key" class="about-img"/></div>
            <span class="ustext"> <span class="orange">La llave pública es similar a tu número de telefono</span>: un seudónimo que compartes con tus contactos para poder interactuar en diferentes aplicaciones. 
            <div class="e-pkey">
              <div class="pu-key2"><span class="lex">📬 <br/>Llave pública</span></div>  
              <div class="center"><span class="orange-lex"><span class="em">Empiezan con 0x</span></span></div>
            </div>
            En la web3 tu llave pública te identifica
            ante otros usuarios, te permite interactuar con contratos inteligentes y <span class="orange">recibir activos digitales.</span>
            </span>
          </div>
          <div class="bg-grid" ><h2 class="red-lex">Tú eres responsable de tu llave</h2><div class="center"><img src={img4} alt="Alert about key" class="about-img"/></div>
            <span class="ustext"> 
               <div class="valert3"><span id="step0" class="center" ><h1>⚠️<br/>Atención</h1></span>
                <h3>Ni VoTARO, ni Zenbit o Metamask conoceremos tus llaves privadas y nunca tendremos custodia de tus activos digitales; por lo que en caso de extravío, 
                  no podremos ayudarte a recuperar tu cartera o tus llaves. ¡Cuídalas muy bien!
                </h3>
               </div>
                  
            </span>
          </div>
        </div>
          
        <br/>
      </div>
       
      
      </div>
    </section>
    <br/><br/>
    <section >
      <div class="aboutbg-grid2">
        <img src={TAROrew} class="ribbon2"/>
        <h1 class="about-hl2">2. Participa y gana TARO</h1>
        <h3>
          TARO es el token de VoTARO, la cripto que recibirás cómo recompensa al completar tareas en la plataforma y que podrás usar para votar por las propuestas
          de la ciudad DAO que definen el presupuesto descentralizado de Querétaro.<br/><br/>Para obtener tus primeros tokens TARO <span class="orange">ya debes tener instalada una
          cartera web 3 y haber conectado tu llave cripto</span> desde el menu principal. Si ya lo hiciste, completa la prueba de conocimiento para obtener hasta 1,000 tokens TARO
          al usar tus habilidades digitales para  validar tu cuenta con los contratos inteligentes de VoTARO.<br/><br/><span class="orange"> Una vez que valides tu cuenta podrás crear propuestas para la ciudad DAO </span>
          y obtendrás 50 TARO por cada una de las primeras 20 propuestas que hagas, por lo que podrás obtener otros 1,000 TARO por participar en la ciudad DAO. <br/><br/>
          <div class="usgrid">
          <div class="bg-reward"><a href="/Quiz">
            <img src={verify} class="ribbons"/>
            <div class="propsub">Obtén hasta 1,000 TARO</div>
            <div class="propopt">1. Validar</div>
          </a></div>
          <div class="bg-reward"><a href="/createProposal">
            <img src={prop} class="ribbons"/> 
            <div class="propsub">50 TARO por propuesta </div>
            <div class="propopt">2. Proponer</div>
          </a></div>
        </div><br/>
          Conoce más sobre el token TARO y los contratos inteligentes que facilitan el consenso en la ciudad DAO para implementar un presupuesto descentralizado.

          <div class="about-grid2">  
          <div class="bg-grid"><h2>¿Qué es un contrato inteligente?</h2><div class="center"><img src={ticon} class="about-img"/></div>
            <span class="ustext">
              Los contratos inteligentes son máquinas digitales que utilizan la información como materia prima para digitalizar el valor de algun elemento o actividad y al conectarlos a un blockchain (computadora global) son capaces de programar el comportamiento de activos digitales a lo largo del tiempo, permitiendo crear productos, empresas o sistemas nunca antes vistos. En VoTARO utilizamos 2 contratos inteligentes para <span class="orange"> crear una Organización Autónoma Descentralizada en la ciudad de Querétaro que:</span> 
              <ol>
                <li>Registra las necesidades de los ciudadanos.</li>
                <li>Recompensa el desarrollo de sus habilidades digitales.</li>
                <li>Distribuye el poder de decisión de la DAO entre quienes tengan TARO.</li>
                <li>Usa el token TARO para votar por el uso de un presupuesto descentralizado y la dirección que debe tomar el proyecto.</li>
              </ol>
            </span>
          </div>
          <div class="bg-grid"><h2>El contrato de los tokens TARO</h2><div class="center"><img src={TAROcon} class="about-img"/></div>
            <span class="ustext"> El contrato del token TARO utiliza el estandard ERC20, lo que permite crear fichas digitales programadas para cumplir estas funciones:
            <ol>
              <li>Declarar publicamente el nombre del token.</li>
              <li>Definir cuantos tokens hay en circulación y cómo se emiten.</li>
              <li>Poder fraccionar cada unidad hasta en 18 decimales.</li>
              <li>Registrar continuamente cuantos TARO hay en que llaves públicas. </li>
              <li>Poder transferir los tokens a otras llaves públicas.</li>
            </ol>
            
            TARO es un token ERC20 con estas características, pero además fue programado para que lo puedas usar para votar por las propuestas de la ciudad DAO. Aquí puedes consultar la redacción completa del contrato pero en resumen el contrato TARO estipula:
              <ol>
                <li>Que el contrato se llama "VoTARO DAO token".</li>
                <li>El token se identifica con el simbolo "TARO".</li>
                <li>La creación de 10,000,000 tokens TARO.</li>
                <li>Que 1 token TARO equivale a 1 voto en la ciudad DAO</li>
              </ol>
            </span>
          </div>
          <div class="bg-grid"><h2>El contrato Gobernador Alpha</h2>
          <div class="center"><img src={governor} alt="Public Key" class="about-img"/></div>
            <span class="ustext">
              En VoTARO el contrato del token TARO se contecta con el contrato Gobernador Alfa para añadir estas funciones:
              <ol>
                <li>Descentralizar la gestión del token TARO al transferirlos al contrato Gobernador Alfa.</li>
                <li>Validar las llaves públicas que presenten una prueba de conocimiento.</li>
                <li>Dar vigencia a la validación por 3 meses.</li>
                <li>Recompensar con 1,000 tokens TARO al completar la validación.</li>
                <li>Registrar propuestas de gobernanza para la ciudad DAO.</li>
                <li>Otorgar 50 TARO por cada propuesta creada (solo primeras 20)</li>
                <li>Registrar las direcciones públicas que votan y los TARO usados para votar propuestas.</li>
                <li>Dar vigencia para votar las propuestas por 15 días.</li>
                <li>Aprobar o rechazar propuestas según el número de votos a favor y en contra.</li>
              </ol>
              Estas funciones se definieron para la prueba piloto en la ciudad de Querétaro, pero serán sometidas a votación para definir cómo evolucionan para satisfacer las necesidades de los ciudadanos queretanos y los actores de interés de la ciudad.
            </span>
          </div>
          <div class="bg-grid"><h2>Valida tu dirección cripto</h2><div class="center"><img src={verify} alt="Public Key" class="about-img"/></div>
            <span class="ustext">
              La principal diferencia entre la web 2 y la web 3 es cómo se identifican a los usuarios. Mientras que en la web 2 es necesario dar tus datos personales para validar tu identidad, en la web 3 se utiliza pruebas de encriptación para validar la identidad lo que permite crear servicios que no solo funcionen con personas sino que sean capaces de interactuar con otros contratos inteligentes o entidades digitales. <br/><br/><span class="orange"> VoTARO esta hecho para residentes queretanos y require desarrollar habilidades digitales </span> sobre seguridad digital, comunicación y resolución de problemas para poder usarse. Por lo que aunque es abierto para todo el mundo y entidad, es necesario presentar una prueba de conocimiento que compruebe los conocimientos del usuario sobre la web 3, las llaves cripto y la ciudad DAO. Si presentas la prueba satisfactoriamente, el contrato Gobernador Alfa depositará 1,000 TARO en tu llave pública y validará tu cuenta para que puedas crear propuestas y votarlas durante 3 meses.
            </span>
          </div>
        </div>
                      
        </h3>


      </div>
    </section>

    <br/><br/>
    <section >
      <div class="aboutbg-grid2">
        <img src={vote} class="ribbon2"/>
        <h1 class="about-hl2">3. Vota en la Ciudad DAO</h1>
        
        <h3>
          Una vez que valides tu cuenta podrás crear propuestas para la ciudad DAO y votar por ellas usando los tokens TARO que hayas obtenido. Para crear propuestas tendrás que llenar los siguientes campos:
          <ol class="margins">
            <li>🎯 Nombre de la propuesta</li>
            <li>📍 Lugar</li>
            <li>⚙️ Tipo de actividad </li>
            <li>🦸 Responsable</li>
            <li>📑 Descripción</li>
            <li>💸 Presupuesto </li>
          </ol>
          Una vez que aceptes el envio de tu propuesta desde metamask, se registrará en el contrato Gobernador Alpha y <span class="orange">estará disponible para votar durante 15 días.</span> Durante los 15 días de vigencia, tu y otros usuarios podrán votarla, o puedes votar por las propuestas de otros usuarios si están disponibles.
          
          
           Al expirar el tiempo para votar se aceptará si tiene más votos a favor o será rechazada si tiene más votos en contra o si no recibe ningún voto.
        </h3><br/>
        <h2>Evolución de una propuesta </h2>
        <div class="center"><img src={voting} alt="Public Key" class="fase"/></div><br/>
        <div class="usgrid">
          <div class="bg-grid"><a href="/createProposal">
            <img src={prop} class="ribbons"/>
            <div class="propsub">Nueva propuesta </div>
            <div class="propopt">Crear</div>
          </a></div>
          <div class="bg-grid"><a href="/Quiz">
            
            <img src={past} class="ribbons"/>
            <div class="propsub">Propuestas por votar</div>
            <div class="propopt">Votar</div>
          </a></div>
          
        </div>
      </div>
    </section>

    <br/><br/>
    <section >
      <div class="aboutbg-grid2">
        <img src={route} class="ribbon2"/>
        <h1 class="about-hl2">4. Mapa de ruta</h1>
        <h3>
          VoTARO tiene el objetivo de formar una DAO (Organización Autónoma Descentralizada) en la ciudad de Querétaro para gestionar la creación de un presupuesto descentralizado, que aporte a la economía de los queretanos con recompensas por participación ciuddana y el desarrollo de habilidades digitales.  <br/><br/>
          <h2>Para empezar, ¿Qué es una DAO? </h2>
          Una Organización Autónoma Descentralizada o DAO es un grupo organizado entorno a una misión que se coordina a través de un conjunto de normas aplicadas en un blockchain. Una de las principales ventajas de una DAO es que son más transparentes que las empresas tradicionales ya que todas las acciones y fondeo de actividades son visibles por cualquier persona, reduciendo significativamente el riesgo de corrupción y censura.  <br/><br/>
          También dan accesibilidad a actores de interés de cualquier parte del mundo los cuales pueden aportar con desarrollo, talento o fondos. Estos modelos de organizaciónusan contratos inteligentes cómo los de VoTARO para descentralizar la gobernanza de su operación. VoTARO es un prototipo de DAO para ciudades, donde los usuarios obtienen derechos como participantes de la organización a través de los tokens digitales que obtienen cómo recompensa por desarrollar sus habilidades digitales.
        
          <div class="webvs">
          <div class="gray2"><h1>▲ </h1>Compañias tradicionales </div>
          <div class="orange"><h1>▼ </h1>DAOs </div>
          <div class="web2vs">
            <div class="vs"> Centralizada <span class="ustext"> <img src={central} class="about-img"/><br/>Depende de un intermediario.</span></div>
            <div class="vs"> Invasiva <span class="ustext"> <img src={spy} class="about-img"/><br/>Das tus datos personales para usarlo.</span></div>
            <div class="vs"> Restrictivas <span class="ustext"><img src={restrict} class="about-img"/><br/>Solo (algunas) personas lo pueden usar.</span></div>
            <div class="vs"> Censurable <span class="ustext"><img src={censor} class="about-img"/><br/>Cancela posturas e impone condiciones.</span></div>
            <div class="vs"> Mercado limitado <span class="ustext"><img src={market} class="about-img"/><br/>Número de usuarios limitado a mercados.</span></div>
          </div>
          <div class="web3vs">
            <div class="vs"> Descentralizado <span class="ustext"><img src={www} class="about-img"/><br/>Distribuido entre los usuarios.</span></div>
            <div class="vs"> No invasivos <span class="ustext"> <img src={img} class="about-img"/><br/>Creas una dirección cripto para usarlo.</span></div>
            <div class="vs">Transparente <span class="ustext"><img src={door} class="about-img"/><br/>Cualquier persona y máquinas lo pueden usar.</span></div>
            <div class="vs"> Incensurable <span class="ustext"><img src={open} class="about-img"/><br/>Preprogramado para generar consenso.</span></div>
            <div class="vs"> Sin fronteras <span class="ustext"><img src={moon} class="about-img"/><br/>Número de usuarios definido por contextos.</span></div>
          </div>
          </div><br/><br/>
          <h2>Integrantes de la Ciudada DAO</h2>
          <div class="center"><img src={DAO} alt="Public Key" class="fase"/></div><br/>
          <h2>Fase 1: Prueba Piloto </h2>
          <div class="center"><img src={fase1} alt="Public Key" class="fase"/></div><br/>
          <h2>Fase 2: Integración </h2>
          <div class="center"><img src={fase2} alt="Public Key" class="fase23"/></div><br/>
          <h2>Fase 3: Implementación </h2>
          <div class="center"><img src={fase3} alt="Public Key" class="fase23"/></div><br/>
        </h3>

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
        
      </div>
    </section>
  </div>
      }
    </body>
  );
};

export default About;