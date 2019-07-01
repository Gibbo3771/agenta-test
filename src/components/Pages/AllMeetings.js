// @flow
import React from "react";
import { withRouter } from "react-router-dom";

import Grid from "../Layout/Grid/Grid";
import Flex from "../Layout/Flex/Flex";
import Paper from "../Paper/Paper";
import Meeting from "../Meeting/Meeting";
import GridItem from "../Layout/Grid/GridItem";

export type Props = {};

class AllMeetings extends React.Component<Props> {
  render() {
    return (
      <Flex direction="flex--direction-col">
        <Grid gutters customStyling="grid--small">
          <GridItem colStart="1" colEnd="12" justifyLeft>
            <h3 className="header header--l">Scheduled Meetings (number)</h3>
          </GridItem>
          <GridItem colStart="1" colEnd="2" justifyCenter>
            <div>CALL ID</div>
          </GridItem>
          <GridItem colStart="2" colEnd="4" justifyLeft>
            <div>OWNER</div>
          </GridItem>
          <GridItem colStart="4" colEnd="6" justifyLeft>
            <div>NAME</div>
          </GridItem>
          <GridItem colStart="6" colEnd="8" justifyLeft>
            <div>DATE</div>
          </GridItem>
          <GridItem colStart="8" colEnd="10" justifyLeft>
            <div>TIME</div>
          </GridItem>
          <GridItem colStart="1" colEnd="12">
            <Meeting
              callID="1"
              owner="Stephen Gibson"
              name="Code Review"
              datetime={new Date()}
            />
          </GridItem>
        </Grid>
      </Flex>
    );
  }
}

export default withRouter(AllMeetings);
