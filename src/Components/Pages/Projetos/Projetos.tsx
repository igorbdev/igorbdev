import AnimaisFantasticos from '../../../assets/AnimaisFantasticos.png'
import BikCraft from '../../../assets/BikCraft.png'
import BikCraft2 from '../../../assets/BikCraft2.png'
import Brafe from '../../../assets/Brafe.png'
import Dogs from '../../../assets/Dogs.png'
import MiniDogs from '../../../assets/MiniDogs.png'
import SurfBot from '../../../assets/SurfBot.png'
import Titulo from '../../Titulo/Titulo'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCards } from "swiper";
import './Projetos.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


SwiperCore.use([Navigation, Pagination])


function Projetos() {
  const images =[
    {
      nome: 'Animais Fantásticos',
      img: AnimaisFantasticos,
      url: 'https://igorbitencourt.github.io/animais-fantasticos/',
      descricao: 'Projeto em Javascript utilizando: Objetos, String, Arrays, Promises, Fetch, RegExp, NPM e Git, feito no curso de JavaScript',
    },
    {
      nome: 'BikCraft',
      img: BikCraft,
      url: 'https://igorbitencourt.github.io/bikcraft/',
      descricao: 'Projeto em HTML e Css utilizando: JavaScript, Git, Css Grid, Css FlexBox e Layout Responsivo, feito no curso de HTML e Css',
    },
    {
      nome: 'BikCraft2',
      img: BikCraft2,
      url: 'https://igorbitencourt.github.io/bikcraft2/',
      descricao: 'Projeto em JavaScript utilizando: HTML, UX Design, CSS, SEO, Tipografia, Grid, Otimização, e Analytics, feito no curso de Web Design',
    },
    {
      nome: 'Brafé',
      img: Brafe,
      url: 'https://igorbitencourt.github.io/brafe/',
      descricao: 'Projeto em HTML e Css utilizando: Flexbox, Bootstrap e Grid, feito no curso de Css Avançado',
    },
    {
      nome: 'Dogs',
      img: Dogs,
      url: 'https://igorbitencourt.github.io/dogs/',
      descricao: 'Projeto em React utilizando: Javascript, Hooks, React Router, useContext, CSS Modules, PropTypes, feito no curso de React',
    },
    {
      nome: 'Mini Dogs',
      img: MiniDogs,
      url: 'https://igorbitencourt.github.io/redux/',
      descricao: 'Projeto em React utilizando: Redux, Store, Actions, Dispatch, Hooks e Javascript, feito no curso de Redux',
    },
    {
      nome: 'SurfBot',
      img: SurfBot,
      url: 'https://www.figma.com/file/TJogv2BO7mstB9hYETSYBZ/surfbot',
      descricao: 'Projeto no Figma utilizando: Tipografia, UI Design, Grid, Cores, Componentes, Domine, feito no curso de UI Design Avançado',
    }
  ]


  return (
    <div className='projeto'>
        <Titulo titulo='Projetos' />  

        <div className="container">
        <Swiper 
        className='swiper-container'
        id='main' 
        navigation 
        pagination 
        grabCursor
        >
          {images.map(item => (
            <SwiperSlide key={item.nome}>
              <a className='nomeA' href={item.url}><h3 className='nome'>{item.nome}</h3></a>
              <p className='descricao'>{item.descricao}</p>
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
  }
export default Projetos
