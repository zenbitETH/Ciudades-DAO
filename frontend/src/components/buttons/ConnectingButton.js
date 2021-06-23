import { Button, Spinner,Card } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectingButton = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
    {isEnglish === 'english' ?    
    <div>
      <div>
        <Button disabled>
        Connecting... 
        <span className="spinner-grow" role="status"></span>
        </Button>
        <Card.Text>You need a Metamask wallet to use VoTARO</Card.Text>      
      </div>
      
    </div>
    :
    <div>
        <Button disabled>
        <span className="spinner-grow" role="status" aria-hidden="true"></span>
        <span> Conectando...</span>
        </Button>
        <Card.Text>Necesitas una wallet de Metamask para usar VoTARO</Card.Text>      
      
    </div>
    }
    </div>
  );
};

export default ConnectingButton;
