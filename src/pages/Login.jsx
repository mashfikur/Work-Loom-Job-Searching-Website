import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const Login = () => {
  const { userSignIn, setLoading, setUser, googleUserAuth } = useAuthContext();
  const axiosCustom = useAxios();
  // const { handleGoogleAuth } = useGoogleAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //user sign in
    userSignIn(email, password)
      .then((result) => {
        toast.success("Logged in Successfully");

        // genreating token
        const uid = result.user.uid;
        const user_info = { uid };
        axiosCustom.post("/api/v1/auth/create-token", user_info).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        toast.error(error.code);
        setUser(null);
        setLoading(false);
      });
  };

  const handleGoogleAuth = () => {
    googleUserAuth()
      .then((result) => {
        toast.success("Logged In Successfully");
        // genreating token
        const uid = result.user.uid;
        const user_info = { uid };
        axiosCustom.post("/api/v1/auth/create-token", user_info).then((res) => {
          console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Work Loom | Login </title>
      </Helmet>
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
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
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
                    <button className="btn bg-third shadow-xl border-none font-inter font-semibold text-white rounded-full hover:bg-third">
                      Login
                    </button>
                  </div>
                </form>
                <div className="divider -mt-4">OR</div>
                <div className=" flex items-center px-7 mb-6 justify-center">
                  <button
                    onClick={handleGoogleAuth}
                    className="btn w-full rounded-full shadow-xl border-2 font-inter font-semibold"
                  >
                    <FcGoogle className="text-xl"></FcGoogle>
                    Sign In With Google
                  </button>
                </div>
                <div className="text-center  font-inter font-semibold mb-6">
                  <p className="">
                    {"Don't"} have an account ?{" "}
                    <Link to={"/register"} className="text-third btn-link">
                      Register
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

export default Login;
