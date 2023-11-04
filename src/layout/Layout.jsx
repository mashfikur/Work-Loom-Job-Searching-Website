import { Outlet } from "react-router-dom";
import Navabr from "../shared/Navabr";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Navabr></Navabr>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
