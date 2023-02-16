import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination} from "swiper";
import 'swiper/swiper-bundle.css'
import './NovoSwiper.css'

SwiperCore.use([Navigation, Pagination])



function NovoSwiper(images:[], effects:any) {
  return (
        <Swiper id='main' navigation pagination effect={effects}>
          {images.map((item: { nome: any; img: any; }) => (
            <SwiperSlide key={item.nome}>
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
  )
  }
export default NovoSwiper
