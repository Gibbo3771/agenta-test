// @flow-disable
// Yep ^ Nightmare with axios

import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import AllMeetings from "../components/Pages/AllMeetings";
import NavigationBar from "../components//NavigationBar/NavigationBar";
import Meeting from "../components/Meeting/Meeting";

export type Props = {};

export type State = {
  meetings: any
};

export default class extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      meetings: []
    };
    this.getAllMeetings = this.getAllMeetings.bind(this);
  }

  async componentDidMount() {
    await this.getAllMeetings();
  }

  async getAllMeetings() {
    const promises = [
      axios.get("https://coding-test.ajenta.io/meetings"),
      axios.get("https://coding-test.ajenta.io/users")
    ];
    await axios.all(promises).then(res => {
      console.log(res);
      res[0].data.forEach(meeting => {
        res[1].data.forEach(user => {
          if (meeting.owner === user.id) meeting.owner = user;
        });
      });
      this.setState({ meetings: res[0].data });
    });
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Route
          exact
          path="/meetings"
          render={() => <AllMeetings meetings={this.state.meetings} />}
        />
        <Route exact path="schedule-meeting" />
      </>
    );
  }
}
