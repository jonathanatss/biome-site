import React from "react";
import { Col, Row, Nav } from "react-bootstrap";
import style from "./style.module.css";

export default function MapaSite() {
  return (
    <Row>
      <Col className="col-4 col-xl-2 py-2">
        <div className="menu-desktop">
            <h5>Institucional</h5>
            <ul>
                <li>
                    <a href="/pessoas"> Pessoas </a>
                </li>       
                <li>
                  <a href="/sobre"> sobre </a> 
                </li>
                <li>
                  <a href="/contato"> Contato </a>
                </li>    
            </ul>
        </div>
      </Col>

      <Col className="col-4 col-xl-2 py-2">
        <div className="menu-desktop">
            <h5>Desenvolvimento</h5>
            <ul>
                <li>
                    <a href="/servicos"> Serviços </a>
                </li>       
                <li>
                  <a href="/ferramentas"> Ferramentas </a> 
                </li>
                <li>
                  <a href="/cursos"> Cursos </a>
                </li>    
            </ul>
        </div>
      </Col>

      <Col className="col-4 col-xl-2 py-2">
        <div className="menu-desktop">
            <h5>Nosso Programa</h5>
            <ul>
                <li>
                    <a href="/posgraduacao"> Pós-graduação </a>
                </li>       
                <li>
                  <a href="/publicacoes"> Publicações </a> 
                </li>    
            </ul>
        </div>
      </Col>

      <Col className="col-4 col-xl-2 py-2">
        <div className="menu-desktop">
            <h5>Divulgação</h5>
            <ul>
                <li>
                    <a href="/noticias"> Notícias </a>
                </li>       
                <li>
                  <a href="/eventos"> Eventos </a> 
                </li>
                <li>
                    <a href="/editais"> Editais </a>
                </li>       
                <li>
                  <a href="/https://bioinfo.imd.ufrn.br/transcricaoemdia/"> Transcrição em Dia </a> 
                </li>      
                <li>
                  <a href="/pes"> Certificado de Graduação - PES </a> 
                </li>    
            </ul>
        </div>
      </Col>

      <Col className="col-4 col-xl-2 py-2">
        <div className="menu-desktop">
            <h5>Parcerias</h5>
            <ul>
                <li>
                    <a href="/http://www.i2bio.org/"> 2Bio </a>
                </li>       
                <li>
                  <a href="/https://inova.imd.ufrn.br/parque/inova/empresas/38"> Duna </a> 
                </li>    
            </ul>
        </div>
      </Col>
  </Row>
    // <Row>
    //   <Col className={style.col_}>
    //     <div className={style.div_}>
    //       <h1 className={style.title_}>Institucional</h1>
    //       <Nav defaultActiveKey="/home" className="flex-column">
    //         <Nav.Link className={style.nav_link} href="/pessoas">
    //           Pessoas
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/historia">
    //           História
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/contato">
    //           Contato
    //         </Nav.Link>
    //       </Nav>
    //     </div>
    //   </Col>
    //   <Col className={style.col_}>
    //     <div className={style.div_}>
    //       <h1 className={style.title_}>Desenvolvimento</h1>
    //       <Nav defaultActiveKey="/home" className="flex-column">
    //         <Nav.Link className={style.nav_link} href="/servicos">
    //           Serviços
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/ferramentas">
    //           Ferramentas
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/cursos">
    //           Cursos
    //         </Nav.Link>
    //       </Nav>
    //     </div>
    //   </Col>
    //   <Col className={style.col_}>
    //     <div className={style.div_}>
    //       <h1 className={style.title_}>Nosso Programa</h1>
    //       <Nav defaultActiveKey="/home" className="flex-column">
    //         <Nav.Link className={style.nav_link} href="/posgraduacao">
    //           Pós-graduação
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/publicacoes">
    //           Publicações
    //         </Nav.Link>
    //       </Nav>
    //     </div>
    //   </Col>
    //   <Col className={style.col_}>
    //     <div className={style.div_}>
    //       <h1 className={style.title_}>Divulgação</h1>
    //       <Nav defaultActiveKey="/home" className="flex-column">
    //         <Nav.Link className={style.nav_link} href="/noticias">
    //           Notícias
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/eventos">
    //           Eventos
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/editais">
    //           Editais
    //         </Nav.Link>
    //         <Nav.Link
    //           className={style.nav_link}
    //           href="https://bioinfo.imd.ufrn.br/transcricaoemdia/"
    //         >
    //           Transcrição em Dia
    //         </Nav.Link>
    //         <Nav.Link className={style.nav_link} href="/pes">
    //           Certificado de Graduação - PES
    //         </Nav.Link>
    //       </Nav>
    //     </div>
    //   </Col>
    //   <Col className={style.col_}>
    //     <div className={style.div_}>
    //       <h1 className={style.title_}>Parcerias</h1>
    //       <Nav defaultActiveKey="/home" className="flex-column">
    //         <Nav.Link className={style.nav_link} href="http://www.i2bio.org/">
    //           2Bio
    //         </Nav.Link>
    //         <Nav.Link
    //           className={style.nav_link}
    //           href="https://inova.imd.ufrn.br/parque/inova/empresas/38"
    //         >
    //           Duna
    //         </Nav.Link>
    //       </Nav>
    //     </div>
    //   </Col>
    // </Row>
  );
}
