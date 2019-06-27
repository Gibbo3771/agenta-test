// @flow

import React from "react";
import InputDefault from "../Input/InputDefault";
import Button from "../Button/Button";
import Grid from "../Layout/Grid";
import GridItem from "../Layout/GridItem";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Grid gutters>
        <GridItem col="1" span="8">
          <InputDefault id="test-input" name="test-input" type="text" />
        </GridItem>
        <GridItem col="9" alignCenter justifyCenter>
          <p>Profile</p>
        </GridItem>
        <GridItem col="10" alignCenter justifyCenter>
          <p>Admin</p>
        </GridItem>
        <GridItem col="11" alignCenter justifyCenter>
          <Button
            name="test-button-white"
            color="white"
            onClick={() => console.log("Clicked white button")}
            text="Logout"
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default NavigationBar;
