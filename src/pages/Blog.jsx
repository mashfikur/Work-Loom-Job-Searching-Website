//eslint-disable-next-line
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";

const Blog = () => {
  const axiosCustom = useAxios();

  const { data, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      return axiosCustom.get("/api/v1/blogs").then((res) => {
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
        <title>Work Loom | Blogs </title>
      </Helmet>

      <div className="my-8">
        <h3 className="font-inter drop-shadow-2xl mb-4 font-bold text-4xl text-center">
          My <span className="text-third">Blog</span>
        </h3>
        <hr className="border-2 drop-shadow-2xl border-third mx-auto w-28" />
      </div>

      {isPending && (
        <div className="grid gap-4 min-h-screen grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-2">
          {Array(3)
            .fill(0)
            .map((idx) => (
              <div className="rounded-xl h-[38rem] bg-base-200 p-4 " key={idx}>
                <Skeleton
                  borderRadius={"10px"}
                  className=" h-[20rem] mb-4 shadow-xl"
                ></Skeleton>
                <Skeleton className="h-[3rem] mb-4"></Skeleton>

                <Skeleton className="h-[1rem]" count={3}></Skeleton>

                <div className="flex -mt-2 items-center justify-center">
                  <Skeleton
                    borderRadius={"25px"}
                    width={"130px"}
                    className="mt-16 h-10"
                  ></Skeleton>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* blog container */}
      <div className="grid gap-4 min-h-screen grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-5 ">
        {data &&
          data.map((blog) => (
            <div key={blog.blog_id}>
              <div className="card card-compactw-full h-[42rem] lg:h-[38rem] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-[20rem] w-full object-cover lg:object-fill"
                    src={blog.blog_img}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body flex flex-col p-4">
                  <div className="mb-12 md:mb-4 h-20 lg:h-28 xl:h-16">
                    <h2 className="font-inter font-bold text-2xl text-center ">
                      {blog.blog_title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="font-inter font-semibold text-gray-400">
                      {blog.desc.slice(0, 150)}....
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link to={`/blogs/blog/${blog._id}`}>
                      <button className="btn bg-third hover:bg-third font-inter capitalize font-bold rounded-full text-base">
                        Read More
                        <FaLocationArrow className="text-xl"></FaLocationArrow>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* modals */}

      <div className="w-screen">
        {data &&
          data.map((blog) => (
            <dialog
              key={blog.blog_id}
              id={`Blog-${blog.blog_id}`}
              className="modal banner-overlay "
            >
              <div className="modal-box ">
                <form method="dialog">
                  {/* closing button */}
                  <button className="btn btn-sm btn-circle bg-error hover:bg-error absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold my-6 text-3xl font-inter text-third drop-shadow-xl text-center ">
                  {blog.blog_title}
                </h3>

                <div>
                  <img
                    className="w-full object-cover h-60 rounded-xl"
                    src={blog.blog_img}
                    alt=""
                  />
                </div>

                <p className="py-4 font-inter  ">{blog.desc}</p>
              </div>
            </dialog>
          ))}
      </div>
    </div>
  );
};

export default Blog;
