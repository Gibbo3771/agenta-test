// @flow

import React from "react";

export type Props = {
  children?: any,
  gutters?: boolean,
  customStyling?: string
};

const Grid = (props: Props) => {
  return (
    <div
      className={
        "grid " +
        (props.gutters ? "gutters " : "") +
        (props.customStyling ? props.customStyling : "")
      }
    >
      {props.children}
    </div>
  );
};

export default Grid;
