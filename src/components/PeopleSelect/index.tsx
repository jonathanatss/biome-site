import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { useContext, useEffect } from "react";
import { PeopleContext } from "@components/PeopleContext";
import { Container } from "react-bootstrap";

export default function PeopleSelect(props) {
  const { setSelectedTags } = useContext(PeopleContext);

  //console.log(props.allTags.ptags[0].pessoas.length);

  let tagList = [];
  props.allTags.ptags.forEach((tagObj) => {
    tagList.push(tagObj.tag);
  });

  //console.log(tagList);

  return (
    <Container>
      <DropdownMultiselect
        options={tagList}
        name="PeopleOptions"
        placeholder="Áreas de atuação"
        handleOnChange={(selected) => {
          setSelectedTags(selected);
        }}
      />
    </Container>
  );
}

//https://www.npmjs.com/package/react-multiselect-dropdown-bootstrap
