// @flow

import React from "react";
import Paper from "../Paper/Paper";

export type Props = {};

const Meeting = (props: Props) => {
  return (
    <Paper>
      <div className="meeting">
        <div className="call-id">3000</div>
        <div>Stephen Gibson</div>
        <div>Review</div>
        <div>12 June 2019</div>
        <div>10:00am</div>
      </div>
    </Paper>
  );
};

export default Meeting;
