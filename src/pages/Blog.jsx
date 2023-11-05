//eslint-disable-next-line
import { useQuery } from "@tanstack/react-query";

import { FaLocationArrow } from "react-icons/fa6";

const Blog = () => {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("/blogs.json");

      return res.json();
    },
  });

  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h3 className="font-inter drop-shadow-2xl mb-4 font-bold text-4xl text-center">
          My <span className="text-third">Blog</span>
        </h3>
        <hr className="border-2 drop-shadow-2xl border-third mx-auto w-28" />
      </div>

      {/* blog container */}
      <div className="grid gap-4 min-h-screen grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-5 ">
        {data &&
          data.map((blog) => (
            <div key={blog.blog_id}>
              <div className="card card-compactw-full h-[38rem] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-[20rem] w-full object-cover lg:object-fill"
                    src={blog.blog_img}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body flex flex-col p-4">
                  <div className="mb-4 h-20 lg:h-28 xl:h-16">
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
                    <button className="btn bg-third hover:bg-third font-inter capitalize font-bold rounded-full text-base">
                      Read More
                      <FaLocationArrow className="text-xl"></FaLocationArrow>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
