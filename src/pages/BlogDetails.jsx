import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowUp } from "react-icons/bs";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosCustom = useAxios();

  const { data } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      return axiosCustom.get(`/api/v1/blogs/${id}`).then((res) => {
        return res.data;
      });
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title> Work Loom | Blog Details </title>
      </Helmet>

      <div className="my-12">
        <div className="my-4">
          <h3 className="text-5xl drop-shadow-xl text-center font-inter font-bold ">
            {" "}
            {data?.blog_title}{" "}
          </h3>
        </div>
        <div className="p-4">
          <img
            className="w-full h-[50vh] rounded-xl object-cover"
            src={data?.blog_img}
            alt=""
          />
        </div>
        <div className="flex flex-col-reverse gap-5 lg:flex-row items-center justify-between lg:my-4 px-4">
          <div>
            <Link to={-1}>
              <button className="btn shadow-xl rounded-full btn-neutral">
                {" "}
                <BsArrowLeft className="text-xl"></BsArrowLeft> Go Back
              </button>
            </Link>
          </div>
          <div>
            <h3 className="font-bold  bg-neutral text-white rounded-xl shadow-xl p-2  ">
              {" "}
              Posted At : {data?.posted_date}{" "}
            </h3>
          </div>
        </div>
        <div className="my-14 p-3 relative ">
          <p className="font-inter text-lg border-2 p-4 rounded-xl  ">
            {data?.desc}
          </p>

          <div
            className="mt-6 xl:hidden sticky bottom-2
           flex items-center justify-center"
          >
            <button
              onClick={() => window.scrollTo(0, 120)}
              className="btn  btn-circle btn-neutral"
            >
              <BsArrowUp className="text-xl"></BsArrowUp>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
