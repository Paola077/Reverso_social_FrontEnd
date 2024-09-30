import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./_Layout.scss";

const Layout = () => {
  const location = useLocation();
  const isFemseniors = location.pathname.startsWith(
    "/reverso-social/femsenior"
  );
  const isReversoSocial = location.pathname === "/reverso-social";
  const isFormPage = location.pathname.startsWith("/formulario");

  return (
    <div className="layout-container">
      {/* Aplica diferentes clases dependiendo de la página */}
      <div
        className={`gradient-container ${
          isFemseniors ? "femsenior-gradient" : "reverso-gradient"
        }`}
      >
        {!isFormPage && <Navbar className="layout-navbar" />}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
