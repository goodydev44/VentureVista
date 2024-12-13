import React from 'react'
import logo from '../assets/Images/TravelLogo.png'
import { FaMapMarkerAlt, FaPlane, FaHotel } from 'react-icons/fa'
import { BsLightningFill } from 'react-icons/bs'

const Header: React.FC = () => {
  return (
    <div className='flex items-center justify-between font-medium'>
      <img src={logo} />
      <div className='flex gap-14 text-[#04003b]'>
        <div className='div-style1'>
          <FaMapMarkerAlt className='icon-style1' />
          <h3 className='text-lg'>India</h3>
        </div>
        <div className='div-style1'>
          <FaMapMarkerAlt className='icon-style1' />
          <h3 className='text-lg'>International</h3>
        </div>
        <div className='div-style1'>
          <FaPlane className='icon-style1' />
          <h3 className='text-lg'>Flights</h3>
        </div>
        <div className='div-style1'>
          <FaHotel className='icon-style1' />
          <h3 className='text-lg'>Hotels</h3>
        </div>
        <div className='div-style1'>
          <BsLightningFill className='icon-style1' />
          <h3 className='text-lg'>Activities</h3>
        </div>
      </div>
      <div className='flex gap-3 text-lg'>
        <button className='text-[#04003b]'>Log in</button>
        <button className='bg-[#e8991e] text-white btn-style1'>Sign In</button>
      </div>
    </div>
  )
}

export default Header