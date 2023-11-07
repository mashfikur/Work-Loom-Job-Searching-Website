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

  const { data, isPending } = useQuery({
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
        <div className="flex items-center justify-center">
          <TabList
            className={
              "text-gray-400 text-xl font-inter shadow-xl border-2 px-6 py-3 rounded-xl"
            }
          >
            <Tab onClick={() => setJobCategory(null)}>All Jobs</Tab>
            <Tab onClick={() => setJobCategory("onsite")}>On Site</Tab>
            <Tab onClick={() => setJobCategory("remote")}>Remote</Tab>
            <Tab onClick={() => setJobCategory("hybrid")}>Hybrid</Tab>
            <Tab onClick={() => setJobCategory("partTime")}>Part Time</Tab>
          </TabList>
        </div>

        <div className="my-12">
          
          {/* loading animation  */}

          {isPending && (
            <div className="grid gap-4 min-h-screen grid-cols-1 md:grid-cols-2  lg:grid-cols-4 p-2">
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
            <div className="grid grid-cols-4 gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              {data &&
                data.map((job) => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
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
