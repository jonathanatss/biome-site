import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { backend_url } from "@utils/conf";
import { Variants, values } from "@utils/types";
import Link from "next/link";

type ItemCardHProps = {
  img: string;
  title: string;
  text?: string;
  link?: StringConstructor;
  variant?: Variants;
  articleId?: string;
};

function SubCard({
  img,
  title,
  text,
  link,
  articleId,
  variant,
}: ItemCardHProps) {
  const cardImagem =
    variant == Variants.REDESSOCIAIS || variant == Variants.PPGBIOINFO;
  return (
    <Card className={values[variant].cardType}>
      {cardImagem ? (
        <div
          className="card-img-top"
          style={{ backgroundImage: `url(${backend_url}${img})` }}
        ></div>
      ) : (
        <div className="card-img-top">
          <img src={`${backend_url}${img}`} alt="img" />
        </div>
      )}
      <div className="card-body-wrapper">
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default function ItemCardH(props: ItemCardHProps) {
  return (
    <>
      {props.articleId ? (
        <Link href={`/article/${encodeURIComponent(props.articleId)}`} passHref>
          <div>
            <SubCard {...props} />
          </div>
        </Link>
      ) : (
        <SubCard {...props} />
      )}
    </>
  );
}
