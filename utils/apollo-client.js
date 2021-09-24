import { ApolloClient, InMemoryCache } from "@apollo/client";
import { backend_url } from "./conf";

const client = new ApolloClient({
  uri: `${backend_url}/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
export default client;
