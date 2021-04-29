import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { QuizContext } from '../contexts/QuizContext';

const Question = ({question, answers, number}) => {
  let { userAnswers, setUserAnswers } = useContext(QuizContext);

  const handleOnAnswer = e => {
    userAnswers.push(e.target.value);
    setUserAnswers(userAnswers);
  };

  const answer = answers.map((a, i) => (
    <div key={i}>
      <input
        type='radio'
        id={a}
        value={a}
        name={number}
        onClick={handleOnAnswer}
      />
    <label htmlFor={a}>{a}</label>
    </div>
))

  return (
    <Card className="list-group-item">
      <Card.Body>
        <Card.Title className="orange">{question}</Card.Title>
        {answer}
      </Card.Body>
    </Card>
  );
};

export default Question;
