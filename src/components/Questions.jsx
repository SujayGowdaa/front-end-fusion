/* eslint-disable react/prop-types */
import Button from './Button';
import Progress from './Progress';

export default function Questions({
  dispatch,
  questions,
  index,
  answer,
  length,
  setDialog,
  timeRemaining,
}) {
  const isAnswered = answer !== null;

  return (
    <>
      <div className='container-quiz'>
        <div className='container-quiz-qna'>
          <h2 className='question'>
            <span>0{index + 1}. </span>
            {questions.question}
          </h2>
          <div className='container-ans'>
            {questions.answers.map((ans, index) => (
              <Button
                key={ans}
                onClick={() => {
                  dispatch({ type: 'new', payload: index });
                }}
                disabled={isAnswered}
                className={`btn-ans ${
                  isAnswered
                    ? (answer === index &&
                        answer !== questions.correctAnswer &&
                        'wrong wrong-ans') ||
                      (questions.correctAnswer === index &&
                        'correct wrong-ans') ||
                      (answer === index &&
                        answer === questions.correctAnswer &&
                        'correct wrong-ans')
                    : ''
                }`}
              >
                {ans}
              </Button>
            ))}
          </div>
        </div>

        <Progress
          timeRemaining={timeRemaining}
          dispatch={dispatch}
          length={length}
          index={index}
          answer={answer}
        />
      </div>
      <div className='container-btns '>
        <Button className='btn-end btn-sec' onClick={() => setDialog(true)}>
          End
        </Button>
        {length === index + 1 ? (
          <Button
            className='btn-finish btn-sec'
            onClick={() => dispatch({ type: 'finish' })}
            disabled={!isAnswered}
          >
            Finish
          </Button>
        ) : (
          <Button
            className='btn-next btn-sec'
            onClick={() => dispatch({ type: 'next' })}
            disabled={!isAnswered}
          >
            Next
          </Button>
        )}
      </div>
    </>
  );
}
