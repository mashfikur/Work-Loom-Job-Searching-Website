import logo from "../../assets/images/final-logo.png";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              {" "}
              <img
                className="md:max-h-[70vh] h-[70vh] w-full object-cover"
                src="https://i.ibb.co/kqwK8fh/banner-cover-2.jpg"
                alt=""
              />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {" "}
              <img
                className="md:max-h-[70vh] h-[70vh] w-full object-cover"
                src="https://i.ibb.co/ngdKXt7/banner-cover-4.jpg"
                alt=""
              />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {" "}
              <img
                className="md:max-h-[70vh] h-[70vh] w-full object-cover"
                src="https://i.ibb.co/Nxdf9FJ/banner-cover-3.jpg"
                alt=""
              />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {" "}
              <img
                className="md:max-h-[70vh] h-[70vh] w-full object-cover"
                src="https://i.ibb.co/GcXMMqS/banner-cover-1.jpg"
                alt=""
              />{" "}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {" "}
              <img
                className="md:max-h-[70vh] h-[70vh] w-full object-cover"
                src="https://i.ibb.co/kqwK8fh/banner-cover-2.jpg"
                alt=""
              />{" "}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center xl:pt-10 xl:gap-10 banner-overlay">
          {/* banner logo part */}

          <div className="flex flex-col items-center p-6 justify-center">
            <div className="relative hi">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 70,
                  delay: 0.3,
                }}
              >
                <img
                  className=" w-[50%] md:w-[40%] mx-auto"
                  src={logo}
                  alt=""
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 70,
                delay: 0.3,
              }}
            >
              <div className="text-center">
                <h3 className="md:text-7xl text-5xl z-40 mt-4 font-inter font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5BFBBB] to-[#004472] ">
                  Work Loom
                </h3>
                <p className=" font-bold md:text-xl text-gray-200">
                  Weaving Opportunities, Connecting Talent . Success Together!
                </p>
              </div>
            </motion.div>
          </div>

          {/* banner serch input */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Jobs..."
              className="input px-8 input-bordered focus:outline-none rounded-l-full w-full"
            />
            <div>
              <button className="btn bg-main hover:bg-third border-none rounded-none rounded-r-full">
                <div className="px-3">
                  <BsSearch className="text-xl"></BsSearch>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
