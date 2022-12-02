import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

import { processBar } from "../../utils/data";

const ProcessBar: React.FC = () => {
  return (
    <Container className="bg-light mw-90 mw-md-60rem p-2rem p-sm-4rem rounded-small shadow-small mt-7rem">
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <p className="flex-grow-1 d-flex flex-column align-items-center gap-3 px-1rem border-r-none border-r-sm-1 border-b-1 border-b-sm-none pb-1rem">
          <span className="text-black fw-bold fs-app-h2">
            ${processBar.backed.done}
          </span>
          <span className="text-gray">of ${processBar.backed.from} backed</span>
        </p>
        <p className="flex-grow-1 d-flex flex-column align-items-center gap-3 px-1rem border-r-none border-r-sm-1 border-b-1 border-b-sm-none pb-1rem">
          <span className="text-black fw-bold fs-app-h2">
            {processBar.total}
          </span>
          <span className="text-gray">total backers</span>
        </p>
        <p className="flex-grow-1 d-flex flex-column align-items-center gap-3 px-1rem">
          <span className="text-black fw-bold fs-app-h2">
            {processBar.daysLeft}
          </span>
          <span className="text-gray">days left</span>
        </p>
      </div>
      <ProgressBar variant="cyan" now={60} className="mt-3rem" />
    </Container>
  );
};

export default ProcessBar;
