import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from 'react-bootstrap';
import NewsForm from "@components/NewsForm";
import MapaSite from "@components/MapaSite";

import style from './style.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Container>
                <Row>
                    <Col
                    className="col-12 col-lg-8 py-3 py-lg-4 py-xxl-5 pe-lg-3 pe-xl-4 pe-xxl-5 lado-esquerdo"
                    >
                        <Row>
                        <MapaSite/>
                        </Row>
                        <Row className="my-4">
                            <Col className="col-4">
                                <Link href="https://sigaa.ufrn.br/sigaa/public/programa/portal.jsf?lc=pt_BR&id=9814">
                                    <a>
                                        <Image
                                            src="/img/iconsMapa/info.png"
                                            alt=""
                                            width="180px"
                                            height="65px"
                                        />
                                    </a>
                                </Link>
                            </Col>
                            <Col className="col-4">
                                <Link href="https://www.imd.ufrn.br/portal/">
                                    <a>
                                        <Image
                                            src="/img/iconsMapa/imd.png"
                                            alt=""
                                            width="180px"
                                            height="55px"
                                        />
                                    </a>
                                </Link> 
                            </Col> 
                            <Col className="col-4">
                            <Link href="https://www.ufrn.br/">
                                <a>
                                    <Image
                                        src="/img/iconsMapa/ufrn.png"
                                        alt=""
                                        width="180px"
                                        height="65px"
                                    />
                                </a>
                            </Link>
                            </Col>
                        </Row>
                        <Row className="row justify-content-between align-items-end">
                            <Col className="col-12 col-lg-6 text-center text-lg-start">
                                <p>
                                Administração Central
                                "Endereço: Av. Odilon Gomes de Lima, 1722. Capim Macio, 59078-400 Natal/RN - Brasil;
                                Acessoria de Comunicação:  bioinfo@imd.ufrn.br / biome@imd.ufrn.br;
                                Recepção: +55 (84) 99480-6818 / +55 (84) 3342-2216 - Ramal 123
                                </p>
                            </Col>  
                        </Row>

                    </Col>
                    <Col className="col-12 col-lg-4 py-3 py-lg-4 py-xxl-5 ps-lg-3 ps-xl-4 ps-xxl-5 lado-direito">
                        <Row id="form-newsletter" className="flex-column justify-content-between h-100">
                            <Col className="col-12">
                             <h3 className="mb-4">Receba nossas notícias</h3>
                             <form>
                                <input type="hidden" name="_csrf" value="9d220862-8ee9-4548-abf1-87bca676a2d0"/>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome"/>       
                                    <label>Nome</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome"/>       
                                    <label>E-mail</label>
                                </div>
                                <div className="g-recaptcha d-flex justify-content-center mb-3">
                                    <div className="button">
                                        <div>
                                        <iframe 
                                        title="recaptcha" 
                                        src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Le8jZEUAAAAALjIZ4ptxDae9Wxv6khoUGf_73BI&amp;co=aHR0cHM6Ly9sb25kcmVzLmltZC51ZnJuLmJyOjQ0Mw..&amp;hl=pt-BR&amp;v=wxAi4AKLXL2kBAvXqI4XLSWS&amp;size=normal&amp;cb=jfsf0ohidzji" 
                                        width="304" height="78" role="presentation" name="a-vfrsndbabu19" 
                                        scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
                                        </iframe>
                                        {/* <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea> */}
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-lg btn-light w-100 font-weight-bold">
                                    Inscrerver-se
                                </button>
                             </form>
                            </Col>
                            <Col className="col-12 redes-sociais">
                                <h4 className="my-4">
                                    Siga o BioME nas redes sociais
                                </h4>
                                <div className="d-flex justify-content-between">
                                    <a href="" className="btn py-0 px-1">
                                        <Image className="icons" src="/@img/iconsMapa/facebook-square.svg" width={20} height={15} />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

} 