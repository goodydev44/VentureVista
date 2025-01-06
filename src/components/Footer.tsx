import React from 'react'
import Img from '../assets/Images/TravelLogo.png'
import Img2 from '../assets/Images/maps.png'
import ISVG from '../assets/Images/MapMarkerAlt.svg'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import { RiArrowRightSLine } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const Footer: React.FC = () => {
  return (
    <div className='mobile:flex mobile:flex-col mobile:items-center 
            mobile:gap-y-5 md:grid md:grid-cols-2 md:gap-5
            lg2:flex lg2:flex-row lg2:justify-between contain my-20'>
      <div>
        <img src={Img} className='-ml-7' alt="" />
        <p className='font-[450] text-[#292929] my-6'>
          Get ready to turn your travel dreams into reality. Let <br className='mobile:hidden xs:inline-block md:hidden md2:inline-block' />
          Southern travel be your compass, guiding you through <br className='mobile:hidden xs:inline-block md:hidden md2:inline-block' />
          the intricate map of possibilities. Adventure begins here, <br className='mobile:hidden xs:inline-block md:hidden md2:inline-block' />
          on our digital canvas, as we invite you to embark on a <br className='mobile:hidden xs:inline-block md:hidden md2:inline-block' />
          journey that transcends borders, defies expectations, <br className='mobile:hidden xs:inline-block md:hidden md2:inline-block' />
          and fulfills the wanderlust within you.
        </p>
        <h5 className='font-semibold text-[#14162e] mb-4 text-lg'>Follow Us</h5>
        <div className='flex space-x-9 text-lg ml-5'>
          <FaFacebookF className='text-[#2533e1] cursor-pointer' />
          <FaYoutube className='text-[#FF0000] cursor-pointer' />
          <FaXTwitter className='text-[#14171A] cursor-pointer' />
          <FaLinkedin className='text-[#0077B5] cursor-pointer' />
          <FaInstagram className='text-[#fd1d1d] cursor-pointer' />
        </div>
      </div>

      <div className='space-y-3 md:place-self-center mobile:place-self-star'>
        <h5 className='font-semibold text-[#234276] text-lg'>About</h5>
        <ul className='flex flex-col items-start gap-2.5'>
          <li className='liStyle'>about us</li>
          <li className='liStyle'>Destination</li>
          <li className='liStyle'>Testimonal</li>
          <li className='liStyle'>news & article</li>
        </ul>
        <div className='flex items-center space-x-3 text-[#e89b21] cursor-pointer'>
          <p>View more</p>
          <RiArrowRightSLine />
        </div>
      </div>

      <div className='space-y-3 md:place-self-center mobile:place-self-star'>
        <h5 className='font-semibold text-[#234276] text-lg'>Features</h5>
        <ul className='flex flex-col items-start gap-2.5'>
          <li className='liStyle'>payments</li>
          <li className='liStyle'>Contact us</li>
          <li className='liStyle'>accounts</li>
          <li className='liStyle'>Login</li>
          <li className='liStyle'>Sign Up</li>
          <li className='liStyle'>FAQ</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <h5 className='font-semibold text-[#234276] text-lg'>Our company</h5>
        <img src={Img2} alt="" />
        <div className='space-y-5'>
          <div className='flex space-x-3 items-center'>
            <img src={ISVG} className='h-[35px] -ml-2 -mr-1.5' alt="" />
            <p className='text-[#3d434d] font-medium'>
              Address Line 1, Address Line 2, <br /> Karolbhag Delhi, India-226028
            </p>
          </div>
          <div className='flex space-x-3 items-center mobile'>
            <BsTelephone className='text-[#3b5786] text-lg' />
            <p className='text-[#3d434d] font-medium'>+91 5224527336</p>
          </div>
          <div className='flex space-x-3 items-center mobile'>
            <FiMail className='text-[#3b5786] text-lg' />
            <p className='text-[#3d434d] font-medium'>travel@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer