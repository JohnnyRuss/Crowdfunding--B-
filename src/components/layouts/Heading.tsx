import React from "react";

interface HeadingType {
  as: "h1" | "h2" | "h3";
  className?: string;
  title: string;
  align?: string;
}

const Heading: React.FC<HeadingType> = ({ as, className, title, align="center" }) => {
  return as === "h1" ? (
    <h1 className={`text-black fs-app-h1 text-${align} ${className || ""}`}>
      {title}
    </h1>
  ) : as === "h2" ? (
    <h2 className={`text-black fs-app-h2 text-${align} ${className || ""}`}>
      {title}
    </h2>
  ) : (
    <h3 className={`text-black fs-app-h3 text-${align} ${className || ""}`}>
      {title}
    </h3>
  );
};

export default Heading;
