import { Row, Col } from "react-bootstrap";
import style from "./style.module.css";
import Image from "next/image";

export default function CaixaTexto({
  titulo,
  texto,
  img
}: {
  titulo?: string;
  texto: string;
  img?: string;
}) {
  return (
    <Row className={style.box}>
      <Col xl={8}>
        <h5 className={`${style.title}`}>{titulo && titulo}</h5>
      </Col>
      <Col xl={12} className={`${style.col_text}`}>

        {!img && ( <p className={`${style.paragraph}`}>{texto}</p>)}
        {img && (
          <Row>
            <Col xl={4} sm={12}>
              <Image src={img} width={200} height={72} />
            </Col>
            <Col xl={8} sm={12}>
              <p className={`${style.paragraph}`}>{texto}</p>
            </Col>{" "}
          </Row>
        )}


      </Col>
    </Row>
  );
}
