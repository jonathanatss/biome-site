import React from "react";
import { Card } from "react-bootstrap";

import style from "./style.module.css";
import { backend_url } from "@utils/conf";

type ItemCardVProps = {
  item: {
    image: {
      url: string;
    };
    title: string;
    id: string;
  };
  url: string;
};

export default function ItemCardV({ item, url }: ItemCardVProps) {
  const img = item.image;
  const title = item.title;
  const id = item.id;
  return (
    <>
    <a className="link-evento" href={`/${url}/${encodeURIComponent(id)}`}>
        <Card className="card-evento">
          {img && (
            <Card.Img
              className={style.card_img}
              variant="top"
              src={backend_url + img.url}
            />
          )}

          <Card.Body className="conteudo">
            <h2 className="titulo">
              {title}
              {/* <Link href={`/${url}/${encodeURIComponent(id)}`}>
                <a>{title}</a>
              </Link> */}
            </h2>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}
