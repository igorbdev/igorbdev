import React, { useState } from "react";
import Modal from "react-modal";
import "./Certificados.styles.scss";

import CSSAvancado from "../../assets/CSSAvancado.png";
import HTMLCss from "../../assets/HTMLCss.png";
import Javascript from "../../assets/Javascript.png";
import CReact from "../../assets/CReact.png";
import Redux from "../../assets/Redux.png";
import UIDesign from "../../assets/UIDesign.png";
import WebDesign from "../../assets/WebDesign.png";
import pythonB from "../../assets/pythonB.png";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
  },
};

Modal.setAppElement("#root"); // Define o elemento raiz do seu aplicativo

const Certificados = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSelect, setImgSelect] = useState("");

  const openModal = (imagem) => {
    setImgSelect(imagem);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const arrayCertificados = [
    {
      nome: "React",
      imagem: CReact,
      link: "",
    },
    {
      nome: "Redux",
      imagem: Redux,
      link: "",
    },
    {
      nome: "JavaScript",
      imagem: Javascript,
      link: "",
    },
    {
      nome: "Css Avançado",
      imagem: CSSAvancado,
      link: "",
    },
    {
      nome: "UI Design",
      imagem: UIDesign,
      link: "",
    },
    {
      nome: "Web Design",
      imagem: WebDesign,
      link: "",
    },
    {
      nome: "HTML e Css",
      imagem: HTMLCss,
      link: "",
    },
  ];

  return (
    <div className="Certificados">
      <div className="center">
        <div className="container-title-sub">
          <div className="container-title">
            <p className="title">Certificados</p>
            <div className="line" />
          </div>
        </div>

        <div className="container-certificados">
          {arrayCertificados.map((item) => (
            <div className="imagens" onClick={() => openModal(item.imagem)}>
              <img src={item.imagem} alt={item.nome} />
              <p>{item.nome}</p>
            </div>
          ))}
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
  );
};

export default Certificados;
