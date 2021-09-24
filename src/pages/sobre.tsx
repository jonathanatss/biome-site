  import Head from "next/head";
import ConteudoHistoria from "../components/ConteudoSobre/index"
export default function Historia(){
    return(
        <>
        <Head>
          <title>BioME - Pós-graduação</title>
          <meta name="description" content="Sobre o BioME" />
          <link rel="icon" href="/img/biome.png" />
        </Head>
        <ConteudoHistoria />
      </>
    )
}