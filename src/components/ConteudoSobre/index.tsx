import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./style.module.css";
import Titulo from "@components/Titulo";
import CaixaTexto from "@components/CaixaTexto";

export default function ConteudoHistoria() {
  return (
    <Container>
      <div style={{minHeight: "800px", marginTop: "2em" }}>
        <Titulo title={"Sobre o BioME"} color={"#3A68A1"} />

        <div className={styles.history_layout}>
        <div className={styles.history_p}>
          <Row>
              <p>
                O BioME é uma iniciativa em bioinformática da UFRN, cuja missão é a de
                promover a bioinformática no cenário regional e nacional. Contando com
                professores e pesquisadores altamente capacitados, que trabalham em
                sintonia em um ambiente colaborativo, o BioME atua nos principais níveis:
                ensino, pesquisa, centro multiusuário, programa corporativo e treinamento.
              </p>
              <p>
                Quer saber mais sobre o BioME e como ele foi criado? Continue lendo abaixo.
              </p>
            </Row>
           </div>
        </div>

        <div
          className={styles.history_img}
          style={{
            width: "100%",
            height: "52%",
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      
      
          <Image
            src="/img/about.png"
            width={1240}
            height={600}
            objectFit="contain"
            alt="biome history"
          />
        </div>
      
        <div className={styles.history_layout}>
          <div className={styles.history_p}>
                <p>
                  A história do BioME está diretamente ligada ao esforço da UFRN em recrutar
                  lideranças importantes com expertise na área de Bioinformática e formação de
                  pessoal; na implantação do Instituto Metrópole Digital (IMD) e de seu modelo
                  inovador; e na criação do Programa de Pós-Graduação em Bioinformática.
              </p>
              <p>
                Em 2011, a criação do Instituto do Cérebro da UFRN e do IMD, motivou o
                recrutamento de líderes de grupos que atuam na interface de computação e
                ciências da vida. Desde então, o IMD tem atuado na fronteira da pesquisa
                básica e inovação, promovendo uma cultura de empreendedorismo, bem como
                de pesquisa e inovação tecnológica. Em 2012, o Prof. Sandro José de Souza,
                um dos pioneiros da área no Brasil e com histórico de sucesso na formação de
                recursos humanos em Bioinformática, foi recrutado pelo Instituto do Cérebro.
                Mais recentemente, outros quatro pesquisadores em bioinformática foram
                recrutados pela UFRN. Esse grupo de recém-chegados se juntou a outros
                professores já formados na UFRN, expoentes em suas áreas.
              </p>
              <p>
                A aprovação do projeto &quot;Biologia Sistêmica do Câncer&quot; (BSC) no âmbito do
                edital de Biologia Computacional da CAPES (051/2013) também contribuiu
                para definir a bioinformática como uma prioridade dentro da UFRN. O principal
                objetivo da rede BSC é promover a biologia computacional e a biologia de
                sistemas no Brasil, é coordenada pelo Prof. Sandro J. de Souza, e é formada
                por vinte professores/pesquisadores da UFRN, UFMG, USP e Fundação
                Antonio Prudente, como bem como pesquisadores estrangeiros da
                Universidade da California - EUA, Universidade de Heidelberg – Alemanha, e
                Universidade de Oslo - Noruega.
              </p>
              <p>
                No início de 2014, conversas entre o Prof. Sandro José de Souza e o Prof.
                José Ivonildo do Rêgo (diretor do IMD e ex-reitor da UFRN) levaram ao
                estabelecimento da ênfase em Bioinformática no Bacharelado em Tecnologia
                da Informação (BTI). Em meados de 2015, após tratativas internas na UFRN
                envolvendo docentes de diversos departamentos incluindo o Prof. José Ivonildo
                do Rêgo, a Prof. Edna Maria da Silva (na época pró-reitora de pós-graduação)
                e a Prof. Ângela Cruz (então reitora da UFRN), foi criado o Programa de Pós-
                Graduação em Bioinformática da UFRN. Como parte do Instituto Metrópole
                Digital, o programa iniciou suas atividades em 2016 com nota 5 da CAPES (de
                máximo 7).
              </p>
              <p>
                Por fim, em 2016 foi criado o Centro Multidisciplinar de Bioinformática, o BioME
                (Bioinformatics Multidisciplinary Environment), que reúne 32
                professores/pesquisadores provenientes não só da UFRN, mas de outrasuniversidades 
                brasileiras que contam com programas de pós-graduação em bioinformática, tais como USP, UFMG e UFRGS.
              </p>
              <p>
                Até 2021, o BioME apoiou diversos eventos científicos nacionais, e organizou o
                I Fórum de Bioinformática de Natal, evento internacional que reuniu
                reconhecidos pesquisadores provenientes de universidades e institutos de
                pesquisas do Reino Unido, Estados Unidos, Dinamarca, Espanha, Chile, China
                e Brasil. Localmente, o BioME organizou 4 edições dos Cursos de Curta
                Duração, e recebeu mais de 370 participantes. No âmbito acadêmico, a PPg
                Bioinfo já formou 8 doutores e 27 mestres em bioinformática.
              </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
