import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import ItemCardH from "@components/ItemCardH";
import Subtitulo from "@components/Subtitulo";
import { Variants, values } from "@utils/types";

type SlideHProps = {
  dados?: Array<any>;
  variant: Variants;
};

export default function SlideH({ dados, variant }: SlideHProps) {
  const staticData = values[variant];
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Link href="/noticias" passHref>
              <Subtitulo variant={variant} />
            </Link>
          </Col>
          {dados ? (
            <>
              {dados.map((item, i) => {
                return (
                  <Col md={4} xs={12} key={i}>
                    <ItemCardH
                      img={item.image.url}
                      title={item.title}
                      link={item.url}
                      articleId={item.id}
                      variant={variant}
                    />
                  </Col>
                );
              })}
            </>
          ) : (
            <>
              <Col md={4} xs={12}>
                <ItemCardH
                  img={`img/Ppg_Binfo_9b5fd457eb.png`}
                  title={`Semana portas abertas`}
                />
              </Col>
              <Col md={4} xs={12}>
                <ItemCardH
                  img={`img/Ppg_Binfo_9b5fd457eb.png`}
                  title={`Semana portas abertas`}
                />
              </Col>
              <Col md={4} xs={12}>
                <ItemCardH
                  img={`img/Ppg_Binfo_9b5fd457eb.png`}
                  title={`Semana portas abertas`}
                />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
