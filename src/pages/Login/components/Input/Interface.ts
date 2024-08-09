import React from "react";

export interface IInput extends React.HTMLProps<HTMLInputElement> {
  title?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name: string;
  disabled?: boolean;
  error: string;
  updateInput?: (name: string, value: string) => void;
}
