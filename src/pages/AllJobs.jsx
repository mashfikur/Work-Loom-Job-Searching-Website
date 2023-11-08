import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
  const axiosCustom = useAxios();
  const [displayJobs, setDisplayJobs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const searchRef = useRef();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      return axiosCustom.get(`/api/v1/all-jobs`).then((res) => {
        setDisplayJobs(res.data);
        setDataLoading(false);
        return res.data;
      });
    },
  });

  const handleSearch = () => {
    const value = searchRef.current.value;
    console.log(value);

    if (value) {
      const filtered = data.filter((job) =>
        job.title.toLowerCase().includes(value.toLowerCase())
      );

      console.log(filtered);

      setDisplayJobs(filtered);
    } else {
      setDisplayJobs(data);
    }
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title> Work Loom | All Jobs </title>
      </Helmet>

      <div className="flex items-center justify-center">
        <h3 className="text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#5BFBBB] to-[#004472] font-inter  font-bold  px-4 py-2 rounded-lg text-center my-4 mb-8">
          {" "}
          All Jobs
        </h3>
      </div>

      <div className="flex mb-10 px-4 lg:px-0 items-center justify-center">
        <input
          ref={searchRef}
          onChange={handleSearch}
          type="text"
          placeholder="Search Title..."
          className="input input-bordered focus:border-transparent focus:outline-[#32A89A] rounded-full w-full max-w-sm"
        />
      </div>

      <div className="min-h-screen">
        {isError && (
          <div>
            <h3 className="font-inter mt-20 text-5xl font-bold text-red-400 text-center">
              Could Not Fetch Data , {error.message} !
            </h3>
          </div>
        )}

        {isPending && (
          <div className="">
            <div className="grid grid-cols-7 gap-4">
              <Skeleton height={"15px"}></Skeleton>
              <Skeleton height={"15px"}></Skeleton>
              <Skeleton height={"15px"}></Skeleton>
              <Skeleton height={"15px"}></Skeleton>
              <Skeleton height={"15px"}></Skeleton>
              <Skeleton height={"15px"}></Skeleton>
              <Skeleton height={"15px"}></Skeleton>
            </div>
            <Skeleton
              highlightColor="#32A89A"
              className=""
              height={"50px"}
              count={10}
            ></Skeleton>
          </div>
        )}

        {data ? (
          dataLoading ? (
            <div className=" mt-40 lg:mt-60 ">
              <h3 className="font-inter text-center text-3xl lg:text-6xl text-gray-400 font-bold">
                Loading Data{" "}
                <span className="loading loading-bars loading-lg"></span>
              </h3>
            </div>
          ) : displayJobs.length ? (
            <div className="overflow-x-auto mb-10 ">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-lg ">Job Title </th>
                    <th className="text-lg ">Posted By</th>
                    <th className="text-lg ">Job Posted </th>
                    <th className="text-lg ">Applicaiton Deadline</th>
                    <th className="text-lg ">Salary Range (per Month) </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="border-2">
                  {displayJobs &&
                    displayJobs.map((job, idx) => (
                      <tr key={idx}>
                        <th className="text-lg font-inter font-normal">
                          {idx + 1}
                        </th>
                        <td className="text-base font-inter font-semibold">
                          {job.title}
                        </td>
                        <td className="text-base font-inter font-semibold">
                          {job.posted_by}
                        </td>
                        <td className="text-base font-inter font-semibold">
                          {job.posted_date}
                        </td>
                        <td className="text-base font-inter font-semibold">
                          {job.deadline}
                        </td>
                        <td className="">${job.salary}</td>
                        <td>
                          <div>
                            <Link to={`/job/${job._id}`}>
                              <button className="btn shadow-xl border-none bg-[#66AE3D] hover:bg-third text-white font-inter rounded-lg capitalize">
                                Details
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h3 className="font-inter mt-20 text-5xl font-bold text-gray-400 text-center">
                No Jobs Available
              </h3>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AllJobs;
