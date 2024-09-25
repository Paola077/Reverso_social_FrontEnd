import { Outlet } from "react-router-dom";
import Collaborate from "../components/sections/collaborate/Collaborate";

const Layout = () => {
  return (
    <main>
      <Outlet />
      <Collaborate />
    </main>
  );
};

export default Layout;
