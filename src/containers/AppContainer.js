// @flow

import React, { Component } from "react";
import { Route } from "react-router-dom";

import AllMeetings from "../components/Pages/AllMeetings";
import NavigationBar from "../components//NavigationBar/NavigationBar";

export type Props = {};

export default class extends Component<Props> {
  render() {
    return (
      <>
        <NavigationBar />
        <Route exact path="/meetings" render={() => <AllMeetings />} />
        <Route exact path="schedule-meeting" />
      </>
    );
  }
}
