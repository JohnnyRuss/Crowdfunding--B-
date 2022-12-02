import React from "react";

interface BTNType {
  className?: string;
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const BTN: React.FC<BTNType> = ({
  className,
  title,
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      className={`filter-bright-110-hover px-3 px-sm-4 py-3 bg-cyan bg-dark-cyan-hover border-0 rounded-large text-light ${
        disabled ? "cursor-not-allowed" : ""
      } ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BTN;
