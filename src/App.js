// @flow

import React from "react";
import Button from "./components/Button/Button";
import InputDefault from "./components/Input/InputDefault";
import InputLabel from "./components/Input/InputLabel";

function App() {
  return (
    <div>
      <InputLabel htmlFor="test-input" text="Test" />
      <InputDefault id="test-input" type="text" />
    </div>
  );
}

export default App;
