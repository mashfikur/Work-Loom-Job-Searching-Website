import { Helmet } from "react-helmet-async";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../hooks/useAuthContext";
import { useState } from "react";
import Select from "react-select";
import JobCard from "../components/Category/JobCard";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { Margin, usePDF } from "react-to-pdf";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const { user } = useAuthContext();
  const id = user?.uid;

  const axiosCustom = useAxios();

  // pdf processing
  const { toPDF, targetRef } = usePDF({
    filename: "summary.pdf",
    page: { margin: Margin.SMALL },
  });

  const opitons = [
    { value: "all-job", label: "All Job" },
    { value: "onsite", label: "On Site" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "partTime", label: "Part Time" },
  ];

  const { data, isPending } = useQuery({
    queryKey: ["applied-job"],
    queryFn: async () => {
      return axiosCustom.get(`/api/v1/user/applied-jobs/${id}`).then((res) => {
        setAppliedJobs(res.data);
        setJobsLoading(false);
        return res.data;
      });
    },
  });

  const handleChange = (e) => {
    const category = e.value;

    if (category === "all-job") {
      setAppliedJobs(data);
      return;
    }

    const filtered = data.filter((job) => job.category === category);

    if (filtered) {
      setAppliedJobs(filtered);
    } else {
      setAppliedJobs(null);
    }
  };

  return (
    <div>
      <Helmet>
        <title> Work Loom | Applied Jobs </title>
      </Helmet>

      <div ref={targetRef} className="container mx-auto my-16  ">
        {/* heading part */}
        <div className="flex flex-col lg:px-4 xl:px-0  gap-4 lg:flex-row items-center">
          <div className="flex-1">
            <h3 className="text-5xl border-l-8 border-third py-3  pl-2 font-inter font-bold">
              Applied Jobs
            </h3>
          </div>

          <div className="flex-1 lg:flex items-center justify-end">
            <div className="form-control w-full lg:w-[50%] ">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Filter By Category
                </span>
              </label>
              <Select
                onChange={handleChange}
                required
                name="category"
                options={opitons}
              ></Select>
            </div>
          </div>
        </div>

        {/* applied jobs information */}

        <div className="my-12 min-h-screen ">
          {isPending && (
            <div className=" mt-40 lg:mt-60 ">
              <h3 className="font-inter text-center text-3xl lg:text-6xl text-gray-400 font-bold">
                Loading Jobs{" "}
                <span className="loading loading-bars loading-lg"></span>
              </h3>
            </div>
          )}

          {data &&
            (jobsLoading ? (
              <div className=" mt-40 lg:mt-60 ">
                <h3 className="font-inter text-center text-3xl lg:text-6xl text-gray-400 font-bold">
                  Loading Jobs{" "}
                  <span className="loading loading-bars loading-lg"></span>
                </h3>
              </div>
            ) : appliedJobs.length ? (
              <div>
                <div className="font-bold hidden">
                  <h3>hello</h3>
                  <h3>hello</h3>
                  <h3>hello</h3>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 p-4 xl:p-0 gap-3">
                  {appliedJobs.map((job, idx) => (
                    <JobCard key={idx} job={job}></JobCard>
                  ))}
                </div>

                <div className="my-10 sticky bottom-2 flex items-center justify-center">
                  <button
                    onClick={toPDF}
                    className="btn shadow-xl btn-success font-bold font-inter text-lg rounded-full  capitalize"
                  >
                    Download Summary
                    <BsFillCloudDownloadFill className="text-xl"></BsFillCloudDownloadFill>
                  </button>
                </div>
              </div>
            ) : (
              <div className=" mt-40 lg:mt-60 ">
                <h3 className="font-inter text-center text-3xl lg:text-6xl text-gray-400 font-bold">
                  No Job Found{" "}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
