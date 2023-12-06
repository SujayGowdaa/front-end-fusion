/* eslint-disable react/prop-types */

import Button from './Button';

export default function AlertScreen({ dispatch, setDialog }) {
  return (
    <div className='container-modal'>
      <div className='content-modal'>
        <div className='container-content'>
          <h3 className='alert-title'>Hello Champ!</h3>
          <p className='alert-message'>
            Are you sure you want to end the quiz?
          </p>
        </div>
        <div className='container-btns-alert'>
          <Button
            className='btn-alert'
            bgColor='var(--danger)'
            outline='0.2rem solid var(--danger-secondary)'
            color='var(--background)'
            onClick={() => {
              dispatch({ type: 'finish' });
              setDialog(false);
            }}
          >
            Yes
          </Button>
          <Button
            className='btn-alert'
            bgColor='var(--dominant)'
            color='var(--background)'
            onClick={() => setDialog(false)}
          >
            No
          </Button>
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  );
}
