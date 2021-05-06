import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Question from './Question';
import { quizQuestions } from '../quizQuestions/quizQuestions';
import { quizPreguntas } from '../quizQuestions/quizPreguntas';
import { QuizContext } from '../contexts/QuizContext';
import QuizFailureModal from '../modals/QuizFailureModal';
import QuizSuccessModal from '../modals/QuizSuccessModal';
import QuizAlreadySubmittedModal from '../modals/QuizAlreadySubmittedModal';
import IsLoadingModal from '../modals/IsLoadingModal';
import '../styles/Home.css';

const Quiz = () => {
  let [userAnswers, setUserAnswers] = useState([]);
  let [checkedAnswers, setCheckedAnswers] = useState([]);
  let [failureModalShow, setFailureModalShow] = useState(false);
  let [successModalShow, setSuccessModalShow] = useState(false);
  let [loadingModalShow, setLoadingModalShow] = useState(false);
  let [alreadySubmittedModal, setAlreadSubmittedModal] = useState(false);
  let [hasSubmitted, setHasSubmitted] = useState();

  const handleOnSubmitAnswers = async e => {
    e.preventDefault();
    if(!hasSubmitted) {
      setHasSubmitted(true);
      console.log(userAnswers);
      console.log(quizQuestions);
      for (let i = 0; i < quizQuestions.length; i++) {
        for (let j = 0; j < userAnswers.length; j++) {
          if (quizQuestions[i].correctAnswer.toString().toLowerCase().trim() === userAnswers[j].toString().toLowerCase().trim()) {
            setCheckedAnswers(checkedAnswers.push(quizQuestions[i].correctAnswer));
          };
        };
      };
      console.log(checkedAnswers);

      //Delay function is only for development
      const delay = () => new Promise(res => setTimeout(res, 2000));

      if(checkedAnswers.length === 10) {
        setLoadingModalShow(true);
        //Make network call to receive 100 tokens
        await delay();
        handleOnLoadingModal();

        console.log('length: ', checkedAnswers.length);
        setSuccessModalShow(true);
        setCheckedAnswers([]);
      } else if(checkedAnswers.length >= 8) {
        setLoadingModalShow(true);
        //Make network call to receive 80 tokens
        await delay();
        handleOnLoadingModal();

        console.log('length: ', checkedAnswers.length);
        setSuccessModalShow(true);
        setCheckedAnswers([]);
      } else if(checkedAnswers.length >= 6) {
        setLoadingModalShow(true);
        //Make network call to receive 20 tokens
        await delay();
        handleOnLoadingModal();

        console.log('length: ', checkedAnswers.length)
        setSuccessModalShow(true);
        setCheckedAnswers([]);
      } else {
        setLoadingModalShow(true);
        await delay();
        handleOnLoadingModal();

        console.log('length: ', checkedAnswers.length)
        setFailureModalShow(true);
        setCheckedAnswers([]);
      };
    } else {
      setAlreadSubmittedModal(true);
    };
  };
  const questions = quizQuestions.map((q, i) => (
    <Question 
      key={q.question.toString()}
      question={q.question}
      answers={q.answers}
      number={q.number}
    />
    ))
  const preguntas = quizPreguntas.map((q, i) => (
    <Question 
      key={q.question.toString()}
      question={q.question}
      answers={q.answers}
      number={q.number}
    />
    ))

  const handleOnFailure = () => {
    setFailureModalShow(false);
  };

  const handleOnSuccess = () => {
    setSuccessModalShow(false);
  };

  const handleOnAlreadySubmitted = () => {
    setAlreadSubmittedModal(false);
  };

  const handleOnLoadingModal = () => {
    setLoadingModalShow(false);
  };

  return (
    <div>
    {isEnglish ?
      <div className="App" >
        <div className="gray2">
        <text className="white">Quiz</text>
          <div>
            <QuizContext.Provider className="item" value={{userAnswers, setUserAnswers}}>
            <div>{questions}</div>
            </QuizContext.Provider>
          </div>
        </div>
        <Button className="Wallet" onSubmit={handleOnSubmitAnswers}>Submit your answers</Button>
        <QuizFailureModal
          show={failureModalShow}
          onHide={handleOnFailure}
        />
        <QuizSuccessModal
          show={successModalShow}
          onHide={handleOnSuccess}
        />
        <QuizAlreadySubmittedModal
          show={alreadySubmittedModal}
          onHide={handleOnAlreadySubmitted}
        />
        <IsLoadingModal
          show={loadingModalShow}
          onHide={handleOnLoadingModal}
        />
      </div>
    :
      <div className="App" >
        <div className="gray2">
        <text className="white">Validar que soy de Querétaro</text>
          <div>
            <QuizContext.Provider className="item" value={{userAnswers, setUserAnswers}}>
            <div>{preguntas}</div>
            </QuizContext.Provider>
          </div>
        </div>
        <Button className="Wallet" onSubmit={handleOnSubmitAnswers}>Verificar respuestas</Button>
        <QuizFailureModal
          show={failureModalShow}
          onHide={handleOnFailure}
        />
        <QuizSuccessModal
          show={successModalShow}
          onHide={handleOnSuccess}
        />
        <QuizAlreadySubmittedModal
          show={alreadySubmittedModal}
          onHide={handleOnAlreadySubmitted}
        />
        <IsLoadingModal
          show={loadingModalShow}
          onHide={handleOnLoadingModal}
        />
      </div>
    } 
  </div>
  );
};

export default Quiz;
