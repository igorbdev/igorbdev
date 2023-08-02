import { useState, useEffect } from 'react'
import './Header.styles.scss'
import logoIgorbdev from './../../assets/logoIgorbdev.svg'
import classNames from 'classnames';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='Header' style={scrollPosition === 0 ? {display:'none'} : {display:'block'}}>
      <div className='container'>
        <div className='logo'>
          <img src={logoIgorbdev} alt="logo" />
        </div>
          <div className='menu'>
            <p>SOBRE</p>
            <p>CERTIFICADOS</p>
            <p>PROJETOS</p>
            <p>EXPERIÊNCIAS</p>
            <p>CONTATO</p>
          </div>
      </div>

      
    </div>
  )
}

export default Header