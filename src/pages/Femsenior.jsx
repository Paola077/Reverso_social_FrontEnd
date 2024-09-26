import React from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../components/sections/manifest/Manifest";

function Femsenior() {
  return (
    <>
       <div className="manifestContainer">
      <Manifest/>
      </div>
      <Outlet />
    </>
  );
}

export default Femsenior;
