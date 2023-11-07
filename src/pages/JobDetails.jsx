import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import useDateConvert from "../hooks/useDateConvert";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { user } = useAuthContext();
  const dateConvert = useDateConvert();
  const axiosCustom = useAxios();
  const { id } = useParams();
  const submitRef = useRef();
  const [applied, setApplied] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["singleJob", id, applied],
    queryFn: async () => {
      return axiosCustom
        .get(`/api/v1/all-jobs/job/details/${id}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  const handleApply = () => {
    // getting present date value
    const presentDate = new Date().getDate();
    const presentMonth = new Date().getMonth() + 1;
    const presentYear = new Date().getFullYear();
    const presentValue = dateConvert(presentDate, presentMonth, presentYear);

    //getting deadline day value
    const deadline = data.deadline;
    const [dd, mm, yyyy] = deadline.split("-");
    const deadlineValue = dateConvert(dd, mm, yyyy);

    //checking user validation
    if (user?.uid === data.user_id) {
      toast.error("You can't apply for your own Job");
      return;
    }

    // checking date validation
    if (!(deadlineValue > presentValue)) {
      toast.error("The Application Deadline is Over ! ");
      return;
    }

    document.getElementById("modal_input").showModal();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    const resume = submitRef.current.value;
    if (resume) {
      console.log(resume);

      axiosCustom.post(`/api/v1/user/apply-job/${id}`).then(() => {
        setApplied(!applied);
        submitRef.current.value = "";
        toast.success("Successfully applied for the job");
      });
    } else {
      toast.error("Submit Your Resume to Apply");
    }
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title> Work Loom | Job Details </title>
      </Helmet>

      <div className="flex flex-col lg:flex-row mt-3 items-center">
        <div className="flex-1">
          <Link to={-1}>
            <button className="btn bg-[#1687C9] text-white hover:bg-[#1687C9] rounded-full">
              {" "}
              <BsArrowLeft className="text-xl"></BsArrowLeft> Go Back
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <h1 className="font-inter font-semibold underline text-5xl text-third text-center mt-4">
            Details
          </h1>
        </div>
        <div className="flex-1"></div>
      </div>

      {/* query states */}

      {isError && (
        <div className="min-h-[60vh] flex items-center justify-center">
          {" "}
          <span className="text-center text-red-500 font-inter font-bold tex4xl">
            {" "}
            ${error.message}{" "}
          </span>{" "}
        </div>
      )}

      {isPending && (
        <div className="min-h-[60vh] flex items-center justify-center">
          {" "}
          <span className="loading text-5xl loading-infinity loading-lg"></span>{" "}
        </div>
      )}

      {data && (
        <div className="flex flex-col-reverse lg:gap-4 xl:gap-0 p-4 xl:p-0 lg:flex-row items-center lg:my-16">
          {/* details */}
          <div className="flex-1 font-inter">
            {/* company info */}
            <div className="flex  gap-3 my-5 items-center">
              <div>
                <img
                  className="w-12 "
                  src={data.company_logo}
                  alt="company_logo"
                />
              </div>
              <div>
                <h3 className="text-3xl  drop-shadow-xl font-bold">
                  {" "}
                  {data.company}{" "}
                </h3>
              </div>
            </div>

            {/* job details */}
            <div className="text-xl mt-8 text-gray-400 font-bold space-y-3">
              <h3>
                {" "}
                Job Title :{" "}
                <span className="font-normal text-black ">
                  {data.title}
                </span>{" "}
              </h3>
              <h3>
                {" "}
                Job Type :{" "}
                <span className="font-normal text-black ">
                  {data.category.toUpperCase()}
                </span>{" "}
              </h3>
              <h3>
                {" "}
                Salary range :{" "}
                <span className="font-normal text-black">
                  {" "}
                  ${data.salary} per month{" "}
                </span>{" "}
              </h3>

              <p className="w-[60%]">
                {" "}
                Job Description :{" "}
                <span className="font-normal text-lg text-black">
                  {" "}
                  {data.description}
                </span>{" "}
              </p>
              <p className="">
                {" "}
                Application Deadline :{" "}
                <span className="font-normal text-black">
                  {" "}
                  {data.deadline}
                </span>{" "}
              </p>
              <p className="">
                {" "}
                Applied :{" "}
                <span className="font-normal text-black">
                  {" "}
                  {data.applied}
                </span>{" "}
              </p>
            </div>

            <div className="my-8">
              <button
                onClick={handleApply}
                className="btn btn-accent rounded-xl shadow-xl"
              >
                apply now{" "}
                <BiSolidSelectMultiple className="text-xl"></BiSolidSelectMultiple>{" "}
              </button>
            </div>
          </div>

          {/* job banner */}
          <div className="flex-1">
            <img className="rounded-xl" src={data.banner} alt="" />
          </div>
        </div>
      )}

      {/* modal dialouge input */}

      <dialog id="modal_input" className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
              ✕
            </button>
            <p className="font-inter text-2xl text-center font-bold">
              Apply Job
            </p>
            <div>
              <div className="space-y-4 mt-4">
                <div className=" w-full flex  items-center ">
                  <div className="w-[20%]">
                    <span className="text-base md:text-lg font-inter">
                      Name:{" "}
                    </span>
                  </div>
                  <div className="w-[80%]">
                    <input
                      defaultValue={user?.displayName}
                      type="text"
                      placeholder="email"
                      className="input  input-bordered rounded-full w-full"
                      required
                    />
                  </div>
                </div>
                <div className=" w-full flex  items-center ">
                  <div className="w-[20%]">
                    <span className="text-base md:text-lg font-inter">
                      Email:{" "}
                    </span>
                  </div>
                  <div className="w-[80%]">
                    <input
                      defaultValue={user?.email}
                      type="email"
                      placeholder="email"
                      className="input  input-bordered rounded-full w-full"
                      required
                    />
                  </div>
                </div>
                <div className=" w-full flex  items-center ">
                  <div className="w-[30%] md:w-[20%]">
                    <span className="text-base md:text-lg font-inter">
                      Resume:{" "}
                    </span>
                  </div>
                  <div className="w-[80%]">
                    <input
                      ref={submitRef}
                      name="resume"
                      type="text"
                      placeholder="Resume Link"
                      className="input  input-bordered rounded-full w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={handleSubmit}
                    className="btn bg-third hover:bg-third rounded-full text-white font-inter shadow-xl border-none"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
