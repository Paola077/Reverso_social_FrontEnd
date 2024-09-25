import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./_Layout.scss"; 

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="gradient-reverso">
        <Navbar className="layout-navbar" />
        <main>
          <Outlet />
        </main>
      </div>
      {/* <Footer className="layout-footer" /> */}
    </div>
  );
};

export default Layout;
