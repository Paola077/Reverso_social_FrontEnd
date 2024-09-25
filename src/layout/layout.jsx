import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Collaborate from "../components/sections/collaborate/Collaborate";
import Carousel from "../components/carousel/Carousel";
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
