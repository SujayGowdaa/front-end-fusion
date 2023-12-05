/* eslint-disable react/prop-types */

import Button from './Button';

export default function AlertScreen({ dispatch, setDialog }) {
  return (
    <div>
      <h3>Are you sure you want to end the quiz?</h3>
      <Button
        onClick={() => {
          dispatch({ type: 'finish' });
          setDialog(false);
        }}
      >
        Yes
      </Button>
      <Button onClick={() => setDialog(false)}>No</Button>
    </div>
  );
}
