import { Col, Container, Row } from "react-bootstrap";
import client from "@utils/apollo-client";
import ARTICLE_QUERY from "../../queries/article";
import Image from "next/image";
import { backend_url } from "@utils/conf";
import Moment from "react-moment";

export default function Article({ article }) {
  return (
    <Container>
      <Row
        style={{
          alignItems: "center",
          display: "flex",
          maxWidth: "95%",
          margin: "auto",
        }}
      >
        <Image
          width={1600}
          height={900}
          objectFit="contain"
          src={backend_url + article.image.url}
          alt="Imagens do Artigo"
        />
      </Row>
      <p></p>
      <Row
        className="justify-content-center"
        style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
      >
        <Moment
          style={{ fontStyle: "italic", fontSize: "large" }}
          format="DD/MM/YYYY HH:mm"
        >
          {article.date}
        </Moment>
      </Row>
      <p></p>
      <Row
        className="justify-content-center"
        style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
      >
        <h1 style={{ fontSize: "large", fontWeight: "bold" }}>
          {article.title}
        </h1>
      </Row>
      <p></p>
      <Row
        className="justify-content-center"
        style={{ textAlign: "justify", margin: "auto", maxWidth: "90%" }}
      >
        <p style={{ fontSize: "medium" }}>{article.content}</p>
      </Row>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const data = await client.query({
    query: ARTICLE_QUERY,
    variables: { id: parseInt(params.id) },
  });
  //console.log(data);
  return {
    props: {
      article: data.data.article,
    },
  };
}
