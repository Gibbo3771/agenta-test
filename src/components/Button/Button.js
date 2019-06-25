// @flow
import * as React from "react";

export type Props = {
  disabled?: boolean,
  autofocus?: boolean,
  name: string,
  text: string,
  color: string,
  onClick: (evt: SyntheticEvent<HTMLButtonElement>) => void
};

const Button = (props: Props) => {
  const { disabled, autofocus, name, text, color, onClick } = props;
  return (
    <button
      type="button"
      className={`button button--color-${color}`}
      disabled={disabled}
      autoFocus={autofocus}
      name={name}
      onClick={(evt: SyntheticEvent<HTMLButtonElement>) => onClick(evt)}
    >
      {text}
    </button>
  );
};

export default Button;
