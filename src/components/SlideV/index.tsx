import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ItemCardV from "@components/ItemCardV";
import Subtitulo from "@components/Subtitulo";
import { Variants, values } from "@utils/types";

import style from "./style.module.css";
import EventCard from "src/EventCard";

interface SlideVProps {
  items?: Array<any>;
  maxItems?: number;
  variant: Variants;
}

export default function SlideV({ items, maxItems, variant }: SlideVProps) {
  const staticData = values[variant];
  let url = "";
  if (variant == Variants.EVENTOS) {
    url = "eventos";
  } else if (variant == Variants.SERVICOS) {
    url = "servicos";
  }

  return (
    <>
        <Row>
          <Col md={12} xs={12}>
            <Subtitulo variant={variant} />
          </Col>
          <Col className="box-layout" md={10} xs={12} style={{ color: staticData.color, borderColor: staticData.color }}>
            <div className={style.scrollv}>
              {items &&
                items.map((item, i) => {
                  if (variant == Variants.EVENTOS) {
                    return (
                      <EventCard url={url} key={`key1__${i}`} item={item} />
                    );
                  } else {
                    return (
                      <ItemCardV url={url} key={`key1__${i}`} item={item} />
                    );
                  }
                })}
            </div>
          </Col>
        </Row>
    </>
  );
}
