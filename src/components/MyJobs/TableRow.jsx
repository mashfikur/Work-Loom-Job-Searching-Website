import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";

import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TableRow = ({ job, number, setDeleted, deleted }) => {
  const axiosCustom = useAxios();

  const mutation = useMutation({
    mutationFn: async () => {
      return axiosCustom.delete(`/api/v1/user/delete-job/${job._id}`);
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Do You Want to Delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate();
      }
    });
  };

  useEffect(() => {
    if (mutation.error) {
      toast.error(mutation.error.message);
      mutation.reset();
    }
    if (mutation.isSuccess) {
      toast.success("Deleted Job Successfully");
      setDeleted(!deleted);
      mutation.reset();
    }
  }, [mutation, setDeleted, deleted]);

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
          <button
            onClick={handleDelete}
            className="btn rounded-full text-white border-none bg-red-500 hover:bg-red-500 shadow-xl "
          >
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
  setDeleted: PropTypes.func,
  deleted: PropTypes.bool,
};

export default TableRow;
