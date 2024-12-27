import React from "react";
import Img1 from "../assets/Images/carbon_flight-international.png";
import Img2 from "../assets/Images/Rectangle 74.png";
import Img3 from "../assets/Images/Vector.png";
import Img4 from "../assets/Images/Vector-1.png";

const BookWithUs: React.FC = () => {
  return (
    <div className="bg-[#f3f5f8] pt-11 pb-9 mt-20">
      <div>
        <h2 className="text-[#203f74] text-center text-4xl font-bold">
          Why Book With Us
        </h2>
        <div className="flex flex-col items-center gap-1 mt-2.5 mb-10">
          <div className="line2 w-[9rem] bg-[#e8991e]"></div>
          <div className="line2 w-[4.5rem] bg-[#4d751a]"></div>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <div className="flex flex-col items-center w-[320px] bg-white py-10 px-8 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <img src={Img1} className="h-[90px] w-[90px] mb-6" alt="" />
          <h4 className="text-[#224175] text-2xl font-bold">Easy Booking</h4>
          <p className="text-[#585f66] text-balance mt-5">
            We offer easy and convenient flight bookings with attractive offers.
          </p>
        </div>
        <div className="flex flex-col items-center w-[320px] bg-white py-10 px-8 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <img src={Img2} className="h-[90px] w-[90px] mb-6" alt="" />
          <h4 className="text-[#224175] text-2xl font-bold">Lowest Price</h4>
          <p className="text-[#585f66] text-balance mt-5">
            We ensure low rates on hotel reservation, holiday packages and on flight tickets.
          </p>
        </div>
        <div className="flex flex-col items-center w-[320px] bg-white py-10 px-8 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <img src={Img3} className="h-[90px] w-[90px] mb-6" alt="" />
          <h4 className="text-[#224175] text-2xl font-bold">Exciting Deals</h4>
          <p className="text-[#585f66] text-balance mt-5">
            Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.
          </p>
        </div>
        <div className="flex flex-col items-center w-[320px] bg-white py-10 px-8 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <img src={Img4} className="h-[90px] w-[90px] mb-6" alt="" />
          <h4 className="text-[#224175] text-2xl font-bold">24/7 Support</h4>
          <p className="text-[#585f66] text-balance mt-5">
            Get assistance 24/7 on any kind of travel related query. We are happy to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookWithUs;
