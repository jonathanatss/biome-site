import React from "react";
import {
  Nav,
  Row,
  Col,
  Container,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

import style from "./style.module.css";
//import stylesass from './barra-acessibilidade.module.scss';

import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaMobile,
  FaSearch,
  FaAdjust,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTh,
  FaLaptop,
} from "react-icons/fa";

//Componentes da barra de busca
export const Search = () => {
  return (
    <form className={`pesquisa m-0 p-0`} action={`/noticiasPesquisa`}>
      <div className="input-group input-group-sm border border-dark border-1 rounded my-2">
        <input
          type="text"
          className="form-control border-0 shadow-none text-dark"
          placeholder="Buscar notícia"
          name="busca"
        />
        <button className="border border-0 rounded shadow-none">
          <FaSearch className="link-secondary" />
        </button>
      </div>
    </form>
  );
};

//Componente principal
export default function MenuSuperior(props, data) {
  return (
    <div className={`barra-acessibilidade d-none d-xl-block`}>
      <Container>
        <Row>
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className={`controles`}>
              <button className="btn fontsizeMinus">-A</button>
              <button className="btn fontsizeDefault">A</button>
              <button className="btn fontsizePlus">A+</button>
              <div className="adjust-contrast d-inline-block mx-2">
                <button className="btn adjust-contrast">
                  <FaAdjust />
                </button>
              </div>
              <a href="#">Acessibilidade</a>
            </div>

            <Search />

            <div className="links d-flex">
              <a
                href="//facebook.com/MetropoleDigital/"
                target="_blank"
                className="btn py-0 px-1"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="//instagram.com/metropoledigital/"
                target="_blank"
                className="btn py-0 px-1 ms-1"
              >
                <FaInstagram />
              </a>
              <a
                href="//linkedin.com/school/metropoledigital/"
                target="_blank"
                className="btn py-0 px-1 ms-1"
              >
                <FaLinkedin />
              </a>
              <a
                href="//twitter.com/metropoledigi"
                target="_blank"
                className="btn py-0 px-1 ms-1"
              >
                <FaTwitter />
              </a>
              <a
                href="//youtube.com/c/metropoledigital"
                target="_blank"
                className="btn py-0 px-1 ms-1"
              >
                <FaYoutube />
              </a>

              <span className="my-1 mx-4">|</span>

              <button
                type="button"
                className="btn py-0 px-1 me-1"
                data-bs-toggle="modal"
                title="Contato"
                data-bs-target="#contato"
              >
                <FaMobile />
              </button>
              <button
                type="button"
                className="btn py-0 px-1 me-1"
                data-bs-toggle="modal"
                title="Localização"
                data-bs-target="#localizacao"
              >
                <FaMapMarkerAlt />
              </button>
              <button
                type="button"
                className="btn py-0 px-1 me-1"
                id="reservas"
                data-bs-toggle="modal"
                title="Eventos"
                data-bs-target="#eventos"
              >
                <FaCalendarAlt />
              </button>
              <button
                type="button"
                className="btn py-0 px-1 me-1"
                data-bs-toggle="modal"
                title="Sistemas"
                data-bs-target="#sistemas"
              >
                <FaTh />
              </button>

              <a href="//acesso.imd.ufrn.br/acesso/" className="my-1 pe-3 ms-4">
                <FaLaptop />
                Acesso IMD
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
