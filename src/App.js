// @flow

import React from "react";
import Button from "./components/Button/Button";
import InputDefault from "./components/Input/InputDefault";
import InputLabel from "./components/Input/InputLabel";
import InputSelect from "./components/Input/InputSelect";
import Paper from "./components/Paper/Paper";
import Meeting from "./components/Meeting/Meeting";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <InputDefault id="test-input" name="test-input" type="text" />
      <Button
        name="test-button-orange"
        color="orange"
        onClick={() => console.log("Clicked orange button")}
        text="Orange Button"
      />
      <Button
        name="test-button-white"
        color="white"
        onClick={() => console.log("Clicked white button")}
        text="White Button"
      />
      <InputSelect
        id="test-select"
        name="test-select"
        options={["Option A", "Option B"]}
      />
      <Paper />
      <Meeting />
    </div>
  );
}

export default App;
