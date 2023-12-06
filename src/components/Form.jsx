/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Topic from './Topic';

export default function Form({ dispatch, highScore }) {
  const [selected, setSelected] = useState(null);
  const [inputs, setInputs] = useState({
    topic: '',
    mode: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'start', payload: { inputs, highScore } });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h3 className='title-tertiary'>Select Topic</h3>
        <div className='container-topic'>
          <Topic
            topic='HTML'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
          />
          <Topic
            topic='CSS'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
          />
          <Topic
            topic='JS'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
          />
          <Topic
            topic='REACT'
            setInputs={setInputs}
            setSelected={setSelected}
            selected={selected}
          />
        </div>
      </div>
      <div>
        <h3 className='title-tertiary'>Select Mode</h3>
        <div className='container-radios'>
          <Input
            id='EASY'
            value='EASY'
            name='Easy'
            setInputs={setInputs}
            inputs={inputs}
          />
          <Input
            id='MEDIUM'
            value='MEDIUM'
            name='Medium'
            inputs={inputs}
            setInputs={setInputs}
          />
          <Input
            id='HARD'
            value='HARD'
            name='Hard'
            setInputs={setInputs}
            inputs={inputs}
          />
        </div>
      </div>
      <Button
        bgColor='var(--dominant)'
        outline='6px solid var(--dominant-secondary)'
        type='submit'
        className='btn-shadow'
      >
        Let's Go
      </Button>
    </form>
  );
}
