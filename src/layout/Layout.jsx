import { Outlet } from "react-router-dom";
import Navabr from "../shared/Navabr";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <div>
      <Navabr></Navabr>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
