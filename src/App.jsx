import { useReducer } from 'react';
import Form from './components/Form';
import Questions from './components/Questions';
import Error from './components/Error';
import htmlEasy from './data//html/easy.json';
import htmlMedium from './data//html/medium.json';
import htmlHard from './data//html/hard.json';
import cssEasy from './data//css/easy.json';
import cssMedium from './data//css/medium.json';
import cssHard from './data//css/hard.json';
import jsEasy from './data//js/easy.json';
import jsMedium from './data//js/medium.json';
import jsHard from './data//js/hard.json';
import reactEasy from './data//react/easy.json';
import reactMedium from './data//react/medium.json';
import reactHard from './data//react/hard.json';

const initialState = {
  questions: [],
  status: 'form', //  start, error, active, finished
  error: '',
  index: 0,
};

function reducer(state, { type, payload: { mode, topic } }) {
  switch (type) {
    case 'start':
      if (topic === '' && mode === '') {
        return { ...state, error: 'Select Topic and Mode' };
      } else if (topic === '') {
        return { ...state, error: 'Select Topic' };
      } else if (mode === '') {
        return { ...state, error: 'Select Mode' };
      } else {
        if (topic === 'HTML' && mode === 'EASY')
          return { ...state, status: 'active', questions: htmlEasy };
        if (topic === 'HTML' && mode === 'MEDIUM')
          return { ...state, status: 'active', questions: htmlMedium };
        if (topic === 'HTML' && mode === 'HARD')
          return { ...state, status: 'active', questions: htmlHard };
        if (topic === 'CSS' && mode === 'EASY')
          return { ...state, status: 'active', questions: cssEasy };
        if (topic === 'CSS' && mode === 'MEDIUM')
          return { ...state, status: 'active', questions: cssMedium };
        if (topic === 'CSS' && mode === 'HARD')
          return { ...state, status: 'active', questions: cssHard };
        if (topic === 'JS' && mode === 'EASY')
          return { ...state, status: 'active', questions: jsEasy };
        if (topic === 'JS' && mode === 'MEDIUM')
          return { ...state, status: 'active', questions: jsMedium };
        if (topic === 'JS' && mode === 'HARD')
          return { ...state, status: 'active', questions: jsHard };
        if (topic === 'REACT' && mode === 'EASY')
          return { ...state, status: 'active', questions: reactEasy };
        if (topic === 'REACT' && mode === 'MEDIUM')
          return { ...state, status: 'active', questions: reactMedium };
        if (topic === 'REACT' && mode === 'HARD')
          return { ...state, status: 'active', questions: reactHard };
      }
  }
}
function App() {
  const [{ questions, error, status }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>FrontEnd Fusion</h1>
      <p>Challenge Yourself, Master the Frontend!</p>
      {status === 'form' && <Form dispatch={dispatch} />}
      {error && <Error error={error} />}
      {status === 'active' && <Questions questions={questions} />}
    </div>
  );
}

export default App;
