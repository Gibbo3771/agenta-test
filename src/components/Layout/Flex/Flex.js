// @flow

import React from "react";

export type Props = {
  children?: any,
  direction?: string
};

const Flex = (props: Props) => {
  return (
    <div className={`flex ${props.direction ? props.direction : ""}`}>
      {props.children}
    </div>
  );
};

export default Flex;
