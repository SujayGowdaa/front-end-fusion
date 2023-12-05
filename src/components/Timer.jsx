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
  return (
    <div>
      {mins < 10 && 0}
      {mins}:{secs < 10 && 0}
      {secs}
    </div>
  );
}
