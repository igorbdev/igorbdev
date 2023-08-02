import React from 'react'
import './Banner.styles.scss'
import Typewriter from 'typewriter-effect';
import logoIgorbdev from './../../assets/logoIgorbdev.svg'
import Arrow from '../../assets/Arrow.jsx'
import SvgGitHub from '../../assets/SVGS/SvgGitHub';
import SvgLinkedin from '../../assets/SVGS/SvgLinkedin';
import SvgWhatsApp from '../../assets/SVGS/SvgWhatsApp';
import SvgYouTube from '../../assets/SVGS/SvgYouTube';

const Banner = () => {
  return (
    <div className='Banner'>
        <div className='banner-layer'>

            <div className='header'>
              <div className='container'>
                <div className='logo'><img src={logoIgorbdev} alt="logo" /></div>
                  <div className='menu'>
  
                </div>
              </div>
            </div>
            
            <div className='title'>
                <p className='title-name'>IGORBDEV</p>
                <p className='title-body fn_animated_text'>
                <Typewriter
                  options={{loop: true}}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Desenvolvedor Front-End")
                      .pauseFor(1000) // Pausa por 1 segundo após a primeira frase
                      .deleteAll() // Deleta a frase anterior
                      .typeString("Desenvolvedor Mobile") // Adiciona a segunda frase
                      .pauseFor(1000) // Pausa por 1 segundo após a segunda frase
                      .deleteAll() // Deleta a frase anterior novamente
                      .typeString("Desenvolvedor Web") // Adiciona a terceira frase
                      .pauseFor(1000) // Pausa por 1 segundo após a segunda frase
                      .deleteAll() // Deleta a frase anterior novamente
                      .start(); // Inicia o efeito de digitação
                  }}
                />
                </p>
                <div className='redes-buttons'>
                  <SvgGitHub/>
                  <SvgLinkedin />
                  <SvgWhatsApp />
                  <SvgYouTube />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner