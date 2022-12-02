import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";

import { Heading, Text, BTN } from "../layouts";

import { StoreContext } from "../../store/AppContext";
import { mastercraftIntro } from "../../utils/data";

const MastercraftIntro: React.FC = () => {
  const { setProjectModalIsOpen } = useContext(StoreContext);

  return (
    <Container className="position-relative z-10 bg-light text-light mw-90 mw-md-60rem px-2rem py-3rem px-sm-4rem py-sm-4rem rounded-small shadow-small mt-n10rem mt-md-n5rem">
      <Figure className="position-absolute top-0 start-50 translate-middle">
        <Figure.Image src={mastercraftIntro.fig} />
      </Figure>
      <Heading as="h2" title={mastercraftIntro.title} />
      <Text className="mt-1rem">{mastercraftIntro.description}</Text>
      <div className="d-flex justify-content-between align-items-center mt-3rem gap-1rem">
        <BTN
          title="Back this project"
          onClick={() => setProjectModalIsOpen(true)}
        />
        <button className="d-flex align-items-center gap-4 ps-0 pe-1rem rounded-large border-0">
          <Image
            src="/assets/icon-bookmark.svg"
            alt="bookmark button"
            className="w-4rem"
          />
          Bookmark
        </button>
      </div>
    </Container>
  );
};

export default MastercraftIntro;
