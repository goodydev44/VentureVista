import React from "react";

const BookWithUs: React.FC = () => {
  return (
    <div className="bg-[#f3f5f8]">
      <div>
        <h2 className="text-[#203f74] text-center text-4xl font-bold">
          Enjoy Fresh Travel Blogs
        </h2>
        <div className="flex flex-col items-center gap-1 mt-2.5 mb-10">
          <div className="line2 w-[9rem] bg-[#e8991e]"></div>
          <div className="line2 w-[4.5rem] bg-[#4d751a]"></div>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <div className="bg-white py-10 px-6 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <></>
          <h4 className="text-[#224175] text-2xl font-bold">Easy Booking</h4>
          <p className="text-[#585f66] text-balance mt-5">
            We offer easy and convenient flight bookings with attractive offers.
          </p>
        </div>
        <div className="bg-white py-10 px-6 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <></>
          <h4 className="text-[#224175] text-2xl font-bold">Lowest Price</h4>
          <p className="text-[#585f66] text-balance mt-5">
            We ensure low rates on hotel reservation, holiday packages and on flight tickets.
          </p>
        </div>
        <div className="bg-white py-10 px-6 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <></>
          <h4 className="text-[#224175] text-2xl font-bold">Exciting Deals</h4>
          <p className="text-[#585f66] text-balance mt-5">
            Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.
          </p>
        </div>
        <div className="bg-white py-10 px-6 text-center outline outline-[#adcdfa] outline-[2px] rounded-xl">
          <></>
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
