import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import { Footer } from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
        
      </main>
      <Footer />
    </div>
    
  );
=======
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
>>>>>>> 96a55ad67d9b714eeadf74adcd7e4876f26c69ce
};

export default Layout;
