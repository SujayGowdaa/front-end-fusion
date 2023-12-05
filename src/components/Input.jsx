/* eslint-disable react/prop-types */
export default function Input({ setInputs, id, value, name }) {
  return (
    <>
      <input
        type='radio'
        id={id}
        value={value}
        name='mode'
        onChange={(e) => setInputs((ps) => ({ ...ps, mode: e.target.value }))}
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
}
