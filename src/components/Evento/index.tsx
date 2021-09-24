import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { backend_url } from "@utils/conf";
import Moment from "react-moment";
import EventoData from "@components/EventoData";

export default function Evento({ evento }) {
  //console.log(events);
  return (
    <Container>
      <Card
        key={evento.id}
        className="justify-content-center"
        style={{ padding: "0.5rem" }}
      >
        <div>
          <Image
            width={"300rem"}
            height={"225rem"}
            objectFit="fill"
            src={backend_url + evento.image.url}
            alt={evento.title}
          />
        </div>

        <Card.Body className="justify-content-center text-center">
          <Row className="justify-content-center">
            <Card.Title>{evento.title}</Card.Title>
          </Row>

          <Card.Body>
            <Row className="justify-content-center">
              <Moment style={{ fontSize: "large" }} format="DD/MM/YYYY">
                {evento.starts}
              </Moment>{" "}
            </Row>{" "}
            <Row className="justify-content-center">
              <span>-</span>
            </Row>
            <Row className="justify-content-center">
              <Moment style={{ fontSize: "large" }} format="DD/MM/YYYY">
                {evento.ends}
              </Moment>{" "}
            </Row>{" "}
            {/* < */}
          </Card.Body>

          <Row className="justify-content-center">
            <Link href={`/eventos/${encodeURIComponent(evento.id)}`}>
              <a>
                <Button variant="outline-dark">Saiba mais</Button>
              </a>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
