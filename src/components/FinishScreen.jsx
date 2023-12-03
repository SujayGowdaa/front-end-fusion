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
    <div>
      <h3>{`Your Score ${convertedS} ${percentage}%`}</h3>
      {timeRemaining === 0 && <h4>Time is Up</h4>}
      <p>{`All time high ${convertedHS} ${highestPer}%`} </p>
      <Button onClick={() => dispatch({ type: 'restart' })}>
        Challenge Again
      </Button>
    </div>
  );
}
