// @flow

import React from "react";
import { mapClasses } from "../../Util/ClassMapper";

export type Props = {
  children?: any,
  gutters?: boolean,
  customStyling?: string
};

const Grid = (props: Props) => {
  const { gutters, customStyling } = props;
  const classes = {
    grid: true,
    gutters: gutters,
    [customStyling ? `${customStyling}` : ""]: customStyling ? true : false
  };
  return <div className={mapClasses(classes)}>{props.children}</div>;
};

export default Grid;
