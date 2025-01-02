import React from "react";
import img1 from "../assets/Images/OutDoors 1.png";
import img2 from "../assets/Images/OutDoors 2.png";
import { AiOutlineArrowRight } from 'react-icons/ai'

const Activities: React.FC = () => {
  return (
    <div className="mt-[70px] contain">
      <div>
        <h2 className="text-[#203f74] text-center text-4xl font-bold">
          Activities
        </h2>
        <div className="flex flex-col items-center gap-1 mt-2.5 mb-10">
          <div className="line2 w-[9rem] bg-[#e8991e]"></div>
          <div className="line2 w-[4.5rem] bg-[#4d751a]"></div>
        </div>
      </div>

      <div className="grid mobile:grid-cols-1 lg1:grid-cols-2 gap-2">
        <img src={img1} className="w-full" alt="" />
        <img src={img2} className="lg1:row-span-2 w-fulll h-[500px]]" alt="" />

        <div className="p-5">
          <div className="flex flex-col items-start gap-1 mt-3 mb-7">
            <div className="line2 w-[9rem] bg-[#e8991e]"></div>
            <div className="line2 w-[4.5rem] bg-[#4d751a]"></div>
          </div>

          <h4 className="text-[#3e454d] text-xl font-bold mb-4">Participate in activities like</h4>
          <h2 className="text-[#203f74] text-4xl font-bold mb-8">
            Bungee Jumping
          </h2>
          <p className="text-[#758392] font-medium pr-10">
            Bungee jumping, often known as bungy jumping, is a sport in which a person jumps
            from a considerable height while attached to a long elastic line. usually, the pad is
            built on a high structure like a structure or a crane, a bridge across a steep ravine
          </p>

          <button className="flex gap-3 w-full justify-end items-center text-[#e4802a] font-medium">
            <p className="text-lg text-right">Read more</p>
            <AiOutlineArrowRight className="inline-block text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
