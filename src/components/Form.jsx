/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Topic from './Topic';

export default function Form({ dispatch }) {
  const [selected, setSelected] = useState(null);
  const [inputs, setInputs] = useState({
    topic: '',
    mode: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'start', payload: inputs });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h3>Select Topic</h3>
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
      <div>
        <h3>Select Mode</h3>
        <Input id='EASY' value='EASY' name='Easy' setInputs={setInputs} />
        <Input id='MEDIUM' value='MEDIUM' name='Medium' setInputs={setInputs} />
        <Input id='HARD' value='HARD' name='Hard' setInputs={setInputs} />
      </div>
      <Button type='submit'>Let's Go</Button>
    </form>
  );
}
