/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Button from './Button';
import ProgressBar from './ProgressBar';

export default function Questions({
  dispatch,
  questions,
  index,
  answer,
  length,
  timeRemaining,
  setDialog,
}) {
  const isAnswered = answer !== null;

  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch({ type: 'runnng' });
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [dispatch]);

  return (
    <>
      <ProgressBar length={length} index={index} answer={answer} />
      <h3>{questions.question}</h3>
      <p>{timeRemaining}</p>
      {questions.answers.map((ans, index) => (
        <div key={ans}>
          <Button
            onClick={() => {
              dispatch({ type: 'new', payload: index });
            }}
            disabled={isAnswered}
            className={`${
              isAnswered
                ? questions.correctAnswer === index
                  ? 'correct'
                  : 'selected'
                : ''
            } ${answer === index && 'blue'} ${
              answer === questions.correctAnswer &&
              questions.correctAnswer === index &&
              'orange'
            }`}
          >
            {ans}
          </Button>
        </div>
      ))}
      <Button onClick={() => setDialog(true)}>End</Button>
      {length === index + 1 ? (
        <Button
          onClick={() => dispatch({ type: 'finish' })}
          disabled={!isAnswered}
        >
          Finish
        </Button>
      ) : (
        <Button
          onClick={() => dispatch({ type: 'next' })}
          disabled={!isAnswered}
        >
          Next
        </Button>
      )}
    </>
  );
}
