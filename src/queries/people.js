import { gql } from "@apollo/client";

const PCATEGORY_QUERY = gql`
  query Pcategory {
    pcategories {
      name
      people(sort: "name:asc") {
        name
        reduced_name
        email
        assignment
        sigaa
        lattes
        scholar
        picture {
          url
        }
        pcategories {
          id
          name
        }
        ptags {
          id
          tag
        }
      }
    }
  }
`;

export default PCATEGORY_QUERY;
