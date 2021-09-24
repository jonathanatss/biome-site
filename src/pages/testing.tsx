import TagCloudContent from "@components/TagCloudContent";
import { Container } from "react-bootstrap";
import PEOPLE_TAGS from "src/queries/people-tags";
import client from "@utils/apollo-client";
import { useContext } from "react";
import { PeopleContext } from "@components/PeopleContext";

export default function Testing({ tags }) {
  const { selectedTags } = useContext(PeopleContext);

  return (
    <Container>
      <TagCloudContent tags={tags} />
      <button onClick={() => console.log(selectedTags)}> selected tags </button>
    </Container>
  );
}

export async function getServerSideProps() {
  const tagData = await client.query({
    query: PEOPLE_TAGS,
  });

  return {
    props: {
      tags: tagData.data,
    },
  };
}
