import { gql } from "@apollo/client";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
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
  }
`;

export default ARTICLE_QUERY;
