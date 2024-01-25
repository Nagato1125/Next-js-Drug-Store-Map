import React from "react";
import Notification from "./Notification";
import Title from "./Title";

const Sidebar = () => {
  return (
    <aside className="p-3 flex flex-col md:justify-between">
      <Title />
      {/* <Notification /> */}
    </aside>
  );
};

export default Sidebar;
