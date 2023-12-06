/* eslint-disable react/prop-types */
import { HiMiniSun, HiMiniMoon } from 'react-icons/hi2';

export default function Header({ theme, setTheme }) {
  function bgColorChange() {
    const color = theme === 'dark' ? '#100f1c' : '#ffffff';
    document.body.style.background = color;
  }
  bgColorChange();

  return (
    <header className='header'>
      <h1 className='title'>‖FrontEnd Fusion</h1>
      <div className='empty'></div>
      <div className='container-switch'>
        {theme === 'light' ? (
          <HiMiniMoon className='icon' />
        ) : (
          <HiMiniSun className='icon' />
        )}
        <div
          className='body-switch'
          onClick={() =>
            setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
          }
        >
          <div className={`switch ${theme}`}></div>
        </div>
      </div>
    </header>
  );
}
