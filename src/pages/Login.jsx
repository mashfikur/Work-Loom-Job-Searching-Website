import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-base-200 py-8">
        <div className="container mx-auto">
          <div className="hero min-h-[80vh] pb-5  bg-white rounded-lg ">
            <div className="hero-content flex-col ">
              <div className="text-center">
                <h1 className="text-5xl font-inter font-bold">
                  Welcome <span className="text-third ">Back</span>{" "}
                </h1>
                <p className="py-6 font-semibold text-gray-400">
                  Login to your account to continue with this website
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered focus:border-none focus:outline-third "
                      required
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
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-third shadow-xl border-none font-inter font-semibold text-white rounded-full hover:bg-third">
                      Login
                    </button>
                  </div>
                </form>
                <div className="divider -mt-4">OR</div>
                <div className=" flex items-center px-7 mb-6 justify-center">
                  <button className="btn w-full rounded-full shadow-xl border-2 font-inter font-semibold">
                    <FcGoogle className="text-xl"></FcGoogle>
                    Sign In With Google
                  </button>
                </div>
                <div className="text-center  font-inter font-semibold mb-6">
                  <p className="">
                    {"Don't"} have an account ?{" "}
                    <Link className="text-third btn-link">Register</Link>{" "}
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

export default Login;
