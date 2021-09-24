import Head from "next/head";
import { Row, Container, Col } from "react-bootstrap";
import SERVICES_QUERY from "../../src/queries/services";
import client from "@utils/apollo-client";
import CardDeck from "react-bootstrap/CardDeck";
import Servico from "@components/Servico";

export default function Servicos({ servicos }) {
  return (
    <Container>
      <Head>
        <title>Serviços - BioME</title>
      </Head>
      <Row className="justify-content-center">
        <CardDeck className={`row justify-content-center pt-4`}>
          {servicos &&
            servicos.map((servico, i) => {
              return (
                <Col md={4} lg={4} sm={12} className="pt-1 p-5" key={i}>
                  <Servico servico={servico} />
                </Col>
              );
            })}
        </CardDeck>
      </Row>
    </Container>
  );
}

export async function getServerSideProps() {
  const serviceData = await client.query({
    query: SERVICES_QUERY,
  });

  return {
    props: {
      servicos: serviceData.data.servicos,
    },
  };
}
