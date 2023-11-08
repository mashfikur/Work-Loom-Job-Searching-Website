import { useMutation } from "@tanstack/react-query";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useAuthContext from "../hooks/useAuthContext";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Select from "react-select";
import DatePicker from "react-datepicker";
import useDateConvert from "../hooks/useDateConvert";

const UpdateJob = () => {
  const formRef = useRef();
  const data = useLoaderData();
  const { user } = useAuthContext();
  const axiosCustom = useAxios();
  //eslint-disable-next-line
  const { id } = useParams();
  const navigate = useNavigate();

  const dateConvert = useDateConvert();

  const [dd, mm, yyyy] = data.deadline.split("-");
  const newMonth = parseInt(mm) - 1;
  const updatedMonth = newMonth.toString();
  const converted = dateConvert(dd, updatedMonth, yyyy);
  const [startDate, setStartDate] = useState(new Date(converted));

  const opitons = [
    { value: "onsite", label: "On Site" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "partTime", label: "Part Time" },
  ];

  // using tanstack query mutations
  const mutation = useMutation({
    mutationFn: async (jobInfo) => {
      return axiosCustom
        .patch(`/api/v1/user/update-job/${id}`, jobInfo)
        .then((res) => {
          return res.data;
        });
    },
  });

  const handleSubmit = (e) => {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const now = `${date}-${month + 1}-${year}`;

    e.preventDefault();
    const form = e.target;
    const user_id = user?.uid;
    const posted_by = user?.displayName;
    const posted_date = now;
    const title = form.title.value;
    const company = form.company.value;
    const company_logo = form.logo.value;
    const category = form.category.value;
    const banner = form.banner.value;
    const salary = form.salary.value;
    const deadline = form.deadline.value;
    const description = form.description.value;

    const jobInfo = {
      user_id,
      posted_by,
      posted_date,
      title,
      company,
      company_logo,
      category,
      banner,
      salary,
      deadline,
      description,
    };

    // adding a job to data-base using tanstack query
    mutation.mutate(jobInfo);
  };

  useEffect(() => {
    if (mutation.isError) {
      toast.error(mutation.error.message);
      mutation.reset();
    }

    if (mutation.isSuccess) {
      toast.success("Updated Job Successfully");
      mutation.reset();
      navigate(-1);
    }
  }, [mutation, startDate, navigate]);

  return (
    <div>
      {/* website title and meta content */}
      <Helmet>
        <title> Work Loom | Update Job </title>
      </Helmet>

      <div className="flex  flex-col items-center lg:flex-row">
        <div className="flex-1">
          <img
            className="w-[70%] mx-auto lg:w-full"
            src="https://i.ibb.co/9bVS5Zk/undraw-Content-re-33px.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h3 className="lg:text-6xl text-5xl mt-5  text-center font-bold font-inter">
            Update Job
          </h3>

          {/* job form  */}
          <div>
            <div className="">
              <div className="hero-content">
                <div className="card  w-full  shadow-2xl">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="card-body"
                  >
                    {/* first row */}
                    <div className="flex lg:flex-row flex-col items-center gap-4 justify-between">
                      <div className="form-control w-full  lg:w-[70%]">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Company Name
                          </span>
                        </label>
                        <input
                          defaultValue={data?.company}
                          type="text"
                          placeholder="Company"
                          className="input input-bordered focus:outline-none"
                          required
                          name="company"
                        />
                      </div>

                      <div className="form-control w-full lg:w-[30%] ">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Category
                          </span>
                        </label>
                        <Select
                          placeholder={`${data?.category.toUpperCase()}`}
                          className="placeholder:text-black"
                          defaultMenuIsOpen={true}
                          required
                          name="category"
                          options={opitons}
                        ></Select>
                      </div>
                    </div>

                    {/* company logo */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-base font-semibold">
                          Comapany Logo
                        </span>
                      </label>
                      <input
                        defaultValue={data?.company_logo}
                        type="text"
                        placeholder="logo URL"
                        className="input input-bordered focus:outline-none py-5"
                        required
                        name="logo"
                      />
                    </div>

                    {/* second row */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                      <div className="form-control w-full flex-1">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Job Title
                          </span>
                        </label>
                        <input
                          defaultValue={data?.title}
                          type="text"
                          placeholder="Title"
                          className="input input-bordered focus:outline-none py-5"
                          required
                          name="title"
                        />
                      </div>
                      <div className="form-control w-full flex-1">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Job Banner
                          </span>
                        </label>
                        <input
                          defaultValue={data?.banner}
                          type="text"
                          placeholder="Banner URL"
                          className="input input-bordered focus:outline-none py-5"
                          required
                          name="banner"
                        />
                      </div>
                    </div>

                    {/* third row */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                      <div className="form-control w-full flex-1">
                        <label className="label">
                          <span className="label-text text-base font-semibold">
                            Salary Range{" "}
                            <span className="font-inter font-bold">
                              {" "}
                              ($ per month){" "}
                            </span>
                          </span>
                        </label>
                        <input
                          defaultValue={data?.salary}
                          type="text"
                          placeholder="100 - 150"
                          className="input input-bordered focus:outline-none py-5"
                          required
                          name="salary"
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
                          minDate={new Date()}
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
                        defaultValue={data?.description}
                        placeholder="Job Description"
                        className="input resize-none py-5 input-bordered h-40  focus:outline-none"
                        required
                        name="description"
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button
                        className={`btn capitalize font-bold text-white text-base ${
                          mutation.isPending
                            ? "bg-[#1687c97b] hover:bg-[#1687c97b] "
                            : "bg-[#1687C9] hover:bg-[#1687C9]  "
                        } `}
                      >
                        {mutation.isPending ? "Updating.." : "Update Job"}
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

export default UpdateJob;
