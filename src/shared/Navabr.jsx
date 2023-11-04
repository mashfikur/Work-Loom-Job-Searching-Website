import { Link, NavLink } from "react-router-dom";
import navlogo from "../assets/images/final-logo.png";
import useAuthContext from "../hooks/useAuthContext";
import { MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const Navabr = () => {
  const { user, userSignOut } = useAuthContext();

  const navLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/demo"}>All Jobs</NavLink>
      {user ? (
        <>
          <NavLink to={"/demo"}>Applied Jobs</NavLink>
          <NavLink to={"/demo"}>Add A Job</NavLink>
          <NavLink to={"/demo"}>My Jobs</NavLink>
        </>
      ) : (
        ""
      )}
      <NavLink to={"/demo"}>Blogs</NavLink>
    </>
  );

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div className="border-b-[1px] border-[#E1DBE1]">
        <div className="navbar container py-5 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content border-2 mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-3 text-third font-bold"
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              <div className="flex gap-2 items-center">
                <div>
                  <img className="w-16" src={navlogo} alt="" />
                </div>
                <h3 className="font-raleway  normal-case text-xl lg:text-4xl">
                  Work <span className="text-third">Loom</span>
                </h3>
              </div>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex space-x-4">
            {user ? (
              <ul className="flex font-semibold items-center gap-6 px-1">
                {navLinks}
              </ul>
            ) : (
              <div className="space-x-3 ">
                <Link to={"/register"}>
                  <button className="btn rounded-full btn-outline border-main text-main hover:bg-main hover:border-transparent    hover:text-black">
                    Register
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className="btn rounded-full bg-main hover:bg-main   ">
                    login
                  </button>
                </Link>
              </div>
            )}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  className="tooltip tooltip-right"
                  data-tip={`${user?.displayName}`}
                >
                  <label
                    tabIndex={0}
                    className=" btn btn-circle btn-ghost  hover:border-main hover:border-4 avatar"
                  >
                    <div className="w-10 rounded-full border-red-300 ">
                      <img
                        className=""
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : `https://i.ibb.co/Jd8YMt3/avatar.png`
                        }
                      />
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="">
                    <p className=" mx-auto font-semibold text-xl">
                      <MdAccountCircle></MdAccountCircle> {user?.displayName}
                    </p>
                  </li>
                  <li className="mt-5">
                    <button
                      onClick={handleSignOut}
                      className="btn btn-error hover:bg-error btn-sm rounded-full my-auto"
                    >
                      <FiLogOut></FiLogOut> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="navbar-end  lg:hidden">
            {user ? (
              <div className="dropdown dropdown-end">
                <div>
                  <label
                    tabIndex={0}
                    className=" btn btn-circle  hover:border-main hover:border-4 avatar"
                  >
                    <div className="w-10 rounded-full border-main ">
                      <img
                        src={
                          user?.photoURL
                            ? user.photoURL
                            : `https://i.ibb.co/Jd8YMt3/avatar.png`
                        }
                      />
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="">
                    <p className=" mx-auto font-semibold text-xl">
                      <MdAccountCircle></MdAccountCircle> {user.displayName}
                    </p>
                  </li>
                  <li className="mt-5">
                    <button
                      onClick={handleSignOut}
                      className="btn btn-error hover:bg-error btn-sm rounded-full my-auto"
                    >
                      <FiLogOut></FiLogOut> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-x-3">
                <Link to={"/register"}>
                  <button className="btn px-2 btn-outline border-main text-main hover:bg-main hover:border-transparent   capitalize hover:text-black">
                    Register
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className="btn px-2 bg-main hover:bg-main capitalize  ">
                    login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
