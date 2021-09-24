import ConteudoPosGraduacao from "@components/ConteudoPosGraduacao";
import Head from "next/head";

export default function Posgraduacao() {
  return (
    <>
      <Head>
        <title>BioME - Pós-graduação</title>
        <meta name="description" content="Pós-graduação em Bioinformática" />
        <link rel="icon" href="/img/biome.png" />
      </Head>
      <ConteudoPosGraduacao />
    </>
  );
}
