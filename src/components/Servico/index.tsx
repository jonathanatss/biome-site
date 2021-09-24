import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { backend_url } from "@utils/conf";

export default function Servico({ servico }) {
  return (
    <Container>
      <Card
        key={servico.id}
        style={{ padding: "0.5rem" }}
        className="justify-content-center"
      >
        <div>
          <Image
            width={"300rem"}
            height={"225rem"}
            objectFit="fill"
            src={backend_url + servico.image.url}
            alt={servico.title}
          />
        </div>

        <Card.Body className="justify-content-center text-center">
          <Row className="justify-content-center">
            <Card.Title>{servico.title}</Card.Title>
          </Row>

          <Row className="justify-content-center">
            <Link href={`/servicos/${encodeURIComponent(servico.id)}`}>
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
