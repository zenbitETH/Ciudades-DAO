import {Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const PolygonButton = ({handleOnPolygon}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      {isEnglish === 'english' ?
      
    <div>
      <div className="purple2">        
        <Button onClick={handleOnPolygon}>Cambiar a Polygon Testnet</Button>
      </div>
    </div>
    :
    <div>
      
      <Button onClick={handleOnPolygon}>Switch to Polygon Testnet</Button>
    </div>
}</div>
  );
};

export default PolygonButton;
