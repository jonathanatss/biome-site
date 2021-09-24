import { gql } from "@apollo/client";

const NEWS_QUERY = gql`
  query Article {
    articles(sort: "date:desc") {
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

export default NEWS_QUERY;
