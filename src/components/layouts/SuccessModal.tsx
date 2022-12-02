import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Figure from "react-bootstrap/Figure";
import { BTN, Text, Heading } from "./";

import { StoreContext } from "../../store/AppContext";
import { success } from "../../utils/data";

const SuccessModal: React.FC = () => {
  const { successModalIsOpen, setSuccessModalIsOpen } =
    useContext(StoreContext);

  const handleClose = () => setSuccessModalIsOpen(false);

  return (
    <Modal show={successModalIsOpen} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Figure className="mx-auto">
        <Figure.Image src={success.fig} alt="checked" />
      </Figure>
      <Modal.Body className="d-flex flex-column align-items-center py-2rem">
        <Heading as="h3" title={success.title} />
        <Text className="mt-1rem">{success.description}</Text>
        <BTN
          title="Got it!"
          className="mt-1rem"
          onClick={() => setSuccessModalIsOpen(false)}
        />
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;
