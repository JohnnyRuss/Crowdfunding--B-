import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Heading, Text, BTN } from "../layouts";

import { StoreContext } from "../../store/AppContext";
import { about } from "../../utils/data";

const AboutProject: React.FC = () => {
  const { setSuccessModalIsOpen } = useContext(StoreContext);

  return (
    <Container className="bg-light mw-90 mw-md-60rem p-2rem p-sm-4rem rounded-small shadow-small mt-7rem">
      <Heading as="h3" title={about.title} align="start" />
      <Text align="start" className="mt-3rem">
        {about.p1}
      </Text>
      <Text align="start" className="mt-2rem">
        {about.p2}
      </Text>
      <div className="d-flex flex-column gap-5 mt-5rem">
        {about.stands.map((stand) => (
          <Card
            key={stand.id}
            className={`p-2rem ${
              stand.disabled ? "opacity-50" : "shadow-tiny"
            }`}
          >
            <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center p-0">
              <Card.Title className="fs-app-h3">{stand.title}</Card.Title>
              <Card.Text className="fw-semibold text-cyan">
                Pledge ${stand.offer} or more
              </Card.Text>
            </Card.Body>
            <Card.Text className="mt-2rem">{stand.description}</Card.Text>
            <Card.Body className="d-flex justify-content-between align-items-center p-0 mt-2rem">
              <Card.Text className="d-flex align-items-center gap-2">
                <span className="fw-bold fs-app-h2">{stand.left}</span>
                left
              </Card.Text>
              <BTN
                title="Select Reward"
                disabled={stand.disabled}
                onClick={() => setSuccessModalIsOpen(true)}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default AboutProject;
