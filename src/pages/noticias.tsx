import { Col, Container, Row } from "react-bootstrap";
import client from "@utils/apollo-client";
import NEWS_QUERY from "../queries/news";
import ItemCardH from "@components/ItemCardH";
import { Variants, values } from "@utils/types";

export default function Noticias({ data }) {
  return (
    <Container>
      <Row className="my-4">
        {data.articles.map((article, i) => {
          return (
            <Col key={i} md={4} xs={12}>
              <ItemCardH
                variant={Variants.NOTICIAS}
                img={article.image.url}
                title={article.title}
                articleId={article.id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: NEWS_QUERY,
  });
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
