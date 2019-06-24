// @flow
import React from "react";

export type Props = {
  text: string,
  color: string,
  callback: () => void
};

const Button = (props: Props) => {
  const { color, callback, text } = props;
  return (
    <button className={`button button--color-${color}`} onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
