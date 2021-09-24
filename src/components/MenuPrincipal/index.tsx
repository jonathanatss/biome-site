import React from "react";
import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import style from "./style.module.css";
import Image from "next/image";
import imgUfrn from "@img/ufrn.svg";

import Link from "next/link";

export default function MenuPrincipal(props) {
  const [aboutIsOpen, updateAboutIsOpen] = useState(false);
  const [coreIsOpen, updateCoreIsOpen] = useState(false);
  const [ourIsOpen, updateOurIsOpen] = useState(false);
  const [outreachIsOpen, updateOutreachIsOpen] = useState(false);
  const [testIsOpen, updateTestIsOpen] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-solida navbar-expand-md">
        <Container>

        {/* Lado da logo */}
        <div className="lado-esquerdo">
          <div className="logo-instituicao ps-3">
            <a href="https://www.ufrn.br/">
              <Image src={imgUfrn} height={35} width={40} alt="UFRN/IMD"
                title="Ir para o portal da Universidade Federal do Rio Grande do Norte"/>
            </a>
          </div>
          <div className="logo-sistema" title="Acessar a página inicial">
            <a href="/" className="imd-sigla">BioME</a>
            <a href="/" className="imd-completo">Bioinformatics Multidisciplinary Environment</a>
          </div>
			</div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className={`mr-auto text_bold`}>
            <NavDropdown
              title="Institucional"
              id="institucional-nav-dropdown"
              onMouseEnter={() => updateAboutIsOpen(true)}
              onMouseLeave={() => updateAboutIsOpen(false)}
              onClick={() => updateAboutIsOpen(!aboutIsOpen)}
              show={aboutIsOpen}
            >
              <NavDropdown.Item href="/pessoas">Pessoas</NavDropdown.Item>
              <NavDropdown.Item href="/sobre">Sobre</NavDropdown.Item>
              <NavDropdown.Item href="/contato">Contato</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Desenvolvimento"
              id="desenvolvimento-nav-dropdown"
              onMouseEnter={() => updateCoreIsOpen(true)}
              onMouseLeave={() => updateCoreIsOpen(false)}
              onClick={() => updateCoreIsOpen(!coreIsOpen)}
              show={coreIsOpen}
            >
              <NavDropdown.Item href="/servicos">Serviços</NavDropdown.Item>
              <NavDropdown.Item href="/ferramentas">
                Ferramentas
              </NavDropdown.Item>
              <NavDropdown.Item href="/cursos">Cursos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Nosso Programa"
              id="nossoPrograma-nav-dropdown"
              onMouseEnter={() => updateOurIsOpen(true)}
              onMouseLeave={() => updateOurIsOpen(false)}
              onClick={() => updateOurIsOpen(!ourIsOpen)}
              show={ourIsOpen}
            >
              <NavDropdown.Item href="/posgraduacao">
                Pós-graduação
              </NavDropdown.Item>
              <NavDropdown.Item href="/publicacoes">
                Publicações
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Divulgação"
              id="divulgacao-nav-dropdown"
              onMouseEnter={() => updateOutreachIsOpen(true)}
              onMouseLeave={() => updateOutreachIsOpen(false)}
              onClick={() => updateOutreachIsOpen(!outreachIsOpen)}
              show={outreachIsOpen}
            >
              <NavDropdown.Item href="/noticias">Notícias</NavDropdown.Item>
              <NavDropdown.Item href="/eventos">Eventos</NavDropdown.Item>
              <NavDropdown.Item href="/editais">Editais</NavDropdown.Item>
              <NavDropdown.Item href="https://bioinfo.imd.ufrn.br/transcricaoemdia/">
                Transcrição em Dia
              </NavDropdown.Item>
              <NavDropdown.Item href="/pes">
                Certificado de Graduação - PES
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Parcerias"
              id="parcerias-nav-dropdown"
              onMouseEnter={() => updateTestIsOpen(true)}
              onMouseLeave={() => updateTestIsOpen(false)}
              onClick={() => updateTestIsOpen(!testIsOpen)}
              show={testIsOpen}
            >
              <NavDropdown.Item href="http://www.i2bio.org/">
                2Bio
              </NavDropdown.Item>
              <NavDropdown.Item href="https://inova.imd.ufrn.br/parque/inova/empresas/38">
                Duna
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  );
}
