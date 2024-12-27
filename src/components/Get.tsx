import React from "react";
import Img1 from '../assets/Images/TC 6.png'
import Img2 from '../assets/Images/TC 7.png'
import Img3 from '../assets/Images/image 21.png'
import Img4 from '../assets/Images/image 22.png'
import Img5 from '../assets/Images/Mask Group.png'
import Img6 from '../assets/Images/Rectangle 6.png'
import { FiMail } from 'react-icons/fi'

const Get: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between text-white rounded-[25px] pt-12 px-16 mb-16
            bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Img5})` }}>
        <div className="flex flex-col justify-center">
          <h2 className="text-[52px] font-bold mb-3">Download now!</h2>
          <p className="font-medium mb-20">
            Download our app now and change the way you travel. <br />
            Available for Android and iPhone.
          </p>
          <div className="flex gap-3">
            <img src={Img3} className="cursor-pointer h-[64px]" alt="" />
            <img src={Img4} className="cursor-pointer h-[64px]" alt="" />
          </div>
        </div>

        <div className="flex flex-row-reverse items-end overflow-hidden">
          <img className="-mr-[52px]" src={Img1} />
          <img className="h-[350px] -mr-[101px]" src={Img2} />
        </div>
      </div>

      <div className="py-9 px-16 rounded-[25px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Img6})` }}>
        <h2 className="text-[45px] font-bold text-white mb-5">Get Every Tour and <br /> Package Update</h2>
        <div className="flex items-center gap-5 bg-white w-fit px-5 py-4 rounded-full">
          <FiMail className="text-[#e9b14c] text-4xl" />
          <input type="text" 
                placeholder="Enter your email"
                className="text-lg w-[450px] h-[40px] px-4 rounded-full outline-none"
                />
          <button className="bg-[#e8991e] hover:bg-[#c48f38] transition text-white text-xl font-medium px-9 py-3.5 rounded-full">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Get;
