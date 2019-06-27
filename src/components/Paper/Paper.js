// @flow

import React from "react";

export type Props = {
  children?: any
};

const Paper = (props: Props) => {
  return <div className="paper">{props.children}</div>;
};

export default Paper;
