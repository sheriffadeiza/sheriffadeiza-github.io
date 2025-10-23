import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'
import { useContext } from 'react'


const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
  return (
  <div
  className={`toggle ${darkMode ? 'dark' : ''}`}
  onClick={handleClick}
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '3px solid white',
    borderRadius: '1rem',
    padding: '3px',
    cursor: 'pointer',
    position: 'relative',
    width: '3rem',
    height: '1.5rem',
    background: 'transparent'
  }}
>
  <Moon />
  <Sun />
  <div
    className="t-button"
    style={{
      borderRadius: '50%',
      background: 'black',
      position: 'absolute',
      width: '1rem',
      height: '1rem',
      left: darkMode ? 'calc(100% - 1rem - 3px)' : '3px',
      transition: 'all 0.3s ease'
    }}
  ></div>
</div>

  )
}

export default Toggle