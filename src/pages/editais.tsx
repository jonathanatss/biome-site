import { Col, Container, Row } from "react-bootstrap";
import client from "@utils/apollo-client";
import NOTICE_QUERY from "../queries/notices";
import Titulo from "@components/Titulo";
import React from "react";
import { Variants } from "@utils/types";
import SlideEditais from "@components/SlideE";

export default function Editais({data}){
    return(
      <Container>
        <div style={{ minHeight: "800px", marginTop: "2em" }}>
          <Row>
            <Titulo title={"Editais"} color={"#164193"}/>
          </Row>
          {/*Caixa Editais*/}
          <Row>
            <Col xl={12}>
              <Row >
                <Col>
                <SlideEditais status="novo" lista={"OI"}/>
                </Col>
                <Col>
                <SlideEditais status="andamento" lista={"OI"}/>
                </Col>
                <Col>
                <SlideEditais status="encerrado" lista={"OI"}/>
                </Col>
              </Row>
            </Col>

          </Row>

          {/* <Row >
            {data.notices.map((article, i) => {
               return (
                 <Col key={i} md={4} xs={12}>
                  <ItemCardH
                   img={article.image.url}
                   title={article.title}
                   
                 />
                 </Col>
              );
            })}
          </Row> */}
        </div>
      </Container>
    );
}
export async function getServerSideProps() {
    const { data } = await client.query({
      query: NOTICE_QUERY,
    });
    //console.log(data);
    return {
      props: {
        data: data,
      },
    };
  }