import React from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";

import { header } from "../../utils/data";

const Header: React.FC = () => {
  return (
    <Container fluid className="text-light p-0">
      <Navigation navRoutes={header.navRoutes} />
      <picture>
        <source media="(min-width:768px)" srcSet={header.fig.desktop} />
        <source media="(min-width:280px)" srcSet={header.fig.mobile} />
        <img src={header.fig.desktop} alt="hero illustration" className="w-full mt-n5rem" />
      </picture>
    </Container>
  );
};

export default Header;
