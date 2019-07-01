// @flow

import React from "react";
import InputDefault from "../Input/InputDefault";
import Button from "../Button/Button";
import Grid from "../Layout/Grid/Grid";
import GridItem from "../Layout/Grid/GridItem";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <Grid>
        <GridItem colStart="2" colEnd="8">
          <InputDefault
            id="test-input"
            name="test-input"
            type="text"
            placeholder="Search"
          />
        </GridItem>
        <GridItem colStart="8" alignCenter justifyRight>
          <p className="fake-link">Profile</p>
        </GridItem>
        <GridItem colStart="9" alignCenter justifyCenter>
          <p className="fake-link">Admin</p>
        </GridItem>
        <GridItem colStart="10" alignCenter justifyCenter>
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
