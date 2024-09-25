import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Collaborate from "../components/sections/collaborate/Collaborate";
import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/Navbar";

const Layout = () =>
{
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}


export default Layout;
