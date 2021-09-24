import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import SlideH from "@components/SlideH";
import SlideV from "@components/SlideV";
import { Variants } from "@utils/types";

const redesSociaisTeste = [
  {
    image: {
      url: "/uploads/twitter_icon_a1b1c70566.jpeg ",
    },
    title: "Twitter",
    url: "https://twitter.com/bioinfo_UFRN",
  },
  {
    image: {
      url: "/uploads/face_icon_98b968ac2d.jpeg",
    },
    title: "Facebook",
  },
  {
    image: {
      url: "/uploads/youtube_icon_1c156b5254.jpeg",
    },
    title: "Youtube",
    text: "Olá",
  },
];

const editaisTeste = [
  {
    image: {
      url: "/uploads/selecao_bolsisgta_07544c94a1.jpg",
    },
    title: "Editais",
  },
];

const ppgTeste = [
  {
    image: {
      url: "/uploads/selecao_bolsisgta_07544c94a1.jpg",
    },
    title: "Editais",
  },
  {
    image: {
      url: "/uploads/ppgbioinfo_e0437a366e.png",
    },
    title: "Sobre o programa",
  },
  {
    image: {
      url: "/uploads/artigo_5207c72910.webp",
    },
    title: "Publicações",
  },
];

export default function Conteudo(props) {
  const dados = props.dados;
  const eventos = props.eventos.events;
  //console.log(eventos.events);
  return (
    <>
      <Container>
        <div
          style={{ minHeight: "800px", marginTop: "2em", marginBottom: "2em" }}
        >
          <Row>
            <Col md={8} xs={12}>
              <Row>
                <Col style={{ marginTop: "2em" }} xs={12}>
                  <SlideH variant={Variants.NOTICIAS} dados={dados.articles} />
                </Col>

                <Col style={{ marginTop: "2em" }} xs={12}>
                  <SlideH variant={Variants.PPGBIOINFO} dados={ppgTeste} />
                </Col>

                <Col style={{ marginTop: "2em" }} xs={12}>
                  <SlideH
                    variant={Variants.REDESSOCIAIS}
                    dados={redesSociaisTeste}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row md={12}>
                <Col style={{ marginTop: "2.4em" }} xs={12}>
                  <SlideV variant={Variants.SERVICOS} items={dados.servicos} />
                </Col>

                <Col style={{ marginTop: "7.5em" }} xs={12}>
                  <SlideV variant={Variants.EVENTOS} items={eventos} />
                </Col>

                <Col style={{ marginTop: "7em" }} xs={12}>
                  <SlideV variant={Variants.TRANSCRICAOEMDIA} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
