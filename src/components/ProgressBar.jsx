/* eslint-disable react/prop-types */

export default function ProgressBar({ length, index, answer }) {
  const isAnswered = answer !== null;
  return (
    <div>
      <span>
        Question {index}/{length}
      </span>
      <label htmlFor='progress'>Progress</label>
      <progress
        id='progress'
        value={isAnswered ? index + 1 : index}
        max={length}
      ></progress>
    </div>
  );
}
