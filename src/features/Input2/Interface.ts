import React from "react";

export interface IInput extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name: string;
  disabled?: boolean;
  updateInput?: (name: string, value: string) => void;
  inputColor?: string;
  borderColor?: string;
}
