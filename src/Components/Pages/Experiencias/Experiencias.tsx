import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCube} from "swiper";
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-cube'
import Edesoft from '../../../assets/logoedesoft.svg'
import empirica from '../../../assets/empirica.png'
import enablers from '../../../assets/enablers.png'

import './Experiencias.css'

function Experiencias() {

  return (
    <div className='titulo'>
        <div className="linhaComTexto">
          <span>Experiências</span>
        </div>

        <div className="container-Edesoft">
          <div className="edesoft-img"><img src={Edesoft} alt="" /></div>
          <div>
            <h2 className="edesoft-titulo">Desenvolvedor Front-End (PJ)</h2>
            <p style={{fontSize: '14px', fontWeight: 'bold'}}>Início: 12/2022 - Atualmente</p>
            <p>Atuando como Desenvolvedor Fron
              t-End na criação e manutenção de códigos em projetos de clientes.</p>
            <div className="empirica">
              <div className="edesoft-empirica"><img src={empirica} alt="" /></div>
              <p>Participação na criação do projeto do sistema de investimentos utilizando React, Typescript, Redux, AntDesign, SCRUM, Figma, Postman, Html, Css, Git e GitHub.</p>
            </div>
            <div className="enablers">
              <div className="edesoft-enablers"><img src={enablers} alt="" /></div>
              <p>Participação na criação do projeto de sistema mobile utilizando React Native, Typescript, Native Base, SCRUM, Figma e Git.  </p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Experiencias
