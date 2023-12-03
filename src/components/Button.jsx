/* eslint-disable react/prop-types */

export default function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
