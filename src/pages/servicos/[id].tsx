import { Row, Col, Container } from "react-bootstrap";
import client from "@utils/apollo-client";
import SERVICE_QUERY from "../../queries/service";
import { backend_url } from "@utils/conf";

export default function Servico({ servico }) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col style={{ maxWidth: "50%" }}>
        <p></p>
        <Row style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}>
          <h1 style={{ fontSize: "large" }}>{servico.title}</h1>
        </Row>
        <p></p>
        <Row
          style={{
            margin: "auto",
            alignItems: "center",
            display: "flex",
            maxWidth: "90%",
          }}
        >
          <img
            src={backend_url + servico.image.url}
            alt={servico.title}
            style={{
              width: "30rem",
              height: "20rem",
              textAlign: "justify",
              margin: "auto",
            }}
          />
        </Row>
        <p></p>
        <Row style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}>
          <h1 style={{ fontSize: "large" }}>{servico.description}</h1>
        </Row>
        <p></p>
        <Row
          style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
        ></Row>
      </Col>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const serviceData = await client.query({
    query: SERVICE_QUERY,
    variables: { id: parseInt(params.id) },
  });
  return {
    props: {
      servico: serviceData.data.servico,
    },
  };
}
