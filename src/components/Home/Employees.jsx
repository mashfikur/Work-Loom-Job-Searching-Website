import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import EmployeeCard from "./EmployeeCard";
import useAxios from "../../hooks/useAxios";

const Employees = () => {
  const axiosCustom = useAxios();

  const { data } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      return axiosCustom.get("/api/v1/employees").then((res) => {
        return res.data;
      });
    },
  });

  return (
    <div className="container mx-auto my-12">
      <div className="flex flex-col gap-4 p-4 xl:p-0 lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left ">
          <p className="text-4xl  lg:text-left my-3 font-inter font-bold text-gray-400">
            {" "}
            {'" Believe'} in the Power of Results <br /> Not {'Words"'}{" "}
          </p>
          <h3 className="text-6xl font-inter leading-[5rem] font-bold">
            {" "}
            Our Top Employess <br /> Who Got{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#5BFBBB] to-[#004472]">
              Hired
              <span className="hidden lg:inline-block">&#8594;</span>
              <span className="lg:hidden">&#8595;</span>
            </span>{" "}
          </h3>

          <p className="font-inter hidden lg:flex text-gray-600 my-3">
            Our {"'Top Employees'"} have found their dream jobs through our
            platform <br /> and their success stories speak volumes. Join the
            ranks of those <br />
            {" who'"}ve realized their career aspirations with Work Loom
          </p>
        </div>
        <div className="flex-1 hidden lg:block lg:overflow-hidden shadow-xl  rounded-xl border-2 border-[#36B09D] ">
          <Marquee
            className="bg-gradient-to-br p-4 from-[#5BFBBB] to-[#004472]"
            direction="right"
          >
            {data &&
              data.map((singleData) => (
                <EmployeeCard
                  key={singleData.id}
                  employee={singleData}
                ></EmployeeCard>
              ))}
          </Marquee>
        </div>
      </div>

      <div className="lg:hidden">
        <Marquee
          className="bg-gradient-to-br p-4 from-[#5BFBBB] to-[#004472]"
          direction="right"
        >
          {data &&
            data.map((singleData) => (
              <EmployeeCard
                key={singleData.id}
                employee={singleData}
              ></EmployeeCard>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Employees;
