/* eslint-disable react/prop-types */

export default function Button({
  children,
  className,
  onClick,
  disabled,
  bgColor,
  color = 'white',
  outline,
}) {
  return (
    <div className='container-btn'>
      <button
        style={{
          backgroundColor: bgColor,
          color: color,
          outline: outline,
        }}
        className={`btn ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
