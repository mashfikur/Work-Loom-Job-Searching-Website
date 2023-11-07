import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../Category/JobCard";

const CategoryTabs = () => {
  const axiosCustom = useAxios();

  const [jobCategory, setJobCategory] = useState(null);

  const { data } = useQuery({
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
