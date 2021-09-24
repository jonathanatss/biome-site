import { gql } from "@apollo/client";

const NEWS_SEARCH = gql`
  query Article($str: String!) {
    articles(
      where: {
        _or: [
          { title_containss: $str }
          { content_containss: $str }
          { abstract_containss: $str }
        ]
      }
    ) {
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

export default NEWS_SEARCH;
