// @flow

import React, { Component } from "react";

export type MappableClasses = {
  [key: string]: boolean | void
};

const mapClasses = (mappableClasses: MappableClasses) => {
  let mapped = [];
  mapped = Object.keys(mappableClasses).filter((key: string) => {
    return mappableClasses[key];
  });
  return mapped.join(" ");
};

export { mapClasses };
