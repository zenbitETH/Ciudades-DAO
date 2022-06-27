import {Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const PolygonButton = ({handleOnClick}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?
      
    <div>
      <div className="purple2">        
        <Button onClick={handleOnClick}>Switch to Polygon Testnet</Button>
      </div>
    </div>
    :
    <div>
      <Button onClick={handleOnClick}>Cambiar a Polygon Testnet</Button>
    </div>
}</div>
  );
};

export default PolygonButton;
