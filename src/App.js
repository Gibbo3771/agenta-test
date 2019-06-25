// @flow

import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button
        color="orange"
        name="test-button"
        onClick={() => console.log("yay")}
        text="Schedule Meeting"
      />
    </div>
  );
}

export default App;
