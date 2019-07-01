// @flow

import React from "react";

import { mapClasses } from "../Util/ClassMapper";

export type Props = {
  children?: any,
  customStyling?: string
};

const Paper = (props: Props) => {
  const { children, customStyling } = props;
  const classes = {
    paper: true,
    [customStyling ? `${customStyling}` : ""]: customStyling ? true : false
  };
  return <div className={mapClasses(classes)}>{children}</div>;
};

export default Paper;
