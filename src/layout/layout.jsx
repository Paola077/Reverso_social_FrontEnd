import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
        
      </main>
     
    </div>
    
  );
};

export default Layout;
