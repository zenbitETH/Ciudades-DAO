import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';

const Leader = ({person}) => {
  let {isEnglish} = useContext(LanguageContext);

  return (
    <div>
      {isEnglish

      ?

      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{person}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Leader TARO</Card.Subtitle>
            <Card.Text>
              Stats about {person}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      :
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{person}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Lider TARO</Card.Subtitle>
            <Card.Text>
               Estadisticas sobre {person}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      }
    </div>
  );
};

export default Leader;