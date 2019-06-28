// @flow
import React from "react";

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
  const mapClasses = () => {
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
    const classes = [];
    if (colStart) classes.push(`col-start--${colStart}`);
    if (colEnd) classes.push(`col-end--${colEnd}`);

    const keys = Object.keys(props);
    for (let key of keys) {
      if (key === "colStart" || key === "colEnd" || key === "children")
        continue;
      for (let c = 0; c < key.length; c++) {
        let character = key[c];
        if (character == character.toUpperCase()) {
          classes.push(
            `${[key.slice(0, c), "--", key.slice(c)].join("").toLowerCase()}`
          );
        }
      }
    }
    return classes.join(" ");
  };

  return <section className={mapClasses()}>{props.children}</section>;
};

export default GridItem;
