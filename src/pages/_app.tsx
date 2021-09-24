import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/styles.css"
import "../../styles/style.scss"

import Layout from "../components/Layout";
import PeopleContextProvider from "@components/PeopleContext";

function MyApp({ Component, pageProps }) {
  return (
    <PeopleContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PeopleContextProvider>
  );
}

export default MyApp;
