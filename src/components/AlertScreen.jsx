/* eslint-disable react/prop-types */

import Button from './Button';

export default function AlertScreen({ dispatch, setDialog }) {
  return (
    <div className='container-dialog '>
      <h3>Are you sure you want to end the quiz?</h3>
      <Button
        bgColor='var(--danger)'
        color='var(--background)'
        onClick={() => {
          dispatch({ type: 'finish' });
          setDialog(false);
        }}
      >
        Yes
      </Button>
      <Button
        bgColor='var(--dominant-secondary)'
        color='var(--background)'
        onClick={() => setDialog(false)}
      >
        No
      </Button>
    </div>
  );
}
