/* eslint-disable react/no-unknown-property */
/* eslint-disable no-case-declarations */
import { useReducer, useState } from 'react';
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
import FinishScreen from './components/FinishScreen';
import AlertScreen from './components/AlertScreen';
import { createPortal } from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';

const initialState = {
  questions: [],
  status: 'form',
  error: '',
  index: 0,
  points: 0,
  timeRemaining: undefined,
  highScore: 0,
  answer: null,
  length: undefined,
  prevGameHS: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      console.log(action.payload.highScore);
      if (action.payload.topic === '' && action.payload.mode === '') {
        return { ...state, error: 'Select Topic and Mode' };
      } else if (action.payload.topic === '') {
        return { ...state, error: 'Select Topic' };
      } else if (action.payload.mode === '') {
        return { ...state, error: 'Select Mode' };
      } else {
        if (
          action.payload.inputs.topic === 'HTML' &&
          action.payload.inputs.mode === 'EASY'
        )
          return {
            ...state,
            status: 'active',
            questions: htmlEasy,
            length: htmlEasy.length,
            timeRemaining: htmlEasy.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (action.payload.topic === 'HTML' && action.payload.mode === 'MEDIUM')
          return {
            ...state,
            status: 'active',
            questions: htmlMedium,
            length: htmlMedium.length,
            timeRemaining: htmlMedium.length * 15,
          };
        if (action.payload.topic === 'HTML' && action.payload.mode === 'HARD')
          return {
            ...state,
            status: 'active',
            questions: htmlHard,
            length: htmlHard.length,
            timeRemaining: htmlHard.length * 15,
          };
        if (action.payload.topic === 'CSS' && action.payload.mode === 'EASY')
          return {
            ...state,
            status: 'active',
            questions: cssEasy,
            length: cssEasy.length,
            timeRemaining: cssEasy.length * 15,
          };
        if (action.payload.topic === 'CSS' && action.payload.mode === 'MEDIUM')
          return {
            ...state,
            status: 'active',
            questions: cssMedium,
            length: cssMedium.length,
            timeRemaining: cssMedium.length * 15,
          };
        if (action.payload.topic === 'CSS' && action.payload.mode === 'HARD')
          return {
            ...state,
            status: 'active',
            questions: cssHard,
            length: cssHard.length,
            timeRemaining: cssHard.length * 15,
          };
        if (action.payload.topic === 'JS' && action.payload.mode === 'EASY')
          return {
            ...state,
            status: 'active',
            questions: jsEasy,
            length: jsEasy.length,
            timeRemaining: jsEasy.length * 15,
          };
        if (action.payload.topic === 'JS' && action.payload.mode === 'MEDIUM')
          return {
            ...state,
            status: 'active',
            questions: jsMedium,
            length: jsMedium.length,
            timeRemaining: jsMedium.length * 15,
          };
        if (action.payload.topic === 'JS' && action.payload.mode === 'HARD')
          return {
            ...state,
            status: 'active',
            questions: jsHard,
            length: jsHard.length,
            timeRemaining: jsHard.length * 15,
          };
        if (action.payload.topic === 'REACT' && action.payload.mode === 'EASY')
          return {
            ...state,
            status: 'active',
            questions: reactEasy,
            length: reactEasy.length,
            timeRemaining: reactEasy.length * 15,
          };
        if (
          action.payload.topic === 'REACT' &&
          action.payload.mode === 'MEDIUM'
        )
          return {
            ...state,
            status: 'active',
            questions: reactMedium,
            length: reactMedium.length,
            timeRemaining: reactMedium.length * 15,
          };
        if (action.payload.topic === 'REACT' && action.payload.mode === 'HARD')
          return {
            ...state,
            status: 'active',
            questions: reactHard,
            length: reactHard.length,
            timeRemaining: reactHard.length * 15,
          };
      }
      break;

    case 'new':
      const question = state.questions.at(state.index);
      return {
        ...state,
        points:
          question.correctAnswer === action.payload
            ? state.points + 1
            : state.points,
        answer: action.payload,
      };
    case 'runnng':
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 1 ? 'finish' : state.status,
        points: state.points,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'next':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'finish':
      return {
        ...state,
        status: 'finish',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'restart':
      return { ...state, ...initialState, highScore: state.highScore };
  }
}

function App() {
  // APP COMPONENT
  const [dialog, setDialog] = useState(false);
  const [theme, setTheme] = useState('light');
  const [
    {
      questions,
      error,
      index,
      status,
      answer,
      length,
      points,
      highScore,
      timeRemaining,
      prevGameHS,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className='app' theme={theme}>
      <div id='dialog'></div>
      {(status === 'form' || status === 'finish') && (
        <Header setTheme={setTheme} theme={theme} />
      )}
      <Main>
        {status === 'form' && (
          <>
            <h2 className='title-secondary'>
              Challenge Yourself, Master the Frontend!
            </h2>
            <Form
              dispatch={dispatch}
              highScore={highScore}
              prevGameHS={prevGameHS}
            />
          </>
        )}
        {error && <Error error={error} />}
        {status === 'active' && (
          <Questions
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
            length={length}
            index={index}
            timeRemaining={timeRemaining}
            setDialog={setDialog}
          />
        )}
        {status === 'finish' && (
          <FinishScreen
            dispatch={dispatch}
            points={points}
            highScore={highScore}
            length={length}
            timeRemaining={timeRemaining}
            prevGameHS={prevGameHS}
          />
        )}
        {dialog &&
          createPortal(
            <AlertScreen dispatch={dispatch} setDialog={setDialog} />,
            document.querySelector('#dialog')
          )}
      </Main>
    </div>
  );
}

export default App;
