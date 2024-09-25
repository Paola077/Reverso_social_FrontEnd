import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./_Layout.scss";

const Layout = () => {
  const location = useLocation();

  const isFormPage = location.pathname.startsWith("/formulario")
  return (
    <div className="layout-container">
      <div className="gradient-container">
          {!isFormPage && <Navbar  className="layout-navbar"/>}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
