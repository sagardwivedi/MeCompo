import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="bg-blue-500">{label}</button>;
};

export default Button;
