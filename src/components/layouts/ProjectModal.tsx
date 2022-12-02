import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Heading, BTN, Text } from "./";

import styles from "./projectModal.module.scss";

import { StoreContext } from "../../store/AppContext";
import { backToProjectModal } from "../../utils/data";

const ProjectModal: React.FC = () => {
  const { projectModalIsOpen, setProjectModalIsOpen } =
    useContext(StoreContext);
  const [activeStand, setActiveStand] = useState<string>("");

  const handleClose = () => setProjectModalIsOpen(false);

  return (
    <Modal show={projectModalIsOpen} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Modal.Body>
        <Heading as="h3" title={backToProjectModal.title} align="start" />
        <Text className="mt-1rem" align="start">
          {backToProjectModal.description}
        </Text>
      </Modal.Body>
      <Modal.Body className="d-flex flex-column gap-4">
        {backToProjectModal.stands.map((stand) => (
          <Card
            key={stand.id}
            className={`p-1rem ${
              activeStand === stand.id ? "border-cyan" : ""
            } ${stand.disabled ? "opacity-50" : ""} ${styles["project-card"]}`}
          >
            <Form.Check
              inline
              name="stand"
              type="radio"
              id={stand.id}
              checked={activeStand === stand.id}
              className={`${styles["card-check"]}`}
              onChange={() => !stand.disabled && setActiveStand(stand.id)}
            />
            <Card.Header
              className={`border-0 d-flex flex-column flex-sm-row p-0 gap-sm-4 bg-white fw-semibold ${styles["card-header-box"]}`}
            >
              <Form.Check.Label className="cursor-pointer" htmlFor={stand.id}>
                {stand.title}
              </Form.Check.Label>
              {stand.offer && (
                <Card.Text className="text-cyan">
                  Pledge ${stand.offer} or more
                </Card.Text>
              )}
            </Card.Header>
            {stand.left && (
              <Card.Text className={`${styles["card-left"]}`}>
                <span className="fw-bold fs-lg">{stand.left}</span> left
              </Card.Text>
            )}
            <Card.Body className={`text-gray ${styles["card-desc"]}`}>
              <Card.Text>{stand.description}</Card.Text>
            </Card.Body>
            {activeStand === stand.id && (
              <Card.Footer
                className={`d-flex justify-content-between align-items-center py-1rem bg-white ${styles["card-footer-box"]}`}
              >
                <Card.Text>Enter your pledge</Card.Text>
                <Form className="d-flex gap-4">
                  <Form.Control
                    type="number"
                    className="w-10rem rounded-large fs-lg"
                    min={stand.offer || 0}
                  />
                  <BTN title="Continue" />
                </Form>
              </Card.Footer>
            )}
          </Card>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
