import React from "react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <div>
      <button>Return to top</button>
      <Icon icon="mdi:github" />
      <Icon icon="ic:baseline-facebook" />
      <Icon icon="mdi:instagram" />
      <Icon icon="mdi:linkedin" />
    </div>
  );
};

export default Sidebar;
