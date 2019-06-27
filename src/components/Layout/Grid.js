// @flow

import React from "react";

export type Props = {
  children?: any,
  gutters?: boolean
};

const Grid = (props: Props) => {
  return (
    <div className={"grid " + (props.gutters ? "gutters" : "")}>
      {props.children}
    </div>
  );
};

export default Grid;
