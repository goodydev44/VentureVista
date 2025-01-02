import React from "react";
import Img from '../assets/Images/Rectangle 1.png'
import img1 from '../assets/Images/Scotland.png'
import img2 from '../assets/Images/Egypt.png'
import img3 from '../assets/Images/Greece.png'
import { 
  FaMapMarkerAlt, 
  FaPlane, 
  FaHotel, 
  FaCar, 
  FaCalendarAlt, 
  FaUser
} from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

const Hero: React.FC = () => {
  return (
    <div className="relative py-20 bg-center bg-no-repeat bg-cover contain"
      style={{ backgroundImage: `url(${Img})` }}>
      <div className="xs:w-[25rem] lg2:w-[30rem] bg-black/50 backdrop-blur-[3px] px-12 py-6">
        <h4 className="text-white text-[27px] font-medium">Let's make a tour</h4>
        <h2 className="text-[#61adf4] text-[38px] font-bold">Discover the beauty</h2>

        <div className="flex text-lg text-white gap-12 mt-14">
          <FaMapMarkerAlt />
          <FaPlane />
          <FaHotel />
          <FaCar />
        </div>

        <div className="grid mobile:grid-cols-1 sm:grid-cols-2 gap-7 text-white mt-12">
          <div>
            <div className="inline-grid grid-flow-col items-center gap-2 max-w-[300px]]">
              <FaMapMarkerAlt />
              <input type="text" placeholder="From where" className="bg-transparent outline-none placeholder-white" />
            </div>
            <div className="line"></div>
          </div>

          <div>
            <div className="inline-grid grid-flow-col items-center gap-2 max-w-[300px]]">
              <FaMapMarkerAlt />
              <input type="text" placeholder="To where" className="bg-transparent outline-none placeholder-white" />
            </div>
            <div className="line"></div>
          </div>

          <div>
            <div className="inline-grid grid-flow-col items-center gap-2 max-w-[300px]]">
              <FaCalendarAlt />
              <input type="text" placeholder="3 Sep, 2021" className="bg-transparent outline-none placeholder-white" />
            </div>
            <div className="line"></div>
          </div>
          <div>
            <div className="inline-grid grid-flow-col items-center gap-2 max-w-[300px]]">
              <FaCalendarAlt />
              <input type="text" placeholder="23 Sep, 2021" className="bg-transparent outline-none placeholder-white" />
            </div>
            <div className="line"></div>
          </div>
          <div className="mt-9">
            <div className="inline-grid grid-flow-col items-center gap-2 max-w-[300px]]">
              <FaUser />
              <input type="text" placeholder="2 Person" className="bg-transparent outline-none placeholder-white" />
            </div>
            <div className="line"></div>
          </div>
        </div>
        <button className="text-white rounded-md w-full bg-[#e8991e] hover:bg-[#b67a1b] transition font-medium text-lg py-3 mt-16">Seacrh Packages</button>
      </div>

      <div className="mobile:-mb-20 mt-5 mobile:flex mobile:flex-col mobile:-contain lg1:-m-0 lg1:absolute lg1:-mb-0 place-content-end right-0 -bottom-2 items-end">
        <div className="text-white flex items-center gap-32 mb-4">
          <h3 className="text-xl font-medium">MOST POPULAR HOLIDAYS PLACE</h3>
          <IoArrowForwardCircleOutline className="text-4xl" />
        </div>
        <div className="mobile:grid mobile:grid-cols-2 mobile:gap-3 xs:gap5 sm:flex sm:gap-8">
          <div className="bg-white text-[#335180] rounded-xl px-2.5 pt-2.5 pb-6">
            <img src={img1} className="h-[130px]" />
            <h3 className="text-lg font-bold mt-6">Trip To Scotland</h3>
            <div className="flex items-center gap-2 font-medium">
              <GoPeople />
              <p>31 people going</p>
            </div>
          </div>
          <div className="bg-white text-[#335180] rounded-xl px-2.5 pt-2.5 pb-6">
            <img src={img2} className="h-[130px]" />
            <h3 className="text-lg font-bold mt-6">Trip To Egypt</h3>
            <div className="flex items-center gap-2 font-medium">
              <GoPeople />
              <p>27 people going</p>
            </div>
          </div>
          <div className="bg-white text-[#335180] rounded-xl px-2.5 pt-2.5 pb-6">
            <img src={img3} className="h-[130px]" />
            <h3 className="text-lg font-bold mt-6">Trip To Greece</h3>
            <div className="flex items-center gap-2 font-medium">
              <GoPeople />
              <p>20 people going</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
