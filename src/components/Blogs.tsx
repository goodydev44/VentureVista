import React from "react";
import Img1 from '../assets/Images/Top Card - 1.png'
import Img2 from '../assets/Images/Top Card - 2.png'
import Img3 from '../assets/Images/Top Card - 3.png'
import { FaHeart, FaEye, FaArrowRight } from 'react-icons/fa'
import { IoArrowRedoSharp } from "react-icons/io5";

const Blogs: React.FC = () => {
  return (
    <div className="mt-16 contain">
      <div>
        <h2 className="text-[#203f74] text-center text-4xl font-bold">
          Enjoy Fresh Travel Blogs
        </h2>
        <div className="flex flex-col items-center gap-1 mt-2.5 mb-10">
          <div className="line2 w-[9rem] bg-[#e8991e]"></div>
          <div className="line2 w-[4.5rem] bg-[#4d751a]"></div>
        </div>
      </div>

      <div className="flex mobile:flex-col md3:flex-row justify-center gap-2.5 text-[#203f74]">
        <div className="flex flex-col items-center">
          <img src={Img1} alt="" />
          <div className="flex gap-6 justify-center my-6">
            <div className="flex flex-col text-lg font-medium items-center">
              <FaHeart />
              <p>244</p>
            </div>
            <div className="flex flex-col text-lg font-medium items-center">
              <FaEye />
              <p>244</p>
            </div>
            <div className="flex flex-col text-lg font-medium items-center">
              <IoArrowRedoSharp />
              <p>244</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">15 Best Day Triips from <br /> Portland Oregon</h3>
            <p className="text-[#6a727d] mb-7">
              The structure of the trip blog is <br /> only
              a white canvas to <br /> highlight the atmospheric
              and <br /> immersive.
            </p>
          </div>
          <FaArrowRight className="text-2xl mt-4 text-[#32313f] w-full text-center" />
        </div>

        <div className="flex flex-col items-center">
          <img src={Img2} alt="" />
          <div className="flex gap-6 justify-center my-6">
            <div className="flex flex-col text-lg font-medium items-center">
              <FaHeart />
              <p>244</p>
            </div>
            <div className="flex flex-col text-lg font-medium items-center">
              <FaEye />
              <p>244</p>
            </div>
            <div className="flex flex-col text-lg font-medium items-center">
              <IoArrowRedoSharp />
              <p>244</p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-6">Famous Roads for Great <br /> Drives in California</h3>
            <p className="text-[#6a727d] mb-7">
              I first discovered about <br /> famous road in
              california <br /> when I flew <br /> with KLM to Europe in 2018.
            </p>
          </div>
          <FaArrowRight className="text-2xl mt-4 text-[#32313f] w-full text-center" />
        </div>

        <div className="flex flex-col items-center">
          <img src={Img3} alt="" />
          <div className="flex gap-6 justify-center my-6">
            <div className="flex flex-col text-lg font-medium items-center">
              <FaHeart />
              <p>244</p>
            </div>
            <div className="flex flex-col text-lg font-medium items-center">
              <FaEye />
              <p>244</p>
            </div>
            <div className="flex flex-col text-lg font-medium items-center">
              <IoArrowRedoSharp />
              <p>244</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">7 of the Best Train Trips <br /> in Canada</h3>
            <p className="text-[#6a727d] mb-7">
              On this very stunning rail ride <br /> from Vancouver
              to Calgary, <br /> take in the stunning vistas <br /> andspectacular.
            </p>
          </div>
          <FaArrowRight className="text-2xl mt-4 text-[#32313f] w-full text-center" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
