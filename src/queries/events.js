import { gql } from "@apollo/client";

const EVENTS_QUERY = gql`
  query Event {
    events(sort: "starts:desc") {
      id
      title
      description
      place
      starts
      ends
      image {
        url
      }
    }
  }
`;

export default EVENTS_QUERY;
