import Person from "@components/Person";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { PeopleContext } from "@components/PeopleContext";
import { useContext, useEffect, useState } from "react";

const PeopleCategory = ({ people }) => {
  const { isUnderTag, selectedTags } = useContext(PeopleContext);

  const [currentPeople, setCurrentPeople] = useState(people);

  /*
  useEffect(() => {
    let auxPeopleList = [];
    people.forEach((person) => {
      if (isUnderTag(person)) {
        auxPeopleList.push(person);
      }
      setCurrentPeople(auxPeopleList);
    });
    console.log("this");
  }, [selectedTags]);

  */
  useEffect(() => {}, [selectedTags]);

  return (
    <div>
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        className="justify-content-md-center"
        id={people.id}
      >
        {people &&
          people.map((person, i) => {
            /*
            console.log(
              "ptags: " +
                person.ptags +
                " - selected tags:  " +
                selectedTags +
                " - isUnderTag: " +
                isUnderTag(person.ptags)
            );
            */

            if (isUnderTag(person.ptags)) {
              return (
                <Col
                  key={i}
                  lg={{ span: 2, offset: 1 }}
                  md={{ span: 2, offset: 1 }}
                  sm={6}
                >
                  <Person key={person.id} person={person} />
                </Col>
              );
            }
          })}
      </Row>
    </div>
  );
};

export default PeopleCategory;
