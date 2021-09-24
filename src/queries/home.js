import { gql } from "@apollo/client";

const HOME_QUERY = gql`
  query Index {
    articles(sort: "date:desc", limit: 3) {
      id
      title
      content
      author
      date
      abstract
      image {
        url
      }
    }
    events(sort: "starts:desc", limit: 3) {
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
    servicos(sort: "title", limit: 3) {
      id
      title
      description
      image {
        url
      }
    }
  }
`;

export default HOME_QUERY;
