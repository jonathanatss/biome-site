import { Accordion, Button, Card, Container, Row } from "react-bootstrap";
import client from "@utils/apollo-client";
import PCATEGORY_QUERY from "../queries/people";
import Head from "next/head";
import PeopleCategory from "@components/PeopleCategory";
import { useContext } from "react";
import { PeopleContext } from "@components/PeopleContext";
import PeopleSelect from "@components/PeopleSelect";
import PEOPLE_TAGS from "src/queries/people-tags";
import TagCloudContent from "@components/TagCloudContent";

export default function Pessoas({ data, allTags }) {
  //const peopleContext = useContext(PeopleContext);

  return (
    <Container>
      <Head>
        <title>BioME-IMD-UFRN</title>
        <meta
          name="description"
          content="Site do Bioinformatics Multidisciplinary Environment"
        />
        <link rel="icon" href="/img/biome.png" />
      </Head>
      {/*<PeopleSelect allTags={allTags} />   */}
      <TagCloudContent tags={allTags} />
      <Accordion>
        {data.pcategories &&
          data.pcategories.map((pcategory, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  margin: "30px auto",
                  flexDirection: "column",
                  maxWidth: "90%",
                }}
              >
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={i.toString()}
                    >
                      <Row
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "20px",
                        }}
                      >
                        <h2>{pcategory.name}</h2>
                      </Row>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={i.toString()}>
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                      <PeopleCategory people={pcategory.people} />
                    </Row>
                  </Accordion.Collapse>
                </Card>
              </div>
            );
          })}
      </Accordion>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: PCATEGORY_QUERY,
  });

  const allTags = await client.query({
    query: PEOPLE_TAGS,
  });

  return {
    props: {
      data: data,
      allTags: allTags.data,
    },
  };
}
