import React from "react";

export interface IInput extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  className?: string;
  name: string;
  img: any;
  text: string;
  updateInput?: (name: string, value: string) => void;
  border?: string;
  color?: string;
}
