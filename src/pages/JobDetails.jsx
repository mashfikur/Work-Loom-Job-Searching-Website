import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import useDateConvert from "../hooks/useDateConvert";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { user } = useAuthContext();
  const dateConvert = useDateConvert();
  const axiosCustom = useAxios();
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["singleJob", id],
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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <img className="w-12 " src={data.company_logo} alt="" />
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
    </div>
  );
};

export default JobDetails;
