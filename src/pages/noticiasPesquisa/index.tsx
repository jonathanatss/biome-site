import client from "@utils/apollo-client";
import NEWS_SEARCH from "src/queries/news_search";
import { Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemCardH from "@components/ItemCardH";

type DataProps = {
  data: {
    articles: Array<ArticleProps>;
  };
};

type ArticleProps = {
  id: string;
  title: string;
  content: string;
  author?: string;
  abstract?: string;
  date: Date;
  image: {
    url: string;
  };
};

export default function Articles() {
  const [Data, setData] = useState<DataProps>();
  const [Url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.pathname.split("/").pop());
  }, []);

  useEffect(() => {
    setUrl(new URLSearchParams(window.location.search).get("busca"));
    fetch(Url);
  }, [Url]);

  async function fetch(urlParams) {
    const data = await client.query({
      query: NEWS_SEARCH,
      variables: { str: urlParams },
    });
    setData(data);
  }

  return (
    <Container>
      {Data ? (
        Data.data?.articles.map((article, i) => {
          return (
            <Col key={i} md={4} xs={12}>
              <p />
              <ItemCardH img={article.image.url} title={article.title} />
            </Col>
          );
        })
      ) : (
        <>
          <p>Por favor, Aguarde...</p>
        </>
      )}
    </Container>
  );
}
