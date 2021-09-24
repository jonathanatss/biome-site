import { Row, Col, Container } from "react-bootstrap";
import client from "@utils/apollo-client";
import EVENT_QUERY from "../../queries/event";
import { backend_url } from "@utils/conf";
import Moment from "react-moment";

export default function Evento({ evento }) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col className="justify-content-center" style={{ maxWidth: "50%" }}>
        <p></p>
        <Row
          style={{
            margin: "auto",
            alignItems: "center",
            display: "flex",
            maxWidth: "90%",
          }}
        >
          <img src={backend_url + evento.image.url} alt={evento.title} />
        </Row>
        <p></p>
        <Row
          className="justify-content-center"
          style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
        >
          <span>
            De:{" "}
            <Moment style={{ fontSize: "large" }} format="DD/MM/YYYY">
              {evento.starts}
            </Moment>{" "}
            Até:{" "}
            <Moment style={{ fontSize: "large" }} format="DD/MM/YYYY">
              {evento.ends}
            </Moment>{" "}
          </span>
        </Row>
        <p></p>
        <Row
          className="justify-content-center"
          style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
        >
          <p>Local: {evento.place}</p>
        </Row>
        <p></p>
        <Row
          className="justify-content-center"
          style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
        >
          <h1 style={{ fontSize: "large" }}>{evento.description}</h1>
        </Row>
        <p></p>
        <Row
          className="justify-content-center"
          style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
        ></Row>
      </Col>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const data = await client.query({
    query: EVENT_QUERY,
    variables: { id: parseInt(params.id) },
  });
  return {
    props: {
      evento: data.data.event,
    },
  };
}
