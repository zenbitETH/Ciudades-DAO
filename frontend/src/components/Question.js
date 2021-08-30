import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { QuizContext } from '../contexts/QuizContext';
import { LanguageContext } from '../contexts/LanguageContext';

const Question = ({question, answers, number}) => {
  let { userAnswers, setUserAnswers } = useContext(QuizContext);
  let [isEnglish] = useContext(LanguageContext);

  const handleOnAnswer = e => {
    userAnswers.push(e.target.value);
    setUserAnswers(userAnswers);
  };

  const answer = answers.map((a, i) => (
    <div class="container" key={i}>
      <input
        class="quiz-bg"
        type='radio'
        id={a}
        value={a}
        name={number}
        onClick={handleOnAnswer}>
      </input>
      <label class="checkmark" htmlFor={a}>{a}</label>
    </div>
))

  return (
    <div>
      {isEnglish === 'english' ?
      <Card className="question-card">
        <Card.Body className="main">
          <h2 class="jos">{question}</h2><br/>
          <div class="quiz-grid"> {answer} </div>
        </Card.Body>
      </Card>
      :
      <Card class="question-card">
      <Card.Body class="main">
        <Card.Title class="orange3">{question}</Card.Title>
        <div className="void-link">{answer}</div>
      </Card.Body>
    </Card>
    }
    </div>

  );
};

export default Question;
