import { gql } from "@apollo/client";

const SERVICE_QUERY = gql`
  query Servicos($id: ID!) {
    servico(id: $id) {
      id
      title
      description
      image {
        url
      }
    }
  }
`;
export default SERVICE_QUERY;
