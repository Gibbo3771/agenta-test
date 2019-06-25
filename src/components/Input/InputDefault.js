// @flow
import React from "react";

// For checking that 'type' is valid
export const REQUIRES_DEFAULT = ["text", "number", "time", "date", "hidden"];

export type Props = {
  id: string,
  type: string,
  name?: string,
  value?: any,
  placeholder?: string,
  readOnly?: boolean,
  disabled?: boolean,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number,
  label?: string
};

const InputDefault = (props: Props) => {
  const {
    id,
    type,
    name,
    value,
    placeholder,
    readOnly,
    disabled,
    required,
    minLength,
    maxLength,
    min,
    max,
    label
  } = props;
  if (!REQUIRES_DEFAULT.includes(type))
    throw new Error(`Input (id: ${id}) has an invalid type`);
  return (
    <input
      className="input-default"
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      disable={disabled}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
      label={label}
    />
  );
};

export default InputDefault;
