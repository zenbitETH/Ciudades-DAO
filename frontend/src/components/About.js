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
import DAOeng from '../assets/DAOeng.svg'
import voting from '../assets/voting.svg'
import voting2 from '../assets/voting2.svg'
import fases from '../assets/fases.svg'
import phases from '../assets/phases.svg'
import fase1 from '../assets/fase1.svg'
import phase1 from '../assets/phase1.svg'
import fase2 from '../assets/fase2.svg'
import phase2 from '../assets/phase2.svg'
import fase3 from '../assets/fase3.svg'
import phase3 from '../assets/phase3.svg'
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
        <h1 class=""><span class="jos">Start here</span></h1>
        <h3>
            VoTARO is a <span class = "orange"> Web 3 application to get crypto </span> by participating in the city DAO  in Querétaro for a
            <span class = "orange"> decentralized budget, </span> with which citizens can convert travel expenses into income and would establish a decentralized channel to fund works, activities or hiring human talent that meets the needs of the city. <br/> <br/> Get a crypto key to participate and win TARO, the VoTARO token
            With which you can vote for proposals that will define the use of the decentralized budget of the DAO city.
        </h3>
        </div>
      <br/>
    </div>    
    <h1 class = "white"> <span class = "jos"> How to participate? </span> </h1>
    <div id = "">
      <div class = "about-grid">
        <div class = "bg-grid"> <a>
         <div class = "about-hl"> 1. Get a crypto key </div> <br/>
        <img src = {img} class ="about-img"/>
        <span class = "ustext"> <div class = "center"> <img src = {meta} class="about-img"/> </div> <br/> Metamask is an ethereum wallet with which you can
        <span class = "orange"> create a crypto key. </span> This portfolio is decentralized, so only you will have access to it and full custody of the digital assets that are deposited. Download it from your site on a computer or mobile device:

        <div class = "usgrid">
          <a class="about-bt" href="https://metamask.io"> Download Metamask </a>
          <a class="about-bt" href="/CreateProposal"> Read about crypto keys </a>
        </div>
          
        </span>
         
        </a> </div>
        <div class = "bg-reward2"> <a href="#step1">
         <div class = "about-hl"> 2. How te get TARO </div> <br/>
        <img src={TAROrew} class="about-img"/>
        <span class = "ustext"> <div class = "center"> <img src = {TARO} class="about-img" /> </div> <br/> <span class = "orange"> Get 1,000 TARO </span> when obtaining your crypto key and validating it.
          Once you have your crypto key validated <span class = "orange"> you can get 50 TARO for each one </span> of the first 20 proposals you make. <br/> <br/>
        <div class = "usgrid">
          <a class="bg-reward3" href="/Quiz"> Validate <br/> (1000 TARO) </a>
          <a class="bg-reward3" href="/CreateProposal"> Propose <br/> (50 TARO) </a>
        </div>
        <br/>
        <div class = "center"> <a class="about-bt" href="/CreateProposal"> Read about TARO token </a> </div>
        </span>
        
          
        </a> </div>
        <div class = "bg-grid"> <a href="#step2">
         <div class = "about-hl"> 3. Vote in DAO City </div> <br/>
        <img src = {vote} class = "about-img" />
        <span class = "ustext"> <div class = "center"> <img src = {past} class = "about-img" /> </div> <br/> VoTARO is a DAO (Decentralized Autonomous Organization)
        with the aim of creating a decentralized budget and managing the decision-making of the city of Querétaro through smart contracts. <span class = "orange"> Each TARO you obtain is equivalent to one vote </span> and each proposal can be voted on for 15 days.
        <div class = "usgrid">
          <a class="about-bt" href="/Quiz"> Proposals to vote </a>
          <a class="about-bt" href="/CreateProposal"> Read about DAO City </a>
        </div>
        </span>
         
        </a> </div>
        <div class = "bg-grid"> <a href="#step3">
         <div class = "about-hl"> 4. Roadmap </div>
        <img src = {moon} class = "about-img" />
        <span class = "ustext"> <div class = "center"> <img src = {TAROtok} class = "about-img" /> </div> <br/>
        To participate in a DAO it is necessary to have the digital skills necessary to interact with web tools 3 such as a crypto key or use your
        TARO tokens to vote. <span class = "orange"> Know what they are and the roadmap to improve them </span> with your participation in the DAO of the city of Querétaro.
        <br/><br/>
        <div class = "center"> <a class="about-bt" href="/CreateProposal"> View roadmap </a> </div>
        </span>
          
        </a></div>
        
      </div><br/><br/>
      </div>
      <h1 class="white"><span class="jos">Implementation phases</span></h1>
      <img src={phases} alt="Public Key" class="fases"/><br/><br/><br/><br/>
      
    <section >
      <div class="aboutbg-grid2"><br/>
        <img src={img} class="ribbon2"/>
        <h1 class = "about-hl2"> 1. Get a crypto key </h1>
        <h3>
          To use VoTARO and save your rewards, you need to download an ethereum wallet on your computer or mobile and create a crypto key.
          With it you will be able to access web applications 3 such as VoTARO in a safe, private and unrestricted manner.
          <br/> <br/>
         </h3>
         <h3> In the following tutorial you will know the step by step to download a web wallet 3 and create a crypto key: </h3>
         <ReactPlayer class = "player" url = "https://youtu.be/Abzogd_3VBA" />
        <br/>
        <h3> Touch or hover over the images to learn more about your crypto key: </h3>
        <div>
        <div class = "about-grid2">
          <div class = "bg-grid"> <h2 class = "yellow-lex"> Two keys to take care of your account </h2> <div class = "center"> <img src = {img} class = "about-img"/> </div>
            <span class = "ustext"> Web 3 substitutes crypto keys for emails and personal data used to create accounts on web 2.
            <div class = "center"> <div class = "lex"> <span class = "em"> Your crypto key is formed with: </span> </div> </div>
              <div class = "keys">
                <div class = "center"> <div class = "p-key"> <h2> 🔐 </h2> <span class = "lex"> Private key </span> </div> </div>
                <div class = "pu-key"> <h2> 📬 </h2> <span class = "lex"> Public key </span> </div>
                <p class = "yellow-lex"> Just for you </p>
                <p class = "orange-lex"> To share </p>
              </div>
             
              The <span class = "yellow-text"> private key </span> gives access to your account without asking for your personal data and protects your account with 12 words that only you should know. <br/>
              The <span class = "orange"> public key </span> is like your phone number, you can share it with other people to receive digital assets or participate in web applications 3.
            </span>
          </div>
          <div class = "bg-grid"> <h2 class = "yollow-lex"> The 12 words of your private key </h2>
          <div class = "center"> <img src = {words} alt = "Public Key" class = "about-img" /> </div>
            <span class = "ustext">
            Your crypto key is linked with <span class = "yollow-text"> 12 secret words </span>, which decode your wallet and are the only <span class = "network">
              way to access your wallet </span> or recover it in case you lose your equipment.
              <div class = "center"> <div class = "yollow-lex"> <span class = "em"> 12 secret words </span> </div> </div>
              <div class = "words">
                <div class = "cword"> 1 </div>
                <div class = "cword"> 2 </div>
                <div class = "cword"> 3 </div>
                <div class = "cword"> 4 </div>
                <div class = "cword"> 5 </div>
                <div class = "cword"> 6 </div>
                <div class = "cword"> 7 </div>
                <div class = "cword"> 8 </div>
                <div class = "cword"> 9 </div>
                <div class = "cword"> 10 </div>
                <div class = "cword"> 11 </div>
                <div class = "cword"> 12 </div>
              </div>
                <span class = "center"> <h2> = </h2> </span>
                <div class = "e-pkey">
                  <div class = "p-key2"> <span class = "lex"> 🔐 <br/> Private key </span> </div>
                </div>
              It is very important that you write them down in <span class = "yollow-text"> the order in which they appear because only in that order will you be able to access your account. </span> <br/>
              To protect them, it is recommended that you write them down by hand in a journal or private document to ensure that no one but you knows them.
            </span>
          </div>
          <div class = "bg-grid"> <h2 class = "orange-lex"> The public key is for sharing </h2> <div class = "center"> <img src = {img3} alt = "Public Key "class =" about-img "/> </div>
            <span class = "ustext"> <span class = "orange"> The public key is similar to your phone number </span>: a pseudonym that you share with your contacts to be able to interact in different applications.
            <div class = "e-pkey">
              <div class = "pu-key2"> <span class = "lex"> 📬 <br/> Public key </span> </div>
              <div class = "center"> <span class = "orange-lex"> <span class = "em"> They start with 0x </span> </span> </div>
            </div>
            On web3 your public key identifies you
            to other users, it allows you to interact with smart contracts and <span class = "orange"> receive digital assets. </span>
            </span>
          </div>
          <div class = "bg-grid"> <h2 class = "red-lex"> You are responsible for your key </h2> <div class = "center"> <img src = {img4} alt = "Alert about key "class =" about-img "/> </div>
            <span class = "ustext">
               <div class = "valert3"> <span id = "step0" class = "center"> <h1> ⚠️ <br/> Attention </h1> </span>
                <h3> Neither VoTARO, nor Zenbit or Metamask will know your private keys and we will never have custody of your digital assets; so in case of loss,
                  We will not be able to help you retrieve your wallet or keys. Take good care of them!
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
        <h1 class = "about-hl2"> 2. Participate and win TARO </h1>
        <h3>
          TARO is the VoTARO token, the crypto that you will receive as a reward for completing tasks on the platform and that you can use to vote for the proposals
          of the DAO city that define the decentralized budget of Querétaro. <br/> <br/> To obtain your first TARO tokens <span class = "orange"> you must already have an installed
          web wallet 3 and having connected your crypto key </span> from the main menu. If you already have, complete the knowledge test to get up to 1,000 TARO tokens
          by using your digital skills to validate your account with VoTARO smart contracts. <br/> <br/> <span class = "orange"> Once you validate your account you will be able to create proposals for the DAO city </span>
          and you will get 50 TARO for each of the first 20 proposals you make, so you can get another 1,000 TARO for participating in the DAO city. <br/> <br/>
          <div class = "usgrid">
          <div class = "bg-reward"> <a href="/Quiz">
            <img src = {verify} class = "ribvan" />
            <div class = "propsub"> Get up to 1,000 TARO </div>
            <div class = "propopt"> 1. Validate </div>
          </a> </div>
          <div class = "bg-reward"> <a href="/createProposal">
            <img src = {prop} class = "ribvan" />
            <div class = "propsub"> 50 TARO per proposal </div>
            <div class = "propopt"> 2. Propose </div>
          </a> </div>
        </div> <br/>
          Learn more about the TARO token and smart contracts that facilitate consensus in the DAO city to implement a decentralized budget.

          <div class = "about-grid2">
          <div class = "bg-grid"> <h2> What is a smart contract? </h2> <div class = "center"> <img src = {ticon} class = "about-img" /> </ div>
            <span class = "ustext">
              Smart contracts are digital machines that use information as raw material to digitize the value of some element or activity and by connecting them to a blockchain (global computer) they are capable of programming the behavior of digital assets over time, allowing the creation of products. , companies or systems never seen before. At VoTARO we use 2 smart contracts to <span class = "orange"> create a Decentralized Autonomous Organization in the city of Querétaro that: </span>
              <ol>
                <li> Registers the needs of citizens. </li>
                <li> Rewards the development of your digital skills. </li>
                <li> Distributes the decision-making power of the DAO among those who have TARO. </li>
                <li> Use the TARO token to vote for the use of a decentralized budget and the direction the project should take. </li>
              </ol>
            </span>
          </div>
          <div class = "bg-grid"> <h2> The TARO token contract </h2> <div class = "center"> <img src = {TAROcon} class = "about-img" /> </ div >
            <span class = "ustext"> The TARO token contract uses the ERC20 standard, which allows the creation of digital tokens programmed to fulfill these functions:
            <ol>
              <li> Declare the token name publicly. </li>
              <li> Define how many tokens are in circulation and how they are issued. </li>
              <li> Be able to divide each unit to up to 18 decimal places. </li>
              <li> Continuously record how many TAROs are in which public keys. </li>
              <li> Be able to transfer the tokens to other public keys. </li>
            </ol>
            
            TARO is an ERC20 token with these characteristics, but it was also programmed so that you can use it to vote for the DAO city proposals. Here you can consult the complete wording of the contract but in summary the TARO contract stipulates:
              <ol>
                <li> That the contract is called "VoTARO DAO token". </li>
                <li> The token is identified with the symbol "TARO". </li>
                <li> The creation of 10,000,000 TARO tokens. </li>
                <li> That 1 TARO token equals 1 vote in DAO city </li>
              </ol>
            </span>
          </div>
          <div class = "bg-grid"> <h2> The Alpha Governor contract </h2>
          <div class = "center"> <img src = {governor} alt = "Public Key" class = "about-img" /> </div>
            <span class = "ustext">
              In VoTARO, the TARO token contract is connected with the Alfa Governor contract to add these functions:
              <ol>
                <li> Decentralize the management of the TARO token by transferring them to the Alfa Governor contract. </li>
                <li> Validate public keys that present proof of knowledge. </li>
                <li> Give validity to the validation for 3 months. </li>
                <li> Reward 1,000 TARO tokens upon completion of validation. </li>
                <li> Register governance proposals for the DAO city. </li>
                <li> Award 50 TARO for each proposal created (only the first 20) </li>
                <li> Register the voting public addresses and TAROs used to vote proposals. </li>
                <li> Give validity to vote the proposals for 15 days. </li>
                <li> Approve or reject proposals according to the number of votes in favor and against. </li>
              </ol>
              These functions were defined for the pilot test in the city of Querétaro, but will be put to a vote to define how they evolve to meet the needs of Queretaro citizens and stakeholders of the city.
            </span>
          </div>
          <div class = "bg-grid"> <h2> Validate your crypto address </h2> <div class = "center"> <img src = {verify} alt = "Public Key" class = "about-img"/> </div>
            <span class = "ustext">
              The main difference between web 2 and web 3 is how users are identified. While on web 2 it is necessary to give your personal data to validate your identity, on web 3 encryption tests are used to validate the identity which allows creating services that not only work with people but are also capable of interacting with other contracts smart or digital entities. <br/> <br/> <span class = "orange"> VoTARO is made for Queretaro residents and requires developing digital skills </span> on digital security, communication and problem solving in order to be used. Therefore, although it is open to everyone and entity, it is necessary to present a knowledge test that verifies the user's knowledge of the web 3, the crypto keys and the DAO city. If you submit the proof successfully, the Governor Alpha contract will deposit 1,000 TAROs in your public key and validate your account so that you can create proposals and vote on them for 3 months.
            </span>
          </div>
        </div>
                      
        </h3>


      </div>
    </section>

    <br/> <br/>
    <section>
      <div class = "aboutbg-grid2">
        <img src = {vote} class = "ribbon2" />
        <h1 class = "about-hl2"> 3. Vote in DAO City </h1>
        
        <h3>
          Once you validate your account, you can create proposals for the DAO city and vote for them using the TARO tokens you have obtained. To create proposals you will have to fill in the following fields:
          <ol class="margins">
            <li> 🎯 Name of the proposal </li>
            <li> 📍 Place </li>
            <li> ⚙️ Type of activity </li>
            <li> 🦸 Responsible </li>
            <li> 📑 Description </li>
            <li> 💸 Budget </li>
          </ol>
          Once you accept the submission of your proposal from metamask, it will be registered in the Governor Alpha contract and <span class = "orange"> will be available to vote for 15 days. </span> During the 15 days of validity, you and others Users will be able to vote for it, or you can vote for the proposals of other users if they are available.
          
          
           Upon expiration of the time to vote, it will be accepted if it has more votes in favor or it will be rejected if it has more votes against or if it does not receive any vote.
        </h3> <br/>
        <h2> Evolution of a proposal </h2>
        <div class = "center"> <img src={voting2} alt="Public Key" class ="fase"/> </div> <br/>
        <div class = "usgrid">
          <div class = "bg-grid"> <a href="/createProposal">
            <img src = {prop} class = "ribvan" />
            <div class = "propsub"> New proposal </div>
            <div class = "propopt"> Create </div>
          </a> </div>
          <div class = "bg-grid"> <a href="/Quiz">
            
            <img src = {past} class = "ribvan" />
            <div class = "propsub"> Proposals to vote </div>
            <div class = "propopt"> Vote </div>
          </a> </div>
          
        </div>
      </div>
    </section>

    <br/><br/>
    <section >
      <div class="aboutbg-grid2">
        <img src={route} class="ribbon2"/>
        <h1 class = "about-hl2"> 4. Route map </h1>
        <h3>
          VoTARO has the objective of forming a DAO (Decentralized Autonomous Organization) in the city of Querétaro to manage the creation of a decentralized budget, which contributes to the economy of Queretans with rewards for citizen participation and the development of digital skills. <br/> <br/>
          <h2> To begin with, what is a DAO? </h2>
          A Decentralized Autonomous Organization or DAO is a group organized around a mission that is coordinated through a set of standards applied in a blockchain. One of the main advantages of a DAO is that they are more transparent than traditional companies since all actions and funding of activities are visible by anyone, significantly reducing the risk of corruption and censorship. <br/> <br/>
          They also give accessibility to stakeholders from any part of the world who can contribute with development, talent or funds. These organization models use smart contracts like VoTARO's to decentralize the governance of their operation. VoTARO is a prototype of DAO for cities, where users obtain rights as participants of the organization through the digital tokens that they obtain as a reward for developing their digital skills.
        
          <div class = "webvs">
          <div class = "gray2"> <h1> ▲ </h1> Traditional companies </div>
          <div class = "orange"> <h1> ▼ </h1> DAOs </div>
          <div class = "web2vs">
            <div class = "vs"> Centralized <span class = "ustext"> <img src = {central} class = "about-img" /> <br/> Depends on an intermediary. </span> </div>
            <div class = "vs"> Invasive <span class = "ustext"> <img src = {spy} class = "about-img" /> <br/> You provide your personal data to use it. </span> </ div>
            <div class = "vs"> Restrictive <span class = "ustext"> <img src = {restrict} class = "about-img" /> <br/> Only (some) people can use it. </span> </div>
            <div class = "vs"> Censurable <span class = "ustext"> <img src = {censor} class = "about-img" /> <br/> Cancel positions and impose conditions. </span> </ div >
            <div class = "vs"> Limited market <span class = "ustext"> <img src = {market} class = "about-img" /> <br/> Number of users limited to markets. </span> </div>
          </div>
          <div class = "web3vs">
            <div class = "vs"> Decentralized <span class = "ustext"> <img src = {www} class = "about-img" /> <br/> Distributed among users. </span> </div>
            <div class = "vs"> Non-invasive <span class = "ustext"> <img src = {img} class = "about-img" /> <br/> Create a crypto address to use it. </span> </div>
            <div class = "vs"> Transparent <span class = "ustext"> <img src = {door} class = "about-img" /> <br/> Anyone and machines can use it. </span> </div>
            <div class = "vs"> Incensible <span class = "ustext"> <img src = {open} class = "about-img" /> <br/> Pre-programmed to generate consensus. </span> </div>
            <div class = "vs"> No borders <span class = "ustext"> <img src = {moon} class = "about-img" /> <br/> Number of users defined by contexts. </span> </div>
          </div>
          </div> <br/> <br/>
          <h2> Members of the DAO Citizen </h2>
          <div class = "center"> <img src = {DAOeng} alt = "Public Key" class = "fase"/> </div> <br/>
          <h2> Phase 1: Pilot Test </h2>
          <div class = "center"> <img src = {phase1} alt = "Public Key" class = "fase"/> </div> <br/>
          <h2> Phase 2: Integration </h2>
          <div class = "center"> <img src = {phase2} alt = "Public Key" class = "fase23" /> </div> <br/>
          <h2> Phase 3: Implementation </h2>
          <div class = "center"> <img src = {phase3} alt = "Public Key" class = "fase23"/> </div> <br/>
        </h3>
      </div>
    </section>
  </div>
  :
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
        <span class="ustext"> <div class="center"><img src={meta} class="about-img"/></div><br/>Metamask es una cartera de ethereum con la que podrás
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
        <span class="ustext"> <div class="center"><img src={TARO} class="about-img"/></div><br/><span class="orange">Obtén 1,000 TARO </span> al obtener tu llave cripto y validarla. 
          Ya que tengas tu llave cripto validada <span class="orange">podrás obtener 50 TARO por cada una </span> de las primeras 20 propuestas que realices.<br/><br/>
        <div class="usgrid">
          <a class="bg-reward3" href="/Quiz">Validar <br/>(1000 TARO) </a>
          <a class="bg-reward3" href="/CreateProposal">Proponer <br/>(50 TARO)</a>  
        </div>
        <br/>
        <div class="center"><a class="about-bt" href="/CreateProposal">Lee sobre token TARO</a></div>
        </span>
        
          
        </a></div>
        <div class="bg-grid"><a href="#step2">
         <div class="about-hl">3. Vota en la Ciudad DAO</div><br/>
        <img src={vote} class="about-img"/> 
        <span class="ustext"> <div class="center"><img src={past} class="about-img"/></div><br/>VoTARO es una DAO (Organización Autónoma Descentralizada) 
        con el objetivo de crear un presupuesto descentralizado y gestionar la toma de decisiones de la ciudad de Querétaro mediante contratos inteligentes. <span class="orange">Cada TARO que obtengas equivale a un voto</span> y cada propuesta se podrá votar durante 15 días.
        <div class="usgrid">
          <a class="about-bt" href="/Quiz">Propuestas por votar </a>
          <a class="about-bt" href="/CreateProposal">Leer sobre la Ciudad DAO</a>
        </div>
        </span>
         
        </a></div>
        <div class="bg-grid"><a href="#step3">
         <div class="about-hl">4. Mapa de ruta</div>
        <img src={moon} class="about-img"/> 
        <span class="ustext"> <div class="center"><img src={TAROtok} class="about-img"/></div><br/>
        Para participar en una DAO es necesario contar con las habilidades digitales necesarias para interactuar con las herramientas de la web 3 como una llave cripto o usar tus 
        tokens TARO para votar. <span class="orange">Conoce cuales son y el mapa de ruta para mejorarlas </span> con tu participación en la DAO de la ciudad de Querétaro.
        <br/><br/>
        <div class="center"><a class="about-bt" href="/CreateProposal">Lee sobre token TARO</a></div>
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
          TARO es el token de VoTARO, la cripto que recibirás como recompensa al completar tareas en la plataforma y que podrás usar para votar por las propuestas
          de la ciudad DAO que definen el presupuesto descentralizado de Querétaro.<br/><br/>Para obtener tus primeros tokens TARO <span class="orange">ya debes tener instalada una
          cartera web 3 y haber conectado tu llave cripto</span> desde el menú principal. Si ya lo hiciste, completa la prueba de conocimiento para obtener hasta 1,000 tokens TARO
          al usar tus habilidades digitales para  validar tu cuenta con los contratos inteligentes de VoTARO.<br/><br/><span class="orange"> Una vez que valides tu cuenta podrás crear propuestas para la ciudad DAO </span>
          y obtendrás 50 TARO por cada una de las primeras 20 propuestas que hagas, por lo que podrás obtener otros 1,000 TARO por participar en la ciudad DAO. <br/><br/>
          <div class="usgrid">
          <div class="bg-reward"><a href="/Quiz">
            <img src={verify} class="ribvan"/>
            <div class="propsub">Obtén hasta 1,000 TARO</div>
            <div class="propopt">1. Validar</div>
          </a></div>
          <div class="bg-reward"><a href="/createProposal">
            <img src={prop} class="ribvan"/> 
            <div class="propsub">50 TARO por propuesta </div>
            <div class="propopt">2. Proponer</div>
          </a></div>
        </div><br/>
          Conoce más sobre el token TARO y los contratos inteligentes que facilitan el consenso en la ciudad DAO para implementar un presupuesto descentralizado.

          <div class="about-grid2">  
          <div class="bg-grid"><h2>¿Qué es un contrato inteligente?</h2><div class="center"><img src={ticon} class="about-img"/></div>
            <span class="ustext">
              Los contratos inteligentes son máquinas digitales que utilizan la información como materia prima para digitalizar el valor de algún elemento o actividad y al conectarlos a un blockchain (computadora global) son capaces de programar el comportamiento de activos digitales a lo largo del tiempo, permitiendo crear productos, empresas o sistemas nunca antes vistos. En VoTARO utilizamos 2 contratos inteligentes para <span class="orange"> crear una Organización Autónoma Descentralizada en la ciudad de Querétaro que:</span> 
              <ol>
                <li>Registra las necesidades de los ciudadanos.</li>
                <li>Recompensa el desarrollo de sus habilidades digitales.</li>
                <li>Distribuye el poder de decisión de la DAO entre quienes tengan TARO.</li>
                <li>Usa el token TARO para votar por el uso de un presupuesto descentralizado y la dirección que debe tomar el proyecto.</li>
              </ol>
            </span>
          </div>
          <div class="bg-grid"><h2>El contrato de los tokens TARO</h2><div class="center"><img src={TAROcon} class="about-img"/></div>
            <span class="ustext"> El contrato del token TARO utiliza el estándard ERC20, lo que permite crear fichas digitales programadas para cumplir estas funciones:
            <ol>
              <li>Declarar públicamente el nombre del token.</li>
              <li>Definir cuántos tokens hay en circulación y como se emiten.</li>
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
              Estas funciones se definieron para la prueba piloto en la ciudad de Querétaro, pero serán sometidas a votación para definir como evolucionan para satisfacer las necesidades de los ciudadanos queretanos y los actores de interés de la ciudad.
            </span>
          </div>
          <div class="bg-grid"><h2>Valida tu dirección cripto</h2><div class="center"><img src={verify} alt="Public Key" class="about-img"/></div>
            <span class="ustext">
              La principal diferencia entre la web 2 y la web 3 es como se identifican a los usuarios. Mientras que en la web 2 es necesario dar tus datos personales para validar tu identidad, en la web 3 se utiliza pruebas de encriptación para validar la identidad lo que permite crear servicios que no solo funcionen con personas sino que sean capaces de interactuar con otros contratos inteligentes o entidades digitales. <br/><br/><span class="orange"> VoTARO esta hecho para residentes queretanos y require desarrollar habilidades digitales </span> sobre seguridad digital, comunicación y resolución de problemas para poder usarse. Por lo que aunque es abierto para todo el mundo y entidad, es necesario presentar una prueba de conocimiento que compruebe los conocimientos del usuario sobre la web 3, las llaves cripto y la ciudad DAO. Si presentas la prueba satisfactoriamente, el contrato Gobernador Alfa depositará 1,000 TARO en tu llave pública y validará tu cuenta para que puedas crear propuestas y votarlas durante 3 meses.
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
          Una vez que aceptes el envío de tu propuesta desde metamask, se registrará en el contrato Gobernador Alpha y <span class="orange">estará disponible para votar durante 15 días.</span> Durante los 15 días de vigencia, tú y otros usuarios podrán votarla, o puedes votar por las propuestas de otros usuarios si están disponibles.
          
          
           Al expirar el tiempo para votar se aceptará si tiene más votos a favor o será rechazada si tiene más votos en contra o si no recibe ningún voto.
        </h3><br/>
        <h2>Evolución de una propuesta </h2>
        <div class="center"><img src={voting} alt="Public Key" class="fase"/></div><br/>
        <div class="usgrid">
          <div class="bg-grid"><a href="/createProposal">
            <img src={prop} class="ribvan"/>
            <div class="propsub">Nueva propuesta </div>
            <div class="propopt">Crear</div>
          </a></div>
          <div class="bg-grid"><a href="/Quiz">
            
            <img src={past} class="ribvan"/>
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
          VoTARO tiene el objetivo de formar una DAO (Organización Autónoma Descentralizada) en la ciudad de Querétaro para gestionar la creación de un presupuesto descentralizado, que aporte a la economía de los queretanos con recompensas por participación ciudadana y el desarrollo de habilidades digitales.  <br/><br/>
          <h2>Para empezar, ¿Qué es una DAO? </h2>
          Una Organización Autónoma Descentralizada o DAO es un grupo organizado en torno a una misión que se coordina a través de un conjunto de normas aplicadas en un blockchain. Una de las principales ventajas de una DAO es que son más transparentes que las empresas tradicionales ya que todas las acciones y fondeo de actividades son visibles por cualquier persona, reduciendo significativamente el riesgo de corrupción y censura.  <br/><br/>
          También dan accesibilidad a actores de interés de cualquier parte del mundo, los cuales pueden aportar con desarrollo, talento o fondos. Estos modelos de organización usan contratos inteligentes como los de VoTARO para descentralizar la gobernanza de su operación. VoTARO es un prototipo de DAO para ciudades, donde los usuarios obtienen derechos como participantes de la organización a través de los tokens digitales que obtienen como recompensa por desarrollar sus habilidades digitales.
        
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
      }
    </body>
  );
};

export default About;