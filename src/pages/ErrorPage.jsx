import { Link } from "react-router-dom";
import errorImg from "../assets/images/404.png";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-[90vh] text-center flex flex-col items-center justify-center">
      <div>
        <h3 className="text-4xl text-third font-bold">
          THE PAGE YOU REQUETSED WAS NOT FOUND !{" "}
        </h3>
      </div>
      <div className="flex items-center mx-auto max-w-[90vh] relative justify-center ">
        <img src={errorImg} alt="" />
      </div>
      <div className="flex items-center mt-6 justify-center">
        <Link to={"/"}>
          <button className="btn bg-main hover:bg-main rounded-xl ">
            {" "}
            <FaHome className="text-xl"></FaHome> Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
