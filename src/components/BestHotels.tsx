import React from "react";
import img1 from '../assets/Images/Hotel 1.png'
import img2 from '../assets/Images/Hotel 2.png'
import img3 from '../assets/Images/Hotel 3.png'
import img4 from '../assets/Images/Hotel 4.png'
import { PiBuildingApartment } from 'react-icons/pi'
import { BsArrowRightCircle } from 'react-icons/bs'

const BestHotels: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2 justify-center mt-10">
      <div className="col-span-3 row-span-2 bg-gradient-to-br from-[#2d4d7e] to-[#56739a] text-white
              flex flex-col justify-end p-5">
        <PiBuildingApartment className="text-7xl mb-14" />
        <h2 className="text-5xl leading-[4.5rem] mb-4 font-bold">Discover our best hotels to stay</h2>
        <p>
          Bundle ticket to any hotel to <br />
          save on your whole order. <br />
          Follow bundle it! method by <br />
          picking the right hotel <br />
          accommodation once you <br />
          add your tickets to your cart.
        </p>
      </div>
      <img src={img1}
        className="col-span-3 h-full bg-blue-300 inline-block"
        alt="" />
      <img src={img2}
        className="col-span-6 w-full"
        alt="" />
      <img src={img3}
        className="col-span-3 h-full bg-blue-300 inline-block"
        alt="" />
      <img src={img4}
        className="col-span-6 w-full"
        alt="" />
      <div className="flex col-span-6 justify-between items-center py-10 px-7 text-white
            bg-gradient-to-tl from-[#e48423] to-[#edba2e]">
        <p className="text-lg mt-14">
          In our ofers, we have more <br /> hotels.
          Just to make your stay <br />  easy for your best interests
        </p>
        <button className="flex items-center gap-4">
          <p className="text-2xl">Click to view more</p>
          <BsArrowRightCircle className="text-6xl" />
        </button>
      </div>
    </div>
  );
};

export default BestHotels;
