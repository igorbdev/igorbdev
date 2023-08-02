import React, {useEffect, useRef, useState} from 'react'
import './Projetos.styles.scss'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { register } from 'swiper/element/bundle';
import Modal from "react-modal";

register();

import imgMiniApp from '../../assets/imgProjects/MiniApp.png'
import imgAppVendas from '../../assets/imgProjects/AppVendas.png'
import imgEnablers from '../../assets/imgProjects/Enablers.png'
import imgEmpirica from '../../assets/imgProjects/Empirica.png'
import imgDogs from '../../assets/imgProjects/Dogs.png'
import SvgLink from '../../assets/SVGS/SvgLink';

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  },
  content: {
    width: "75%",
    height: "75%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: "4px",
    outline: "none",
    marginTop: 48,
    position: "absolute",
    zIndex: 100,
  },
};

Modal.setAppElement("#root"); // Define o elemento raiz do seu aplicativo

const Projetos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSelect, setImgSelect] = useState("");

  const openModal = (imagem) => {
    setImgSelect(imagem);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

    const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  const dataProjetos = [
    {
        nomeProj: 'Mini App Consórcio Magalu',
        imgProj: imgMiniApp,
        descProj: 'Sistema de auto compra de consórcios da Magazine Luiza',
        sobreProj: 'Tive uma grande participação nesse projeto, liderando a equipe de desenvolvimento e desenvolvendo o Front-End desde o ínicio do projeto. É um projeto PWA para ser utilizado tanto em Web quanto Mobile, desenvolvido em React com TypeScript, seguindo todos os eventos do SCRUM, utilizando o Azure Devops para realização das tarefas, participei brevemente do Back-End onde utilizamos NodeJs.',
        link: ''
      },
    {
        nomeProj: 'App Vendas Magalu',
        imgProj: imgAppVendas,
        descProj: 'Sistema para venda de consórcios da Magazine Luiza',
        sobreProj: 'Como principal desenvolvedor e líder da equipe de desenvolvimento, participei desde a criação das telas até a entrega do projeto, participando das revisões com o cliente, apresentando as novas funcionalidades. O sistema é um aplicativo Android e iOS desenvolvido em React Native com TypeScript no Front-End, onde atuei a maior parte do tempo, e Nodejs no Back-End, onde tive pouca participação em relação ao código. Utilizamos SCRUM e Azure DevOps como ferramentas para um desenvolvimento mais eficaz.',
        link: ''
      },
    {
      nomeProj: 'Stellantis Tool-Control',
      imgProj: imgEnablers,
      descProj: 'Sistema de inventário de ferramentas para as montadoras',
      sobreProj: 'Stellantis é um grupo automotivo multinacional da Fiat Chrysler Automobiles com a montadora francesa PSA Group. Esse projeto é um sistema de inventário onde é possivel atravéz de QrCode e localização, ter o controle de onde estão as ferramentas usadas nas diversas montadoras. Participei como Desenvolvedor Front-End criando as telas em React Native com TypeScript com base nos protótipos do figma e Integrando o Front-End com o Back-End. É um projeto PWA onde é possível usar o sistema tanto mobile via APP quanto web via browser.',
      link: ''
    },
    {
      nomeProj: 'Empírica Investimentos',
      imgProj: imgEmpirica,
      descProj: 'Sistema de investimentos Empírica',
      sobreProj: 'Sistema de fundos de investimentos como Fundo Multimercado, FIDC, Fundos no Exterior, Fundos Imobiliários e Serviços. Participei da equipe de desenvolvimento Front-End usando React com TypeScript criando as telas e integrando o Front-End com o Back-End.',
      link: ''
    },
    {
      nomeProj: 'Dogs - Rede social para cachorros',
      imgProj: imgDogs,
      descProj: 'Projeto do curso de React',
      sobreProj: 'Projeto desenvolvido no curso de React utilizando React com JavaScript, React Router, useContext, PropTypes, Componentes Funcionais, Hooks, entre outros.',
      link: 'https://igorbdev.github.io/dogs/'
    }
  ]

  return (
    <div className='Projetos'>
        <div className="center">
            <div className="container-title-sub">
            <div className="container-title">
                <p className="title">Projetos</p>
                <div className="line" />
            </div>
            </div>

            <div className='container-swapper'>
            <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
            pagination="true"
            > 
            {dataProjetos.map(item => (
                <swiper-slide>
                  <div className='swapper-slide'>
                    <div className='swapper-slide-p'>
                      <p className='swipper-slide-name'>{item.nomeProj}</p>
                    <div className="line2" />
                      <p className='swipper-slide-sub-name'>{item.descProj} - {item.link != '' && <a className='button-link' href="https://igorbdev.github.io/dogs/" target="_blank" rel="noopener noreferrer"><SvgLink /></a>}</p>
                      <p className='swipper-slide-info'>{item.sobreProj}</p>
                    </div>
                    <div className='swapper-slide-img' onClick={() => openModal(item.imgProj)}><img src={item.imgProj} alt={item.nomeProj} /></div>
                  </div>
            </swiper-slide>
            ))}
            </swiper-container>
            </div>
        </div>
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Exemplo de Pop-up"
      >
        <img
          src={imgSelect}
          alt="Imagem"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div
          onClick={closeModal}
          className="Certificado-fechar"
          style={{ position: "absolute", top: 30, right: 30, padding: 10 }}
        >
          <p
            style={{ color: "#ccc", fontFamily: "Heebo", fontSize: "1.125rem" }}
          >
            X
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default Projetos