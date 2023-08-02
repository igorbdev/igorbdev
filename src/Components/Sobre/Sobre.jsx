import React from 'react';
import './Sobre.styles.scss';
import Avatar from './../../assets/Avatar-Maker.png'
import Typewriter from 'typewriter-effect';

const Sobre = () => {
  return (
    <div className='Sobre'>
      <div className='Sobre-container'>

        <div className='Sobre-img-container'><img src={Avatar} alt="" /></div>

        <div className='Sobre-body-container'>
          <p className='Sobre-body-container-title'>Quem sou</p>
          <div className='Sobre-body-container-name-container'>
            <p className='Sobre-body-container-name'>Igor Bitencourt</p>
            <p className='title-body fn_animated_text Sobre-body-container-subname'>
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
            <div className='Sobre-line'/>
          </div>

          <div>
            <p className='Sobre-text'>Um desenvolvedor apaixonado por criar soluções inovadoras e funcionais. Com 3 anos de experiência, estou constantemente aprimorando minhas habilidades para enfrentar desafios complexos e contribuir para projetos bem-sucedidos.</p>
            <p className='Sobre-text'>Minha jornada começou com uma formação em Análise e Desenvolvimento de Sistemas e, desde então, tenho me concentrado em Front-End Web e Mobile. Tenho experiência sólida em JavaScript, TypeScript e React e estou sempre buscando aprender e me adaptar às tendências emergentes da indústria.</p>
            <p className='Sobre-text'>Durante minha carreira, trabalhei em diversos projetos emocionantes que me proporcionaram a oportunidade de colaborar com equipes talentosas. Um dos meus projetos notáveis inclui o sistema de compras de consórcios da Magazine Luiza, onde desempenhei um papel fundamental na surpevisão e orientação dos desenvolvedores da equipe e na construção do front-end utilizando React e React Native, resultando em um sistema robusto e otimizado para venda de consórcios.</p>
            <p className='Sobre-text'>Além das habilidades técnicas, sou reconhecido por minha habilidade de comunicação clara e eficaz, o que me permite colaborar de forma eficiente com os membros da equipe e os stakeholders. Tenho uma abordagem orientada para soluções, encontrando maneiras inovadoras de superar obstáculos e entregar produtos de alta qualidade dentro dos prazos estabelecidos.</p>
            <p className='Sobre-text'>Estou animado para fazer parte de projetos desafiadores que me permitam aplicar minha paixão pelo desenvolvimento de software e criar soluções que impactem positivamente a vida das pessoas. Vamos colaborar e criar algo incrível juntos!</p>
          </div>         
        </div>

      </div>
      
    </div>
  )
}

export default Sobre