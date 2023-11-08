import PropTypes from "prop-types";
import { BiMessageAltEdit } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { PiClockCountdownFill, PiHandbagSimpleFill } from "react-icons/pi";
import { BsBuildingsFill } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    posted_by,
    posted_date,
    applied,
    title,
    banner,
    salary,
    deadline,
    description,
    category,
  } = job;
  return (
    <div>
      <div className=" h-[40rem]  rounded-xl font-inter relative  bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full rounded-t-xl h-[18rem] object-cover"
            src={banner}
            alt="Job_Banner"
          />
        </figure>
        <div className="p-3 flex gap-2  flex-col">
          <div>
            <h2 className="font-inter text-2xl pb-2 font-bold">{title}</h2>
          </div>
          <div>
            <p className="flex items-center gap-2 text-base">
              <BiMessageAltEdit></BiMessageAltEdit>
              <span className="font-bold text-gray-400 text-base">
                Posted By :
              </span>
              {posted_by}
            </p>
            <p className="flex items-center gap-2 text-base">
              <BsBuildingsFill></BsBuildingsFill>
              <span className="font-bold text-gray-400 text-base">
                Job Category:
              </span>
              {category}
            </p>
            <p className="flex items-center gap-2 text-base">
              <MdDateRange></MdDateRange>
              <span className="font-bold text-gray-400 text-base">
                Job Posted :
              </span>{" "}
              {posted_date}
            </p>
            <p className="flex items-center gap-2 text-base">
              <PiClockCountdownFill></PiClockCountdownFill>
              <span className="font-bold text-gray-400 text-base">
                Deadline :
              </span>
              {deadline}{" "}
            </p>
            <p className="flex items-center gap-2 text-base">
              <BiSolidDollarCircle></BiSolidDollarCircle>
              <span className="font-bold text-gray-400 text-base">
                Salary Range :
              </span>
              ${salary}
              <span className="text-sm">/Month</span>
            </p>
            <p className="flex items-center gap-2 text-base">
              <FaUserGroup></FaUserGroup>
              <span className="font-bold text-gray-400 text-base">
                Applied:
              </span>
              {applied}
            </p>
          </div>
          <div className=" text-center text-base lg:text-lg font-normal">
            <p>{description}</p>
          </div>
          <div className="absolute scale-95   bottom-2 left-[30%] ">
            <Link to={`/job/${_id}`}>
              <button className="btn bg-[#1687C9]  hover:bg-[#1687C9] rounded-full font-inter text-white ">
                View Details
                <PiHandbagSimpleFill className="text-xl"></PiHandbagSimpleFill>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;
