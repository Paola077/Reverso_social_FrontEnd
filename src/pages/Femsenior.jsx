import React from "react";
import { Outlet } from "react-router-dom";
import Manifest from "../components/sections/manifest/Manifest";
import ManifestButton from "../components/buttons/manifestButton/ManifestButton";

function Femsenior() {
  return (
    <>
       <div className="manifestContainer">
      <Manifest/>
      <ManifestButton/>
      </div>
      <Outlet />
    </>
  );
}

export default Femsenior;
