// @flow

import React from "react";
import Paper from "../Paper/Paper";
import Grid from "../Layout/Grid/Grid";
import GridItem from "../Layout/Grid/GridItem";

export type Props = {
  callID: string,
  owner: string,
  name: string,
  datetime: Date
};

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const parseDate = (date: Date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const parseTime = (date: Date) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit"
  };
  return date.toLocaleTimeString("en-us", options);
};

const Meeting = (props: Props) => {
  return (
    <Paper>
      <Grid gutters>
        <GridItem colStart="1" justifyCenter>
          <p className="call-id">{props.callID}</p>
        </GridItem>
        <GridItem colStart="2" colEnd="4" justifyLeft>
          <div>{props.owner}</div>
        </GridItem>
        <GridItem colStart="4" colEnd="6" justifyLeft>
          <div>{props.name}</div>
        </GridItem>
        <GridItem colStart="6" colEnd="8" justifyLeft>
          {parseDate(props.datetime)}
        </GridItem>
        <GridItem colStart="8" colEnd="10" justifyLeft>
          {parseTime(props.datetime)}
        </GridItem>
      </Grid>
    </Paper>
  );
};

export default Meeting;
