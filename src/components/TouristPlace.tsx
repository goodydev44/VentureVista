import React from "react";
import img1 from "../assets/Images/Agra.png";
import img2 from "../assets/Images/Kuala Lumpur.png";
import img3 from "../assets/Images/Munich.png";
import img4 from "../assets/Images/Paris.png";
import img5 from "../assets/Images/Vienna.png";
import img6 from "../assets/Images/Prague.png";
import { FaGift, FaMapMarkerAlt } from 'react-icons/fa'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const TouristPlace: React.FC = () => {
  return (
    <div className="">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-28 contain">
        <div className="flex flex-col sm:col-span-2 lg:col-span-1 justify-end h-[350px] p-10 bg-gradient-to-r from-[#325282] to-[#456aa1] text-white">
          <FaMapMarkerAlt className="text-4xl text-[#d0931d] mb-3" />
          <h1 className="text-4xl font-bold">Famous Tourist Place</h1>
          <p>
            Enjoy the benefits of our packages to the sites where our visitors have more fun. <br />
            Porperly arranged with low costing.
          </p>
        </div>

        <div className="relative">
          <img src={img1} className="h-[350px] w-full brightness-[.8] animation2" alt="" />
          <div className="absolute text-white bottom-11 left-10">
            <h3 className="text-2xl mb-1 font-bold">Agra</h3>
            <div className="flex gap-2 items-center">
              <FaGift />
              <p className="font-medium">10 Packages</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={img2} className="h-[350px] w-full brightness-[.8] animation2" alt="" />
          <div className="absolute text-white bottom-11 left-10">
            <h3 className="text-2xl mb-1 font-bold">Kuala Lumpur</h3>
            <div className="flex gap-2 items-center">
              <FaGift />
              <p className="font-medium">10 Packages</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={img3} className="h-[350px] w-full brightness-[.8] animation2" alt="" />
          <div className="absolute text-white bottom-11 left-10">
            <h3 className="text-2xl mb-1 font-bold">Munich</h3>
            <div className="flex gap-2 items-center">
              <FaGift />
              <p className="font-medium">10 Packages</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={img4} className="h-[350px] w-full brightness-[.8] animation2" alt="" />
          <div className="absolute text-white bottom-11 left-10">
            <h3 className="text-2xl mb-1 font-bold">Paris</h3>
            <div className="flex gap-2 items-center">
              <FaGift />
              <p className="font-medium">10 Packages</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-gradient-to-tl from-[#e38022] to-[#eebd2f] text-white px-5 py-10 row-span-2">
          <p className="font-medium text-lg leading-[1.5rem] mb-[60px]">Wanna travel to the most thrilling spot on the planet? We've set a bumch of surprises for you.</p>
          <div>
            <button className="flex items-center justify-center gap-3">
              <h4 className="text-xl font-bold">Click to view more</h4>
              <IoArrowForwardCircleOutline className="text-6xl" />
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={img5} className="h-[350px] w-full brightness-[.8] animation2" alt="" />
          <div className="absolute text-white bottom-11 left-10">
            <h3 className="text-2xl mb-1 font-bold">Vienna</h3>
            <div className="flex gap-2 items-center">
              <FaGift />
              <p className="font-medium">10 Packages</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={img6} className="h-[350px] w-full brightness-[.8] animation2" alt="" />
          <div className="absolute text-white bottom-11 left-10">
            <h3 className="text-2xl mb-1 font-bold">Prague</h3>
            <div className="flex gap-2 items-center">
              <FaGift />
              <p className="font-medium">10 Packages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristPlace;
