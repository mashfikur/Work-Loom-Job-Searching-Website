import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import navlogo from "../assets/images/final-logo.png";
import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useAuthContext();
  const [showError, setShowError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError("");
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setShowError("Enter A Valid Email");
      return;
    }

    if (password.length < 6) {
      setShowError("Your Password must be more than 6 charectars");
      return;
    }

    // console.log(name, image, email, password);

    // creating user
    createUser(email, password)
      .then((result) => {
        toast.success("Created Account Successfully");

        //updating the user
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="bg-base-200 lg:px-8  py-10">
      <Helmet>
        <title>Work Loom | Register </title>
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
          <div className="hero flex-1 min-h-[80vh] py-5">
            <div className="hero-content flex-col  md:w-[80%] ">
              <div className="card  w-full  border-2 bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
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
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo URL"
                      className="input input-bordered focus:border-none focus:outline-third "
                      name="image"
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
                  {showError && (
                    <p className="font-bold text-red-500">{showError}*</p>
                  )}
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
