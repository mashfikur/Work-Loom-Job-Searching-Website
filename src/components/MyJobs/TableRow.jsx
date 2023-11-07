import PropTypes from "prop-types";

import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const TableRow = ({ job, number }) => {
  return (
    <tr className=" hover:bg-gradient-to-l  hover:text-white from-green-300 via-blue-500 to-purple-600">
      <th className="font-inter text-base font-normal">{number + 1}</th>
      <td className="font-inter text-lg ">{job.company}</td>
      <td className="font-inter text-xl ">
        <Link to={`/job/${job._id}`}>{job.title}</Link>{" "}
      </td>
      <td className="font-inter text-lg "> {job.category.toUpperCase()} </td>
      <td className=" flex items-center justify-end">
        <div className="flex gap-4">
          <Link to={`/update/${job._id}`}>
            <button className="btn shadow-xl capitalize rounded-full btn-warning">
              update <BiEdit className="text-xl"></BiEdit>{" "}
            </button>
          </Link>
          <button className="btn rounded-full text-white border-none bg-red-500 hover:bg-red-500 shadow-xl ">
            delete <AiFillDelete className="text-xl"></AiFillDelete>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  job: PropTypes.object,
  number: PropTypes.number,
};

export default TableRow;
