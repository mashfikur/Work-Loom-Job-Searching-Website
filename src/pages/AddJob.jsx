import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [range, setRange] = useState(150);
  const rangeRef = useRef();

  const opitons = [
    { value: "onsite", label: "On Site" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "partTime", label: "Part Time" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const banner = form.banner.value;
    const salary = form.salary.value;
    const deadline = form.deadline.value;
    const description = form.description.value;

    const jobInfo = { title, category, banner, salary, deadline, description };

    console.log(jobInfo);
  };

  return (
    <div>
      {/* website title and meta content */}
      <Helmet>
        <title> Work Loom | Add Job </title>
      </Helmet>

      <div className="flex  flex-col items-center lg:flex-row">
        <div className="flex-1">
          <img
            className="w-[70%] mx-auto lg:w-full"
            src="https://i.ibb.co/xjJ2C6b/undraw-Note-list-re-r4u9.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="lg:text-6xl text-5xl mt-5 text-center font-bold font-inter">
            Add A Job
          </h3>

          {/* job form  */}
          <div>
            <div className="">
              <div className="hero-content">
                <div className="card  w-full  shadow-2xl">
                  <form onSubmit={handleSubmit} className="card-body">
                    {/* first row */}
                    <div className="flex lg:flex-row flex-col items-center gap-4 justify-between">
                      <div className="form-control w-full  lg:w-[70%]">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Job Title
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Title"
                          className="input input-bordered focus:outline-none"
                          required
                          name="title"
                        />
                      </div>

                      <div className="form-control w-full lg:w-[30%] ">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Category
                          </span>
                        </label>
                        <Select
                          required
                          name="category"
                          options={opitons}
                        ></Select>
                      </div>
                    </div>

                    {/* second row */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-base font-semibold">
                          Job Banner
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Banner URL"
                        className="input input-bordered focus:outline-none py-5"
                        required
                        name="banner"
                      />
                    </div>

                    {/* third row */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                      <div className="form-control flex-1 ">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Salary Range{" "}
                            <span className="font-bold ">
                              ( {` $${range}`} ) per month
                            </span>{" "}
                          </span>
                        </label>
                        <input
                          required
                          onChange={() => setRange(rangeRef.current.value)}
                          name="salary"
                          type="range"
                          min={100}
                          max={10000}
                          ref={rangeRef}
                          step={50}
                          defaultValue={150}
                          className="range range-success"
                        />
                      </div>
                      <div className="form-control flex-1 ">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Application Deadline{" "}
                            <span className="font-bold font-inter">
                              (DD-MM-YYYY)
                            </span>
                          </span>
                        </label>
                        <DatePicker
                          required
                          name="deadline"
                          dateFormat={"dd-MM-yyyy"}
                          className=" border-2 p-3 rounded-xl w-full border-[#D2D4D7]"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                      </div>
                    </div>

                    {/* fourth row */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-base font-semibold">
                          Description
                        </span>
                      </label>
                      <textarea
                        placeholder="Job Description"
                        className="input resize-none py-5 input-bordered h-40  focus:outline-none"
                        required
                        name="description"
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn capitalize hover:bg-[#1687C9]  font-bold text-white text-base bg-[#1687C9] ">
                        Add Job
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
