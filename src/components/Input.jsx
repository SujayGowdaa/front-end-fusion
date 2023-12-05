import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Input({ setInputs, id, value, name, inputs }) {
  const [input, setInput] = useState('');
  return (
    <div
      className='container-radio'
      onClick={() => setInputs((ps) => ({ ...ps, mode: input }))}
    >
      <input
        className={`radio ${inputs.mode === value ? 'checked' : ''}`}
        type='radio'
        id={id}
        value={value}
        name='mode'
        onChange={(e) => {
          setInput(e.target.value);
          setInputs((ps) => ({ ...ps, mode: e.target.value }));
        }}
      />
      <label className='label-radio' htmlFor={id}>
        {name}
      </label>
      <span></span>
    </div>
  );
}
