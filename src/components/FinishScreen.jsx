/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Button from './Button';

export default function FinishScreen({
  dispatch,
  highScore,
  points,
  length,
  timeRemaining,
}) {
  const convertedHS = highScore * 10;
  const convertedS = points * 10;
  const percentage = ((points / length) * 100).toFixed(2);
  const highestPer = ((highScore / length) * 100).toFixed(2);

  return (
    <>
      <div className='container-message'>
        {timeRemaining === 0 && (
          <span className='main-message'>
            » Time is Up! 😓<span className='sec-message'> Try again...</span>
          </span>
        )}
        {percentage > 90 && percentage >= 100 && (
          <span className='main-message'>» You are a Champion 🏆</span>
        )}
        {percentage > 80 && percentage <= 90 && (
          <span className='main-message'>» That's Impressive 🍾</span>
        )}
        {percentage > 60 && percentage <= 80 && (
          <span className='main-message'>» Good Job! 🙂</span>
        )}
        {percentage > 40 && percentage <= 60 && (
          <span className='main-message'>» You can do it Better! 😉</span>
        )}
        {percentage > 20 && percentage <= 40 && (
          <span className='main-message'>» Time to read more Books! 🤨</span>
        )}
        {percentage <= 20 && (
          <span className='main-message'>» That's Dissapointing 😓</span>
        )}
        {points > highScore && (
          <>
            <span className='main-message main-message-new'>
              <br /> » You have set the new High Score 🥳
            </span>
          </>
        )}
      </div>
      <div className='container-score'>
        <span className='sec-score'>
          Your Score:{' '}
          <span className='main-score'>
            {convertedS < Number(9) ? `0${convertedS} ` : ` ${convertedS}`}
          </span>
          <span className='sec-score'>
            {percentage < Number(9) ? `/0${percentage}` : ` / ${percentage}`}%
          </span>
        </span>
      </div>
      <div className='container-highscore'>
        <span className='main-hs'>
          <span className='sec-hs'>All time high:{` `}</span>
          {convertedHS < 9 ? `0${convertedHS}` : ` ${convertedHS}`}
          <span className='sec-hs'>
            {highestPer < 9 ? `/0${highestPer}` : ` / ${highestPer}`}%
          </span>
        </span>
      </div>
      <Button
        className='btn-shadow btn-challenge'
        bgColor='var(--dominant)'
        outline='6px solid var(--dominant-secondary)'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Challenge Again
      </Button>
    </>
  );
}
