import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import {
  Container,
  Opacity,
  Popup,
  MessagePopup,
  PopupImport,
  MessagePopupImport,
} from './styles';

import Logo from '../../assets/logo-novo-zenvia.svg';
import robot from '../../assets/robot.svg';
import close from '../../assets/IconColorclose.svg';
import closeWhite from '../../assets/ColorcloseWhite.svg';

const Modal: React.FC = () => {
  const [model, setModel] = useState('none');
  const [opacity, setOpacity] = useState('none');
  const [popup, setPopup] = useState('none');
  const [popup2, setPopup2] = useState('none');
  const [popup3, setPopup3] = useState('none');

  function checkTour() {
    if (document.cookie === 'done') {
      closeModel();
    } else {
      openModel();
    }
  }

  function openModel() {
    setModel('');
    setOpacity('');
  }

  function closeModel() {
    setModel('none');
    setOpacity('none');
    document.cookie = 'done';
  }

  function startTour() {
    closeModel();
    firstMesage();
    document.cookie = 'done';
  }

  function firstMesage() {
    setPopup('');
  }

  function closePopup() {
    setPopup('none');
    setPopup2('none');
    setPopup3('none');
  }

  function nextSecondMesage() {
    setPopup('none');
    secondMesage();
  }

  function secondMesage() {
    setPopup2('');
  }

  function nextThirdMesage() {
    setPopup2('none');
    thirdMesage();
  }

  function thirdMesage() {
    setPopup3('');
  }

  return (
    <>
      <Opacity className={opacity} />
      <Container className={model}>
        <button type="button" onClick={closeModel}>
          <img className="close" onLoad={checkTour} src={close} alt="close" />
        </button>

        <img src={robot} alt="robot" />
        <p className="mesage1">
          Olá, eu sou o Zen! Sou o responsável por lhe ensinar a utilizar a
          Plataforma da Zenvia.
        </p>
        <p className="mesage2">
          Nossa plataforma foi atualizada, e, com isso, novas funcionalidades
          foram criadas pensando especialmente em você: dono de pequeno negócio.
          E aí, vamos nessa?
        </p>
        <button className="tuor" type="button" onClick={startTour}>
          Iniciar tour
        </button>
      </Container>
      <Popup className={popup}>
        <img src={robot} alt="robot" />
        <MessagePopup>
          <button type="button" onClick={closePopup}>
            <img className="close" src={closeWhite} alt="close" />
          </button>
          <p className="mesage1">
            Aqui esta os dados de balanço do seu negócio, você pode acompanhar
            as entradas e saídas e saber como está a saúde da sua empresa.
          </p>
          <button type="button" onClick={nextSecondMesage}>
            <p className="actionNext">CONTINUAR</p>
          </button>
        </MessagePopup>
      </Popup>
      <PopupImport className={popup2}>
        <MessagePopupImport>
          <button type="button" onClick={closePopup}>
            <img className="close" src={closeWhite} alt="close" />
          </button>
          <p className="mesage1">Para inserir seus dados, clique em IMPORTAR</p>
          <button type="button" onClick={nextThirdMesage}>
            <p className="actionNext">CONTINUAR</p>
          </button>
        </MessagePopupImport>
        <img src={robot} alt="robot" />
      </PopupImport>
      <PopupImport className={popup3}>
        <MessagePopupImport>
          <button type="button" onClick={closePopup}>
            <img className="close" src={closeWhite} alt="close" />
          </button>
          <p className="mesage1">
            Ao finalizar o dia, clique em FECHAR CAIXA. Os números cadastrados
            receberam o balanço final do dia
          </p>
          <button type="button" onClick={closePopup}>
            <p className="actionNext">FINALIZAR</p>
          </button>
        </MessagePopupImport>
        <img src={robot} alt="robot" />
      </PopupImport>
    </>
  );
};

export default Modal;
