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
  const isFormPage = location.pathname.startsWith( "/formulario" );
 const isLogin =
   location.pathname === "/reverso-social/login" ||
   location.pathname === "/reverso-social/signin";
  return (
    <div className="layoutContainer">
      <div
        className={`gradientContainer ${
          isFormPage || isLogin
            ? "transparentGradient"
            : isFemseniors
            ? "femseniorGradient"
            : "reversoGradient"
        }`}
      >
        {!isFormPage && <Navbar className="layout-navbar" />}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      {!isFormPage && !isLogin && <Footer className="layoutFooter" />}
    </div>
  );
};

export default Layout;
