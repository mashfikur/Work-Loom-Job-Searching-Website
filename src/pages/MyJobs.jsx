import { Helmet } from "react-helmet-async";
import useAxios from "../hooks/useAxios";
import useAuthContext from "../hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";
import TableRow from "../components/MyJobs/TableRow";
import { useState } from "react";

const MyJobs = () => {
  const { user } = useAuthContext();
  const axiosCustom = useAxios();
  const [deleted, setDeleted] = useState(false);

  const id = user?.uid;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posted-jobs", id, deleted],
    queryFn: async () => {
      return axiosCustom.get(`/api/v1/user/posted-jobs/${id}`).then((res) => {
        return res.data;
      });
    },
  });

  return (
    <div>
      <Helmet>
        <title> Work Loom | My Jobs </title>
      </Helmet>

      <div className="container mx-auto">
        <div className="my-5">
          <h3 className="font-inter bg-clip-text text-transparent bg-gradient-to-r from-green-300 drop-shadow-xl via-blue-500 to-purple-600 font-bold text-4xl lg:text-5xl text-center">
            {" "}
            Your Posted Jobs{" "}
          </h3>
        </div>

        <div className="my-14 min-h-[50vh] p-2 lg:p-0 lg:min-h-screen">
          {isPending && (
            <div className=" mt-40 lg:mt-60 ">
              <h3 className="font-inter text-center text-3xl lg:text-6xl text-gray-400 font-bold">
                Loading Data{" "}
                <span className="loading loading-bars loading-lg"></span>
              </h3>
            </div>
          )}

          {isError && (
            <div className=" mt-40 lg:mt-60 ">
              <h3 className="font-inter text-center text-3xl lg:text-6xl text-red-500 font-bold">
                Could Not Fetch Data ,{error.message}!
              </h3>
            </div>
          )}

          {data ? (
            data.length ? (
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-base">Company Name</th>
                      <th className="text-base">Job Title </th>
                      <th className="text-base">Job Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className=" lg:border-4 lg:border-[#62BBCF]  hover:border-transparent  ">
                    {/* dynamic tables */}

                    {data.map((job, idx) => (
                      <TableRow
                        setDeleted={setDeleted}
                        deleted={deleted}
                        key={idx}
                        number={idx}
                        job={job}
                      ></TableRow>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className=" mt-40 lg:mt-60 ">
                <h3 className="font-inter text-center text-3xl lg:text-6xl text-gray-400 font-bold">
                  You {"Haven't"} posted any job yet{" "}
                </h3>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
