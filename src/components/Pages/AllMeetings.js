// @flow
import React from "react";
import { withRouter } from "react-router-dom";

import Grid from "../Layout/Grid/Grid";
import Flex from "../Layout/Flex/Flex";
import Paper from "../Paper/Paper";
import Meeting from "../Meeting/Meeting";
import GridItem from "../Layout/Grid/GridItem";

export type Props = {
  meetings: Array<typeof Meeting>
};

class AllMeetings extends React.Component<Props> {
  render() {
    const { meetings } = this.props;
    return (
      <Flex directionCol alignCenter customStyling="meetings--padding-top">
        <Grid customStyling="grid--small">
          <GridItem colStart="1" colEnd="12" justifyLeft>
            <h3 className="header header--l">
              Scheduled Meetings ({meetings.length})
            </h3>
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
            <div>START</div>
          </GridItem>
          <GridItem colStart="1" colEnd="12">
            {this.props.meetings.map(meeting => (
              <Meeting
                key={meeting.callid}
                callid={meeting.callid}
                owner={meeting.owner}
                name={meeting.name}
                datetime={new Date(meeting.start_time)}
              />
            ))}
          </GridItem>
        </Grid>
      </Flex>
    );
  }
}

export default withRouter(AllMeetings);
