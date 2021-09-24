import { gql } from "@apollo/client";

const SERVICES_QUERY = gql`
  query Service {
    servicos(sort: "title:ASC") {
      id
      title
      description
      image {
        url
      }
    }
  }
`;

export default SERVICES_QUERY;
