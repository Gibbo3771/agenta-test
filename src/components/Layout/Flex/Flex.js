// @flow

import React from "react";
import { mapClasses } from "../../Util/ClassMapper";

export type Props = {
  children?: any,
  directionRow?: boolean,
  directionCol?: boolean,
  justifyCenter?: boolean,
  justifyLeft?: boolean,
  justifyRight?: boolean,
  justifySpaceAround?: boolean,
  justifySpaceBetween?: boolean,
  justifySpaceEvenly?: boolean,
  alignTop?: boolean,
  alignBottom?: boolean,
  alignCenter?: boolean,
  alignStretch?: boolean,
  alignBaseline?: boolean,
  customStyling?: string
};

const Flex = (props: Props) => {
  const {
    children,
    directionRow,
    directionCol,
    justifyCenter,
    justifyLeft,
    justifyRight,
    justifySpaceAround,
    justifySpaceBetween,
    justifySpaceEvenly,
    alignTop,
    alignBottom,
    alignCenter,
    alignStretch,
    alignBaseline,
    customStyling
  } = props;
  const classes = {
    flex: true,
    "flex--direction-row": directionRow,
    "flex--direction-col": directionCol,
    "flex--justify--center": justifyCenter,
    "flex--justify--left": justifyLeft,
    "flex--justify--right": justifyRight,
    "flex--justify--space-around": justifySpaceAround,
    "flex--justify--space-between": justifySpaceBetween,
    "flex--justify--spaced-evenly": justifySpaceEvenly,
    "flex--align--top": alignTop,
    "flex--align--bottom": alignBottom,
    "flex--align--center": alignCenter,
    "flex--align--stretch": alignStretch,
    "flex--align--baseline": alignBaseline,
    [customStyling ? `${customStyling}` : ""]: customStyling ? true : false
  };
  return <div className={mapClasses(classes)}>{props.children}</div>;
};

export default Flex;
