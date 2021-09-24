import { gql } from "@apollo/client";

const EVENT_QUERY = gql`
  query Events($id: ID!) {
    event(id: $id) {
      id
      title
      description
      place
      starts
      ends
      image {
        url
      }
      tag_eventos
    }
  }
`;
export default EVENT_QUERY;
