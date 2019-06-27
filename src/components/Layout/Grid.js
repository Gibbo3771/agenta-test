// @flow

import React from "react";

export type Props = {
  children?: any
};

const Grid = (props: Props) => {
  return <div className="grid">{props.children}</div>;
};
