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
import python from '../../../assets/python.svg'

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
      logo: python,
      nome: 'Python'
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
          <div className='container-sobre-img'>
            <img src={fotoSobre} alt="" />
          </div>
            <div className='container-sobre-conteudo'>
              <p>Olá eu sou o <span className='container-sobre-conteudo-span'>Igor Bitencourt</span>!</p>
              <p>Graduado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Internacional (UNINTER) em Março de 2022.</p>
              <p>Com sólidos conhecimentos em Desenvolvimento Web e Mobile, apaixonado por tecnologia e em constante aprendizado, com a especialidade em Front-End e começando a focar também em Back-End para me tornar um Desenvolvedor Full-Stack.</p>
              <div className='container-habilidades'>
                <h3>Habilidades:</h3>
                <div className='container-habilidades-map'>
                  {habilidadesList.map(item => (
                    <div className='container-habilidades-map-container'>
                      <div className='container-habilidades-map-div'><img src={item.logo} alt="" /></div>
                      <p className='container-habilidades-map-p'>{item.nome}</p>
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
