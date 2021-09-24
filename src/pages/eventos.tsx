import Head from "next/head";
import { Row, Container, Col } from "react-bootstrap";
import EVENTS_QUERY from "../../src/queries/events";
import client from "@utils/apollo-client";
import CardDeck from "react-bootstrap/CardDeck";
import Evento from "@components/Evento";

export default function Eventos({ eventos }) {
  return (
    <Container>
      <Head>
        <title>Eventos - BioME</title>
      </Head>
      <Row className="justify-content-center">
        <CardDeck className={`row justify-content-center pt-4`}>
          {eventos &&
            eventos.map((evento, i) => {
              return (
                <Col md={4} lg={4} sm={12} className="pt-1 p-5" key={i}>
                  <Evento evento={evento} />
                </Col>
              );
            })}
        </CardDeck>
      </Row>
    </Container>
  );
}

export async function getServerSideProps() {
  const eventData = await client.query({
    query: EVENTS_QUERY,
  });

  return {
    props: {
      eventos: eventData.data.events,
    },
  };
}
