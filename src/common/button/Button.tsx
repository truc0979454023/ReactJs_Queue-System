import React from "react";
import "./Button.css";

type ButtonProps = {
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
  className?: string;
};

const Button = ({ handleSubmit, title, className }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={handleSubmit}>
      {title}
    </button>
  );
};

export default Button;
