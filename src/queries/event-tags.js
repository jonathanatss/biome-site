import { gql } from "@apollo/client";

const EVENTS_TAGS = gql`
  query event-tags {
    event-tags {
      id
      tag
      events {
        id
        title
        description
        place
        starts
        ends
        image {
          url
        }
        event-tags {
          id
          tag
        }
      }
    }
  }
`;

export default EVENTS_TAGS;
