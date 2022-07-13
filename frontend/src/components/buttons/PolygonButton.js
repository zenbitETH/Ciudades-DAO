import {Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import '../../styles/Home.css';


const PolygonButton = ({handleOnClick}) => {
  let [isEnglish] = useContext(LanguageContext);

  return (
    <div>
      <Button onClick={handleOnClick}>Cambiar a Polygon Testnet</Button>
    </div>
  );
};

export default PolygonButton;
