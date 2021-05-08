import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { LanguageContext } from '../contexts/LanguageContext';

const ValidationRequired = () => {
  let {isEnglish} = useContext(LanguageContext);

  return (
    <div>
      {isEnglish

      ?
      <Alert className="gray2" variant="secondary">
        Please validate your account so you can create and vote on proposals.  LINK TO QUIZ PAGE
      </Alert>
      :
      <Alert className="gray2" variant="secondary">
        ESP ESP ESP ESP ESP ESP ESP ESP ESP ESP ESP ESP
        Please validate your account so you can create and vote on proposals.  LINK TO QUIZ PAGE
      </Alert>
      }
    </div>
  );
};

export default ValidationRequired;
