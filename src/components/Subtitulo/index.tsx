import React, { Children } from "react";
import { Col } from "react-bootstrap";
import { Variants, values } from "@utils/types";

interface SubtituloProps {
  variant: Variants;
}

interface staticDataProps {
  path: string;
  title: string;
  color: string;
}

export default function Subtitulo({ variant }: SubtituloProps) {
  const staticData = values[variant] as staticDataProps;
  return (
    <Col className="col-12 mb-3">
      <div
        className="titulo-secao d-flex align-items-end"
        style={{ color: staticData.color, borderColor: staticData.color }}
      >
        <h2 className="titulo pb-2 m-0 pe-4">
          {staticData && staticData.title}
        </h2>
        {staticData.path && (
          <a
            className="ver-mais btn btn-sm ms-1"
            href={staticData.path}
            style={{ color: staticData.color, borderColor: staticData.color }}
          >
            ver mais
          </a>
        )}
      </div>
    </Col>
  );
}
