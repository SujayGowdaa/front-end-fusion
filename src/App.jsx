/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    topic: '',
    mode: '',
  });
  const [selected, setSelected] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <h1>FrontEnd Fusion</h1>
      <p>Challenge Yourself, Master the Frontend!</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h3>Select Topic</h3>
          <div
            className={`${selected === 'HTML' && 'active'}`}
            onClick={() => {
              setSelected('HTML');
              setInputs((ps) => ({ ...ps, topic: 'HTML' }));
            }}
          >
            HTML
          </div>
          <div
            className={`${selected === 'CSS' && 'active'}`}
            onClick={() => {
              setSelected('CSS');
              setInputs((ps) => ({ ...ps, topic: 'CSS' }));
            }}
          >
            CSS
          </div>
          <div
            className={`${selected === 'JS' && 'active'}`}
            onClick={() => {
              setSelected('JS');
              setInputs((ps) => ({ ...ps, topic: 'JS' }));
            }}
          >
            JS
          </div>
          <div
            className={`${selected === 'REACT' && 'active'}`}
            onClick={() => {
              setSelected('REACT');
              setInputs((ps) => ({ ...ps, topic: 'REACT' }));
            }}
          >
            React
          </div>
        </div>
        <div>
          <h3>Select Mode</h3>
          <input
            type='radio'
            id='easy'
            value='easy'
            name='mode'
            onChange={(e) =>
              setInputs((ps) => ({ ...ps, mode: e.target.value }))
            }
          />
          <label htmlFor='easy'>Easy</label>

          <input
            type='radio'
            id='medium'
            value='medium'
            name='mode'
            onChange={(e) => {
              return setInputs((ps) => ({ ...ps, mode: e.target.value }));
            }}
          />
          <label htmlFor='medium'>Medium</label>

          <input
            type='radio'
            id='hard'
            value='hard'
            name='mode'
            onChange={(e) => {
              setInputs((ps) => ({ ...ps, mode: e.target.value }));
            }}
          />
          <label htmlFor='hard'>Hard</label>
        </div>
        <button type='submit'>Let's Go</button>
      </form>
    </div>
  );
}

export default App;
