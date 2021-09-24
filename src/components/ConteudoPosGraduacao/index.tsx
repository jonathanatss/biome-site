import Subtitulo from "@components/Subtitulo";
import Titulo from "@components/Titulo";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Variants } from "@utils/types";
import CaixaTexto from "@components/CaixaTexto";
import Editais from "@components/SlideE";

const ppgbioinfo=  {titulo:"Programa de Pós-Graduação em Bioinformática" ,img:"/img/ppgbioinfo.png", texto:"A Pós-Graduação em Bioinformática (PPg-Bioinfo) Trata-se de um programa multidisciplinar, que envolve professores e pesquisadores de diversas áreas de atuação. Conheça o nosso site Institucional."}
export default function ConteudoPosGraduacao(props) {
  return (
    <>
      <Container>
        <div style={{ minHeight: "800px", marginTop: "2em" }}>
          <Row>
            <Titulo title={"Pós-graduação"} color={"#164193"}/>
          </Row>
          
          {/*Caixa Editais*/}
          <Row >
            <Subtitulo variant={Variants.EDITAIS} />
            <Col xl={12}>
              <Row>
                <Col>
                <Editais status="novo" lista={"OI"}/>
                </Col>
                <Col>
                <Editais status="andamento" lista={"OI"}/>
                </Col>
                <Col>
                <Editais status="encerrado" lista={"OI"}/>
                </Col>
              </Row>
            </Col>

          </Row>
          <Row>
            <Subtitulo variant={Variants.PPGBIOINFO} />
            <CaixaTexto img={ppgbioinfo.img} texto={ppgbioinfo.texto} titulo={ppgbioinfo.titulo}/>
          </Row>
          <Row>
            <Subtitulo variant={Variants.SOBRE} />
          </Row>
          <Row>
            <Subtitulo variant={Variants.PUBLICACOES} />
          </Row>
        </div>
      </Container>
    </>
  );
}
