import React from "react";
import img1 from '../assets/Images/Image + Badges - 1.png'
import img2 from '../assets/Images/Image + Badges - 2.png'
import img3 from '../assets/Images/Image + Badges - 3.png'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

const ExclusiveOffers: React.FC = () => {
  return (
    <div className="mt-16">
      <div>
        <h2 className="text-[#203f74] text-center text-4xl font-bold">Exclusive Offers</h2>
        <div className="flex flex-col items-center gap-1 mt-2.5">
          <div className="line2 w-[9rem] bg-[#e8991e]"></div>
          <div className="line2 w-[4.5rem] bg-[#4d751a]"></div>
        </div>
      </div>

      <nav className="flex text-[#203f74] gap-6 text-center font-bold justify-center mt-14">
        <div className="navStyle bg-[#e8991e] text-white">Best Offers</div>
        <div className="navStyle">Flight</div>
        <div className="navStyle">Car</div>
        <div className="navStyle">Bus</div>
        <div className="navStyle">Hotel</div>
      </nav>

      <div className="grid grid-flow-col justify-center items-center gap-3 mt-10">
        <div className="w-[350px]">
          <img src={img1} className="w-[350px] mb-6" alt="" />
          <p className="text-[#3c434c] font-medium text-lg leading-[23px] mb-7">Mermaid Beach Resort: The most joyful way to spend your holiday</p>
          <div className="flex gap-6 text-[#6f7780] text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <p>India</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>4 days</p>
            </div>
          </div>

          <p className="text-sm text-[#6f7780]"><del>$200</del></p>
          <div className="flex items-end">
            <h3 className="text-2xl text-[#234276] font-bold">$175</h3>
            <p className="text-sm text-[#969ca3]">/ person</p>
          </div>
          <div className="inline-block text-[#e37a21] bg-[#f8e4d1] px-3 py-0.5 rounded-lg mt-4">
            <></>
            <p>-15%</p>
          </div>
        </div>

        <div className="w-[350px]">
          <img src={img2} className="w-[350px] mb-6" alt="" />
          <p className="text-[#3c434c] font-medium text-lg leading-[23px] mb-7">Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life</p>
          <div className="flex gap-6 text-[#6f7780] text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <p>International trip</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>4 days</p>
            </div>
          </div>

          <p className="text-sm text-[#6f7780]"><del>$300</del></p>
          <div className="flex items-end">
            <h3 className="text-2xl text-[#234276] font-bold">$250</h3>
            <p className="text-sm text-[#969ca3]">/ person</p>
          </div>
          <div className="inline-block text-[#e37a21] bg-[#f8e4d1] px-3 py-0.5 rounded-lg mt-4">
            <></>
            <p>-15%</p>
          </div>
        </div>

        <div className="w-[350px]">
          <img src={img3} className="w-[350px] mb-6" alt="" />
          <p className="text-[#3c434c] font-medium text-lg leading-[23px] mb-7">Fihalhohi Island Resort: Luxury destination without compromise</p>
          <div className="flex gap-6 text-[#6f7780] text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <p>Mountains</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>4 days</p>
            </div>
          </div>

          <p className="text-sm text-[#6f7780]"><del>$375</del></p>
          <div className="flex items-end">
            <h3 className="text-2xl text-[#234276] font-bold">$300</h3>
            <p className="text-sm text-[#969ca3]">/ person</p>
          </div>
          <div className="inline-block text-[#e37a21] bg-[#f8e4d1] px-3 py-0.5 rounded-lg mt-4">
            <></>
            <p>-15%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
