import React from "react";

interface TextType {
  children: React.ReactNode;
  className?: string;
  align?: string;
}

const Text: React.FC<TextType> = ({ children, className, align="center" }) => {
  return (
    <p className={`${className || ""} text-gray text-${align}`}>{children}</p>
  );
};

export default Text;
