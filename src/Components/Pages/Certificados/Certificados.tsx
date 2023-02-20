import Titulo from "../../Titulo/Titulo"
import './Certificados.css'
import CSSAvancado from '../../../assets/CSSAvancado.png'
import HTMLCss from '../../../assets/HTMLCss.png'
import Javascript from '../../../assets/Javascript.png'
import CReact from '../../../assets/CReact.png'
import Redux from '../../../assets/Redux.png'
import UIDesign from '../../../assets/UIDesign.png'
import WebDesign from '../../../assets/WebDesign.png'
import pythonB from '../../../assets/pythonB.png'


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCards} from "swiper";
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-cards'

SwiperCore.use([Navigation, Pagination])


function Certificados() {
  return (
    <div className='certificado'>
        <Titulo titulo='Certificados' /> 

      <div className="container">
        <Swiper 
        className="container-swiper"
        id='main' 
        modules={[EffectCards]}
        effect='cards'
        >
          <div>
          <SwiperSlide className="container-slide"><img src={CReact} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={pythonB} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={Redux} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={Javascript} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={CSSAvancado} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={UIDesign} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={WebDesign} alt="" /></SwiperSlide>
          <SwiperSlide className="container-slide"><img src={HTMLCss} alt="" /></SwiperSlide>
          </div>
          
        </Swiper>
      </div>
        
    </div>
  )
}

export default Certificados
