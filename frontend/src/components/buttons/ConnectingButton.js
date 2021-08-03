import { Button, Spinner,Card } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const ConnectingButton = () => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
    {isEnglish === 'english' ?
    <Button disabled>
    Connecting... 
    <span className="spinner-grow" role="status"></span>
    </Button>
    :
    <Button disabled>
    Conectando...
    <span className="spinner-grow" role="status" aria-hidden="true"> </span>
    </Button>    
    }
    </div>
  );
};

export default ConnectingButton;
