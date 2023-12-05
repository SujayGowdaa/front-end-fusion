/* eslint-disable react/prop-types */
import Button from './Button';
import ProgressBar from './ProgressBar';
import Timer from './Timer';

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

  return (
    <>
      <ProgressBar length={length} index={index} answer={answer} />
      <h2>
        <span>{index + 1}.</span>
        {questions.question}
      </h2>
      <Timer timeRemaining={timeRemaining} dispatch={dispatch} />
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
