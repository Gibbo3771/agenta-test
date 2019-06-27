// @flow
import React from "react";

export type Props = {
  children?: any,
  col?: string,
  span?: string,
  alignTop?: boolean,
  alignBottom?: boolean,
  alignCenter?: boolean,
  justifyLeft?: boolean,
  justifyRight?: boolean,
  justifyCenter?: boolean
};

const GridItem = (props: Props) => {
  const mapClasses = () => {
    const {
      col,
      span,
      alignTop,
      alignBottom,
      alignCenter,
      justifyLeft,
      justifyRight,
      justifyCenter
    } = props;
    const classes = [];
    if (col) classes.push(`col-start--${col}`);
    if (span) classes.push(`col-span--${span}`);

    const keys = Object.keys(props);
    for (let key of keys) {
      if (key === "col" || key === "span" || key === "children") continue;
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
