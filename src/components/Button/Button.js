// @flow
import * as React from "react";

export type Props = {
  disabled?: boolean,
  autofocus?: boolean,
  name: string,
  text: string,
  color: string,
  onClick: (evt: SyntheticEvent<HTMLButtonElement>) => void,
  styles?: string
};

const Button = (props: Props) => {
  const { disabled, autofocus, name, text, color, onClick, styles } = props;
  return (
    <button
      type="button"
      className={`button button--color-${color} ${styles ? styles : ""}`}
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
