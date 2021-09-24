import { gql } from "@apollo/client";

const NOTICE_QUERY = gql`
  query Editais {
    notices {
      id
      title
      description
      registry
      year
      type
      code
      link
      image {
        url
      }
    }
  }
`;

export default NOTICE_QUERY;
