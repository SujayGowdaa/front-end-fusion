/* eslint-disable react/prop-types */
import { useEffect } from 'react';

export default function Timer({ dispatch, timeRemaining }) {
  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch({ type: 'runnng' });
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [dispatch]);

  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  const alert = timeRemaining < 60;

  return (
    <div className='container-progress'>
      <span className='progress-title timing'>Time Remaining</span>
      <span>
        <span className={`main ${alert && 'alert-main'}`}>
          {mins < 10 && 0}
          {mins}
        </span>

        <span className={`sec ${alert && 'alert-sec'}`}>
          :{secs < 10 && 0}
          {secs}
        </span>
      </span>
    </div>
  );
}
