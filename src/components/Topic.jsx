/* eslint-disable react/prop-types */
import html from '../assets/topic_logos/html.jpg';
import css from '../assets/topic_logos/css.jpg';
import js from '../assets/topic_logos/js.jpg';
import react from '../assets/topic_logos/react.jpg';

export default function Topic({ topic, setInputs, selected, setSelected }) {
  return (
    <div
      className={`${selected === topic && 'active'} image-topic-container`}
      onClick={() => {
        setSelected(topic);
        setInputs((ps) => ({ ...ps, topic: topic }));
      }}
    >
      <img
        className='image-topic'
        src={
          (topic === 'HTML' && html) ||
          (topic === 'CSS' && css) ||
          (topic === 'JS' && js) ||
          (topic === 'REACT' && react)
        }
        alt=''
      />
    </div>
  );
}
