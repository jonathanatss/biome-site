import { gql } from "@apollo/client";

const PEOPLE_TAGS = gql`
  query Ptags {
    ptags {
      id
      tag
      pessoas {
        name
      }
    }
  }
`;

export default PEOPLE_TAGS;
