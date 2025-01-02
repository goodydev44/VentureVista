import React from 'react'
import logo from '../assets/Images/TravelLogo.png'
import { FaMapMarkerAlt, FaPlane, FaHotel } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'

const Header: React.FC = () => {
  return (
    <div className='mobile:flex mobile:flex-col lg:flex-row mobile:gap-y-5 items-center justify-between font-medium my-3 contain'>
      <img src={logo} />
      <div className='mobile:inline-grid mobile:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 md3:flex lg:grid lg:grid-cols-3 
            gap-x-14 mobile:gap-y-2 mobile:place-content-center text-[#04003b]'>
        <div className='div-style1'>
          <FaMapMarkerAlt className='icon-style1' />
          <h3>India</h3>
        </div>
        <div className='div-style1'>
          <FaMapMarkerAlt className='icon-style1' />
          <h3>International</h3>
        </div>
        <div className='div-style1'>
          <FaPlane className='icon-style1' />
          <h3>Flights</h3>
        </div>
        <div className='div-style1'>
          <FaHotel className='icon-style1' />
          <h3>Hotels</h3>
        </div>
        <div className='div-style1'>
          <BsLightningFill className='icon-style1' />
          <h3>Activities</h3>
        </div>
      </div>
      <div className='flex lg:flex-col lg1:flex-row gap-3 text-lg'>
        <button className='text-[#04003b]'>Log in</button>
        <button className='bg-[#e8991e] hover:bg-[#b17920] transition text-white btn-style1'>Sign In</button>
      </div>
    </div>
  )
}

export default Header