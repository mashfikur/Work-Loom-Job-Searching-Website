import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import navlogo from "../assets/images/final-logo.png";

const Register = () => {
  return (
    <div className="bg-base-200 lg:px-8  py-10">
      <Helmet>
        <title>Work Looms | Register </title>
      </Helmet>
      <div className=" container p-4 xl:p-0 mx-auto shadow-2xl bg-white rounded-lg ">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex-1">
            <img className="mx-auto w-[60%] " src={navlogo} alt="" />
            <div className="text-center">
              <h1 className="lg:text-5xl text-3xl font-inter font-bold">
                Create your account
              </h1>
              <p className="font-inter font-semibold mt-4  text-gray-400">
                Start Exploring Your Future With Millions of{" "}
                <span className="text-[#5bbc6b]">Oppurtunites</span>
              </p>
            </div>
          </div>
          <div className="hero flex-1 min-h-[80vh] pb-5  ">
            <div className="hero-content flex-col  md:w-[80%] ">
              <div className="card  w-full  border-2 bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered focus:border-none focus:outline-third "
                      required
                      name="name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered focus:border-none focus:outline-third "
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered focus:border-none focus:outline-third "
                      required
                      name="password"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#5BBC6B] shadow-xl border-none font-inter font-semibold text-white rounded-full hover:bg-[#5BBC6B]">
                      Register
                    </button>
                  </div>
                </form>
                <div className="divider -mt-4">OR</div>
                <div className=" flex items-center px-7 mb-6 justify-center">
                  <button className="btn w-full rounded-full shadow-xl border-2 font-inter font-semibold">
                    <FcGoogle className="text-xl"></FcGoogle>
                    Sign Up With Google
                  </button>
                </div>
                <div className="text-center  font-inter font-semibold mb-6">
                  <p className="">
                    Already have an account ?{" "}
                    <Link to={"/login"} className="text-third btn-link">
                      Login
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
