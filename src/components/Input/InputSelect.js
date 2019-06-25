// @flow
import * as React from "react";

export type Props = {
  id: string,
  name: string,
  autofocus?: boolean,
  disabled?: boolean,
  form?: string,
  multiple?: boolean,
  required?: boolean,
  size?: number,
  options: Array<string>,
  onChange: (evt: SyntheticEvent<HTMLSelectElement>) => void
};

const InputSelect = (props: Props) => {
  const {
    id,
    name,
    autofocus,
    disabled,
    form,
    multiple,
    required,
    size,
    options,
    onChange
  } = props;
  return (
    <select
      id={id}
      name={name}
      autoFocus={autofocus}
      disabled={disabled}
      form={form}
      multiple={multiple}
      required={required}
      size={size}
      onChange={(evt: SyntheticEvent<HTMLSelectElement>) => onChange(evt)}
    />
  );
};
