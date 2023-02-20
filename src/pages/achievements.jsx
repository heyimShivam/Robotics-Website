/** @format */

import "./pages.css";
import Achievements from "../components/Achievements";
import React from "react";

function Achievement() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Achievements />
    </>
  );
}

export default Achievement;
