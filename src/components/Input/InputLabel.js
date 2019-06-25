// @flow
import React from "react";

export type Props = {
  htmlFor: string,
  text: string
};

const InputLabel = (props: Props) => {
  const { htmlFor, text } = props;
  return <label htmlFor={htmlFor}>{text}</label>;
};

export default InputLabel;
