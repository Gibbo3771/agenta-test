// @flow

import React from "react";
import Paper from "../Paper/Paper";
import Grid from "../Layout/Grid/Grid";
import GridItem from "../Layout/Grid/GridItem";

type Owner = {
  id: number,
  first_name: string,
  last_name: string,
  email: string
};

export type Props = {
  callid: string,
  owner: Owner,
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
    <Paper customStyling="meeting--margin-top--1em">
      <Grid gutters>
        <GridItem colStart="1" justifyCenter alignCenter>
          <p className="call-id">{props.callid}</p>
        </GridItem>
        <GridItem colStart="2" colEnd="4" justifyLeft alignCenter>
          <div>{`${props.owner.first_name} ${props.owner.last_name}`}</div>
        </GridItem>
        <GridItem colStart="4" colEnd="6" justifyLeft alignCenter>
          <div>{props.name}</div>
        </GridItem>
        <GridItem colStart="6" colEnd="8" justifyLeft alignCenter>
          {parseDate(props.datetime)}
        </GridItem>
        <GridItem colStart="8" colEnd="10" justifyLeft alignCenter>
          {parseTime(props.datetime)}
        </GridItem>
      </Grid>
    </Paper>
  );
};

export default Meeting;
