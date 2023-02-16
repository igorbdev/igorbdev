import './Contato.css'
import mail from '../../../assets/mail.svg'
import phone from '../../../assets/phone.svg'
import linkedin from '../../../assets/linkedin.svg'
import github from '../../../assets/github.svg'
import youtube from '../../../assets/youtube.svg'
import Titulo from '../../Titulo/Titulo'
function Contato() {

  return (
    <div>
        <Titulo titulo='Contato' />

        <div className='container-contato'>
          

          <a href="https://wa.me/5511982755142">
          <div className='contato-item' >
            <div><img src={phone} alt="" /></div>
            <h5>Telefone</h5>
            <p>(11) 98275-5142</p>
          </div>
          </a>
          
          <a href="http://www.linkedin.com/in/igorbdev">
          <div className='contato-item'>
            <div><img src={linkedin} alt="" /></div>
            <h5>Linkedin</h5>
            <p>@igorbdev</p>
          </div>
          </a>
          
          <a href="https://www.youtube.com/@igorbdev">
          <div className='contato-item'>
            <div><img src={youtube} alt="" /></div>
            <h5>YouTube</h5>
            <p>@igorbdev</p>
          </div>
          </a>
          
          <a href="https://github.com/igorbdev">
          <div className='contato-item'>
            <div><img src={github} alt="" /></div>
            <h5>Github</h5>
            <p>@igorbdev</p>
          </div>
          </a>
          
          <a href="mailto:dev.igorb@gmail.com">
          <div className='contato-item'>
            <div><img src={mail} alt="" /></div>
            <h5>E-mail</h5>
            <p>dev.igorb@gmail.com</p>
          </div>
          </a>
          
        </div>
    </div>
  )
}

export default Contato
