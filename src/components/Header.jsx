/* eslint-disable react/prop-types */
import { HiMiniSun, HiMiniMoon } from 'react-icons/hi2';

export default function Header({ theme, setTheme }) {
  return (
    <header className='header'>
      <h1 className='title'>FrontEnd Fusion</h1>
      <div
        className='body-switch'
        onClick={() =>
          setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
        }
      >
        <div className={`switch ${theme}`}>
          {theme === 'light' ? (
            <HiMiniMoon className='icon' />
          ) : (
            <HiMiniSun className='icon' />
          )}
        </div>
      </div>
    </header>
  );
}
