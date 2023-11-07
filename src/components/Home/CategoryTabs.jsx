import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../Category/JobCard";
import Skeleton from "react-loading-skeleton";

const CategoryTabs = () => {
  const axiosCustom = useAxios();

  const [jobCategory, setJobCategory] = useState(null);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["jobs", jobCategory],
    queryFn: async () => {
      return axiosCustom
        .get(
          `/api/v1/${
            jobCategory ? `all-jobs/category/${jobCategory}` : `all-jobs`
          }`
        )
        .then((res) => {
          return res.data;
        });
    },
  });

  return (
    <div className="min-h-screen">
      <Tabs
        className={" "}
        disableUpDownKeys={true}
        selectedTabClassName="active-tab"
      >
        <div className="flex items-center justify-center p-3 md:p-0 ">
          <TabList
            className={
              "text-gray-400 flex flex-wrap items-center justify-center md:block md:text-xl font-inter shadow-xl border-2 px-6 py-3 rounded-xl"
            }
          >
            <Tab onClick={() => setJobCategory(null)}>All Jobs</Tab>
            <Tab onClick={() => setJobCategory("onsite")}>On Site</Tab>
            <Tab onClick={() => setJobCategory("remote")}>Remote</Tab>
            <Tab onClick={() => setJobCategory("hybrid")}>Hybrid</Tab>
            <Tab onClick={() => setJobCategory("partTime")}>Part Time</Tab>
          </TabList>
        </div>

        <div className="my-12 p-3 ">
          {isError && (
            <div className="space-y-8">
              <h3 className=" text-3xl md:text-5xl   text-center font-inter font-bold text-red-500">
                {"Can't Display Data Right Now"}
              </h3>
              <h3 className="text-3xl md:text-5xl  text-center font-inter font-bold text-red-500">
                The Server responed with - {error.message}
              </h3>
            </div>
          )}

          {/* loading animation  */}

          {isPending && (
            <div className="grid gap-4 min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 p-2">
              {Array(4)
                .fill(0)
                .map((data, idx) => (
                  <div
                    className="rounded-xl h-[38rem] bg-base-200 p-4 "
                    key={idx}
                  >
                    <Skeleton
                      borderRadius={"10px"}
                      className=" h-[20rem] mb-4 shadow-xl"
                    ></Skeleton>
                    <Skeleton className="h-[3rem] mb-4"></Skeleton>

                    <Skeleton className="h-[1rem]" count={3}></Skeleton>

                    <div className="flex -mt-2 items-center justify-center">
                      <Skeleton
                        borderRadius={"25px"}
                        width={"130px"}
                        className="mt-16 h-10"
                      ></Skeleton>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
