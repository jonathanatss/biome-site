import { gql } from "@apollo/client";

const TOOLS_QUERY = gql`
    ferramentas {
        id
        title
        description
        abstract
        image {
            url
        }
    }
`;
