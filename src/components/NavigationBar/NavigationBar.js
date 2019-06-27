// @flow

import React from "react";
import InputDefault from "../Input/InputDefault";
import Button from "../Button/Button";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <InputDefault id="test-input" name="test-input" type="text" />
      <section />
      <section>
        <p>Profile</p>
      </section>
      <section>
        <p>Admin</p>
      </section>
      <section>
        <Button
          name="test-button-white"
          color="white"
          onClick={() => console.log("Clicked white button")}
          text="Logout"
        />
      </section>
    </div>
  );
};

export default NavigationBar;
