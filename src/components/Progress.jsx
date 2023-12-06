/* eslint-disable react/prop-types */

import Timer from './Timer';

export default function Progress({
  length,
  index,
  answer,
  timeRemaining,
  dispatch,
}) {
  const isAnswered = answer !== null;
  let completed;
  function fillProgress(index, length) {
    completed = (Number(isAnswered ? index + 1 : index) / Number(length)) * 100;
  }
  fillProgress(index, length);

  return (
    <div className='container-quiz-progress'>
      <h3>FRONTEND FUSION</h3>
      <div className='container-progress'>
        <span className='progress-title'>Question</span>
        <span className='main'>
          0{index + 1}
          <span className='sec'>/0{length}</span>
        </span>
      </div>
      <Timer timeRemaining={timeRemaining} dispatch={dispatch} />
      <div className='container-progress-bar'>
        <span className='progress-title' htmlFor='progress'>
          Progress
        </span>
        <div className={`progress-bar ${completed === 100 && 'full'}`}>
          <div
            className={`progress-bar-fill`}
            style={{ width: `${completed}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
