// @flow
import React from "react";
import { mapClasses } from "../../Util/ClassMapper";

export type Props = {
  children?: any,
  colStart?: string,
  colEnd?: string,
  alignTop?: boolean,
  alignBottom?: boolean,
  alignCenter?: boolean,
  justifyLeft?: boolean,
  justifyRight?: boolean,
  justifyCenter?: boolean,
  customStyling?: string
};

const GridItem = (props: Props) => {
  const {
    colStart,
    colEnd,
    alignTop,
    alignBottom,
    alignCenter,
    justifyLeft,
    justifyRight,
    justifyCenter,
    customStyling
  } = props;
  const classes = {
    grid__item: true,
    [colStart ? `col-start--${colStart}` : ""]: colStart ? true : false,
    [colEnd ? `col-end--${colEnd}` : ""]: colEnd ? true : false,
    [customStyling ? `${customStyling}` : ""]: customStyling ? true : false,
    "grid-align--center": alignCenter,
    "grid-align--top": alignTop,
    "grid-align--bottom": alignBottom,
    "grid-justify--center": justifyCenter,
    "grid-justify--right": justifyRight,
    "grid-justify--left": justifyLeft
  };

  return <section className={mapClasses(classes)}>{props.children}</section>;
};

export default GridItem;
