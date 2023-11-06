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
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              fontWeight: "bold",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              fontWeight: "bold",
              color: "white",
            },
          },
        }}
      ></Toaster>
    </div>
  );
};

export default Layout;
