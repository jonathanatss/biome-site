import Head from "next/head";
import styles from "@styles/Pes.module.css";
import { Container, Row, Col, Table, Image } from "react-bootstrap";

import Titulo from "@components/Titulo";
import CaixaTexto from "@components/CaixaTexto";

export async function getStaticProps() {
  const data = { titulo: "Programa de Estudos Secundários",
  descricao: {titulo:"O que é o PES?", texto:["O Programa de Estudos Secundários em Bioinformática é um programa de formação complementar com o objetivo de fornecer uma oportunidade para estudantes e profissionais conhecerem a área, mesmo que não façam parte do Bacharelado em Tecnologia da Informação.","Este programa se assemelha a uma formação secundária, pela qual os alunos receberão um certificado de estudos avançados na área de Bioinformática."]}, 
  certificacao:{titulo:"Certificação", texto:["Para a obtenção da certificação em Bioinformática, o aluno deve cursar pelo menos 420 horas de disciplinas correspondentes à estrutura curricular do PES.","Vale ressaltar que a certificação obtida é apenas secundária, isto é, não vale como um diploma de graduação ou pós-graduação."]},
  pesquisa:{titulo:"Linhas de Pesquisa", lista:["Biologia de Sistemas", "Modelagem e Simulação de Sistemas Biológicos", "Genômica e Proteômica", "Bioinformática Estrutural", "Big Data"]},

};
  return {
    props: {
      data: data
    }
  };
}

export default function PES({data}) {
  return (
    <>
      <Head>
        <title>Programa de Estudos Secundários - Bioinformática</title>
      </Head>
      <Container>
        <div style={{ minHeight: "800px", marginTop: "2em" }}>
          <Titulo title={data && data && data.titulo} color={"#164193"}/>

          <CaixaTexto titulo={data && data.descricao.titulo} texto={data && data.descricao.texto}/>

          <Row className="pt-5 justify-content-md-center">
            <Col
              lg={{ span: 3, offset: 1 }}
              md={{ span: 3, offset: 1 }}
              sm={12}
              className={`${styles.rectangule} pt-4`}
            >
              <h5 className={styles.color_blue}>{data && data.descricao.titulo}</h5>
              <div>
                {data && data.descricao.texto.map((paragraph, i) => {
                    return(
                      <p className={styles.tag_p} key={`descricao_${i}`}>
                        {paragraph}
                      </p>
                    )
                  })}
              </div>
            </Col>
            <Col
              lg={{ span: 3, offset: 1 }}
              md={{ span: 3, offset: 1 }}
              sm={12}
              className={`${styles.rectangule} pt-4`}
            >
              <h5 className={styles.color_blue}>{data && data && data.pesquisa.titulo}</h5>
              <div>
              {data && data.pesquisa.lista.map((linha, i) => {
                    return(
                      <ul className={styles.list_ul}  key={`pesquisa_${i}`}>
                        {linha}
                      </ul>
                    )
                  })}

              </div>
            </Col>
            <Col
              lg={{ span: 3, offset: 1 }}
              md={{ span: 3, offset: 1 }}
              sm={12}
              className={`${styles.rectangule} pt-4`}
            >
              <h5 className={styles.color_blue}>{data && data.certificacao.titulo}</h5>
              <div>
              {
                  data && data.certificacao.texto.map((paragraph, i) => {
                    return(
                      <p className={styles.tag_p}  key={`certificacao_${i}`}>
                        {paragraph}
                      </p>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
          <Row className="pt-5 justify-content-md-center pb-3">
            <Col
              lg={{ span: 10, offset: 1 }}
              className={`${styles.rectangule_2} pt-4`}
            >
              <h4 className={`text-center ${styles.color_blue}`}>
                Estrutura Curricular do PES em Bioinformática
              </h4>
              <Row className="justify-content-md-center pt-5">
                <Col xs md lg={{ span: 2, offset: 1 }}>
                  <Image
                    src="/img/pes.png"
                    className="shadow"
                    roundedCircle
                    fluid
                  />
                </Col>
                <Col xs md lg="5">
                  <p
                    className={`${styles.title_blue} text-uppercase ${styles.tag_p}`}
                  >
                    Bioinformática
                  </p>
                  <span>
                    Estrutura curricular - Bioinformática 2020.1 <br />
                    Habilitada: Sim <br />
                    Expira em: Não Expira <br />
                    420h
                  </span>
                </Col>
              </Row>
              <Row className="p-5">
                <Col md={12} sm={12} xs={12} lg={12}>
                  <h5 className={`${styles.color_blue} text-center`}>
                    Componentes curriculares
                  </h5>
                </Col>
                <Col>
                  <h6 className={`${styles.color_blue} pb-2 pt-4`}>
                    Obrigatórios
                  </h6>
                  <Table responsive>
                    <thead className={styles.tag_thead}>
                      <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>CH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DBG0048</td>
                        <td>EVOLUÇÃO</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0605</td>
                        <td>SEMINÁRIOS EM BIOINFORMÁTICA</td>
                        <td>30</td>
                      </tr>

                      <tr>
                        <td>ICE1024</td>
                        <td>FUNDAMENTOS DE BIOINFORMÁTICA</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>DBQ0048</td>
                        <td>FUNDAMENTOS DE BIOQUÍMICA E BIOLOGIA MOLECULAR</td>
                        <td>90</td>
                      </tr>

                      <tr>
                        <td>DBG0047</td>
                        <td>GENÉTICA</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0606</td>
                        <td>PROJETO EM BIOINFORMÁTICA</td>
                        <td>120</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <h6 className={`${styles.color_blue} pb-2 pt-4`}>Optativos</h6>
                  <Table responsive>
                    <thead className={styles.tag_thead}>
                      <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>CH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>IMD0601</td>
                        <td>BIOESTATÍSTICA</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>DBQ0050</td>
                        <td>BIOINFORMÁTICA ESTRUTURAL</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0602</td>
                        <td>FERRAMENTAS PARA ANÁLISE DE SEQUÊNCIAS</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>DBQ0044</td>
                        <td>INTRODUÇÃO À BIOLOGIA DE SISTEMAS</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0607</td>
                        <td>MODELAGEM E SIMULAÇÃO COMPUTACIONAL</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0603</td>
                        <td>TECNOLOGIAS EM LARGA ESCALA I</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0260</td>
                        <td>TÓPICOS ESPECIAIS EM BIOINFORMÁTICA "A"</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0261</td>
                        <td>TÓPICOS ESPECIAIS EM BIOINFORMÁTICA "B"</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0262</td>
                        <td>TÓPICOS ESPECIAIS EM BIOINFORMÁTICA "C"</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0263</td>
                        <td>TÓPICOS ESPECIAIS EM BIOINFORMÁTICA "D"</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0264</td>
                        <td>TÓPICOS ESPECIAIS EM BIOINFORMÁTICA "E"</td>
                        <td>60</td>
                      </tr>

                      <tr>
                        <td>IMD0265</td>
                        <td>TÓPICOS ESPECIAIS EM BIOINFORMÁTICA "F"</td>
                        <td>60</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
