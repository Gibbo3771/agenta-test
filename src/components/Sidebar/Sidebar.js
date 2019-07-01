import React from "react";
import Flex from "../Layout/Flex/Flex";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Flex
        directionCol
        justifyCenter
        customStyling="sidebar__flex--height-100"
      >
        <div>Home</div>
        <div>Schedule</div>
      </Flex>
    </div>
  );
};

export default Sidebar;
