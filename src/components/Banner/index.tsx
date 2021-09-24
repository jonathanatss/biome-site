import React from "react";

import { Carousel, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import style from './style.module.css';

import imgLeft from "@img/biome.png";

//items dos Slides
const carouselItemsBanner = [
  {
    title: " Centro Multiusuário de Bioinformática",
    subtitle:
      "BioME é uma iniciativa de bioinformática criada em 2016 na UFRN, Natal - Brasil. Tendo como intuito de oferecer serviços às comunidades acadêmica e industrial do país.",
    imgLeft: "/img/banner/logo.png",
    imgBackground: "/img/banner/fundo1.gif",
  },
  {
    title: "Centro Multiusuário de Bioinformática",
    subtitle:
      " BioME é uma iniciativa de bioinformática criada em 2016 na UFRN, Natal - Brasil. Tendo como intuito de oferecer serviços às comunidades acadêmica e industrial do país.",
    imgLeft: "/img/banner/logo.png",
    imgBackground: "/img/banner/fundo2.jpg",
  },
  {
    title: "Centro Multiusuário de Bioinformática",
    subtitle:
      " BioME é uma iniciativa de bioinformática criada em 2016 na UFRN, Natal - Brasil. Tendo como intuito de oferecer serviços às comunidades acadêmica e industrial do país.",
    imgLeft: "/img/banner/logo.png",
    imgBackground: "/img/banner/fundo3.jpg",
  },
];

export default function Banner(props) {
  return (
    <Carousel prevLabel="" nextLabel="" style={{ maxHeight: "50vh" }}>
      {carouselItemsBanner.map((item, i) => {
        return (
          <Carousel.Item key={i}>
            <img 
              className={`d-block w-100 ${style.img_background}`}
              src={item.imgBackground}
              alt={item.title}
            />
            <Carousel.Caption className={style.carousel_caption}>
              <Container>
                <Row>
                  <Col md={4} sm={12} xs={12}>
                    <Image
                     src={imgLeft}
                     className="d-block"
                     alt=''
                       />
                  </Col>
                  <Col md={8} sm={12} xs={12} className="align-middle">
                    <div className={style.text_banner}>
                      <h1 className={style.title_banner}>{item.title}</h1>
                      <h2 className={style.subtitle_banner}>{item.subtitle}</h2>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
