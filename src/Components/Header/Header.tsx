import './Header.css'
import foto from '../../assets/foto.png'
import { Link, NavLink } from 'react-router-dom'
import qrCode from '../../assets/qrCode.png'


function Home() {

  return (
    <div className="App">
      <div className='navegacao'>
        <div className='fotoNome'>
          <img src={foto} alt="foto de perfil" />
          <h1>Igor Bitencourt</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <div className='paginas'>
          <NavLink to='/' >Sobre</NavLink>
          <NavLink to='/Projetos' >Projetos</NavLink>
          <NavLink to='/Certificados' >Certificados</NavLink>
          <NavLink to='/Experiencias' >Experiências</NavLink>
          <NavLink to='/Contato'>Contato</NavLink>
        </div>
        <div className='qrcode'>
          <img src={qrCode} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
