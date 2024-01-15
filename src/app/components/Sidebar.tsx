import React from "react";
import Notification from "./Notification";
import Title from "./Title";

const Sidebar = () => {
  return (
    <aside className="w-96 h-svh p-3 flex flex-col justify-between">
      <Title />
      {/* <Notification /> */}
    </aside>
  );
};

export default Sidebar;
