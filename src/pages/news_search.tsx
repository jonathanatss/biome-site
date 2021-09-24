import { Col, Container, Row } from "react-bootstrap";
import client from "@utils/apollo-client";
import NEWS_SEARCH from "../queries/news_search";
import ItemCardH from "@components/ItemCardH";


export default function NewsSearch(data) {
    return (
        <Container>
          <Row className="my-4">
            {data.articles.map((article, i) => {
              return (
                <Col key={i} md={4} xs={12}>
                  <ItemCardH img={article.image.url} title={article.title} />
                </Col>
              );
            })}
          </Row>
        </Container>
      );

}

export async function getServerSideProps() {
    const { data } = await client.query({
      query: NEWS_SEARCH,
    });
    //console.log(data);
    return {
      props: {
        data: data,
      },
    };
  }
  