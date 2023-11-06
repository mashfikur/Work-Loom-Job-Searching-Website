import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";

import { FaPaperPlane } from "react-icons/fa";

const JobAlerts = () => {
  const emailRef = useRef();

  const handleClick = () => {
    const email = emailRef.current.value;
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Enter A Valid Email");
      return;
    }
    if (email) {
      setTimeout(() => {
        toast.success("Congratulations For Joining");
      }, 500);
    }
    emailRef.current.value = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 70,
        delay: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
    >
      <div className="container my-20  mx-auto">
        <div className="alert-banner xl:rounded-xl">
          <div className="lg:bg-gradient-to-r banner-overlay text-center lg:text-left  px-12 py-12 xl:rounded-xl from-zinc-900  ">
            <h3 className="text-5xl  text-third font-bold font-inter">
              {" "}
              Get Job Alerts & Notifications{" "}
            </h3>
            <p className="text-white mt-2 mb-4 font-bold font-inter text-3xl">
              Stay Ahead of the Curve with Job Alerts!
            </p>
            <p className="text-gray-400 font-inter hidden lg:flex font-bold hi">
               Subscribe to our
              newsletter-style job alerts and be the first to know about the{" "}
              <br /> latest opportunities that match your preferences and
              stay on the path to career success.
            </p>
            <div className="w-[100%] lg:w-[30%] my-8">
              <input
                ref={emailRef}
                type="email"
                placeholder="Your Email"
                className="input input-bordered mx-auto focus:outline-main w-full "
              />

              <div className="my-3 flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="btn  rounded-full capitalize font-inter font-bold text-base bg-third hover:bg-third border-none"
                >
                  Join Work Loom <FaPaperPlane></FaPaperPlane>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobAlerts;
