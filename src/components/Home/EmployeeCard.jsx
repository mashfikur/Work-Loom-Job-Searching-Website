import PropTypes from "prop-types";

const EmployeeCard = ({ employee }) => {
  return (
    <div>
      <div className="mx-5">
        <div className="card w-96 h-[30rem] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={employee.employee_img}
              alt="Shoes"
              className="rounded-xl h-24"
            />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title font-inter  text-2xl">
              {employee.employee_name}
            </h2>
            <p className=" px-4  text-center flex flex-col justify-center items-center bg-black text-white rounded-full">
              {employee.job_title}
            </p>
            <p className="text-xl font-bold font-inter ">
              {employee.current_company}
            </p>
            <p className="font-bold  text-gray-400">
              {' "'} {employee.review}
              {' "'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeCard;
