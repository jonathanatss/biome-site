import React, { useState } from "react";
import { Container, Row, ButtonGroup, Modal, Button } from "react-bootstrap";
import Image from "next/image";

import styles from "./Person.module.css";
import { backend_url, basePath } from "../../../utils/conf";

const Person = ({ person }) => {
  const sigaa = person.sigaa !== null && person.sigaa !== "";
  const scholar = person.scholar !== null && person.scholar !== "";
  const lattes = person.lattes !== null && person.lattes !== "";
  const picture = person.picture[0] == null ? null : person.picture[0].url;
  const url = "https://bioinfo.imd.ufrn.br/sitebiome-api"; //ver forma de usar import
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className={styles.person_block}
        key={person.id}
        onClick={handleShow}
        style={{
          cursor: "pointer",
          maxWidth: "170px",
          margin: "20px 20px",
          textAlign: "center",
        }}
      >
        <Row className="justify-content-center">
          {picture ? (
            <div
              className="Person"
              style={{
                backgroundImage: `url("${backend_url}/${person.picture[0].url}")`,
                backgroundSize: "150px",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
            ></div>
          ) : (
            <div
              className="Person"
              style={{
                backgroundImage: `url(/${basePath}/images/icons/person-icon.png)`,
                backgroundSize: "150px",
                borderRadius: "50%",
                height: "150px",
                width: "150px",
              }}
            ></div>
          )}
          <p>
            {person.reduced_name}
            <br />
            <small>{person.assignment}</small>
            <small>
              {person.ptags &&
                person.ptags.map((tagObj) => {
                  return tagObj.tag + "\n";
                })}
            </small>
          </p>
        </Row>
      </div>

      <Modal key={person.id} show={show} onHide={handleClose}>
        <Container>
          <Modal.Header className={styles.modal_header_button} closeButton />
          <Modal.Body>
            <Row className={styles.img_div}>
              {picture && (
                <Image
                  className={styles.img_modal}
                  width={200}
                  height={250}
                  quality={100}
                  src={`${backend_url}/${person.picture[0].url}`}
                  objectFit="fill"
                  alt={person.name}
                />
              )}
            </Row>

            <Row className={styles.text_modal}>
              <h5>{person.name}</h5>
            </Row>

            <Row className={styles.text_modal}>
              <h6>{person.email}</h6>
            </Row>

            <Row className="justify-content-center px-5">
              <ButtonGroup className={styles.buttons}>
                {lattes && (
                  <Button href={person.lattes} variant="primary">
                    Lattes
                  </Button>
                )}
                {scholar && (
                  <Button href={person.scholar} variant="primary">
                    Scholar
                  </Button>
                )}
                {sigaa && (
                  <Button href={person.sigaa} variant="primary">
                    Sigaa
                  </Button>
                )}
              </ButtonGroup>
            </Row>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
};

export default Person;
