import Head from "next/head";

import Banner from "@components/Banner";
import Conteudo from "@components/Conteudo";
import client from "@utils/apollo-client";
import HOME_QUERY from "../../src/queries/home";
import EVENTS_QUERY from "../../src/queries/events";

export default function Home({ data, eventos }) {
  return (
    <>
      <Head>
        <title>BioME-IMD-UFRN</title>
        <meta
          name="description"
          content="Site do Bioinformatics Multidisciplinary Environment"
        />
        <link rel="icon" href="/img/biome.png" />
      </Head>
      <Banner />
      <Conteudo dados={data} eventos={eventos} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: HOME_QUERY,
  });
  const eventData = await client.query({
    query: EVENTS_QUERY,
  });

  return {
    props: {
      data: data,
      eventos: eventData.data,
    },
  };
}
