/* eslint-disable react/prop-types */

export default function Topic({ topic, setInputs, selected, setSelected }) {
  return (
    <div
      className={`${selected === topic && 'active'}`}
      onClick={() => {
        setSelected(topic);
        setInputs((ps) => ({ ...ps, topic: topic }));
      }}
    >
      {topic}
    </div>
  );
}
