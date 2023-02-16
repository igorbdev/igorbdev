import fotoSobre from '../../../assets/fotoSobre.jpg'
import Titulo from '../../Titulo/Titulo'
import './Sobre.css'
import react from '../../../assets/react-2.svg'
import redux from '../../../assets/redux.svg'
import typescript from '../../../assets/typescript.svg'
import javascript from '../../../assets/javascript.svg'
import logohtml from '../../../assets/html-1.svg'
import logocss from '../../../assets/css-3.svg'
import giticon from '../../../assets/git-icon.svg'
import scrum from '../../../assets/scrum.svg'
import wordpress from '../../../assets/wordpress.svg'

function Sobre() {
  const habilidadesList = [
    {
      logo: react,
      nome: 'React'
    },
    {
      logo: react,
      nome: 'React Native'
    },
    {
      logo: redux,
      nome: 'Redux'
    },
    {
      logo: typescript,
      nome: 'Typescript'
    },
    {
      logo: javascript,
      nome: 'Javascript'
    },
    {
      logo: logohtml,
      nome: 'HTML'
    },
    {
      logo: logocss,
      nome: 'CSS'
    },
    {
      logo: giticon,
      nome: 'Git'
    },
    {
      logo: scrum,
      nome: 'SCRUM'
    },
    {
      logo: wordpress,
      nome: 'WordPress'
    },
  ]


  return (
    <div className='sobre'>
        <Titulo titulo='Sobre' />

        <div className='container-sobre'>
          <div style={{maxWidth: '190px', maxHeight: '280px'}}>
            <img src={fotoSobre} alt="" />
          </div>
          <div className='container-sobre-conteudo'>
            <p>Olá eu sou o <span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'Permanent Marker'}}>Igor Bitencourt</span>!</p>
            <p>Graduado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Internacional (UNINTER) em março de 2022.</p>
            <p>Com sólidos conhecimentos em Desenvolvimento Web e Mobile, apaixonado por tecnologia e em constante aprendizado, com a especialidade em Front-End e começando a focar também em Back-End para me tornar um Desenvolvedor Full-Stack.</p>
            <div className='container-habilidades'>
              <h3 style={{fontSize: '18px', fontWeight: 'bold', fontFamily: 'Permanent Marker'}}>Habilidades:</h3>
              <div style={{display: 'flex', gap: '32px'}}>
                {habilidadesList.map(item => (
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '40px', height: '40px'}}><img src={item.logo} alt="" /></div>
                    <p style={{fontSize: '12px'}}>{item.nome}</p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          

        </div>
    </div>
  )
}

export default Sobre
