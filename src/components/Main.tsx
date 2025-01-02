import React from 'react'
import Header from './Header'
import Hero from './Hero'
import ExclusiveOffers from './ExclusiveOffers'
import TouristPlace from './TouristPlace'
import Activities from './Activities'
import BestHotels from './BestHotels'
import Blogs from './Blogs'
import BookWithUs from './BookWithUs'
import Get from './Get'
import Footer from './Footer'

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ExclusiveOffers />
      <TouristPlace />
      <Activities />
      <BestHotels />
      <Blogs />
      <BookWithUs />
      <Get />
      <Footer />
    </div>
  )
}

export default Main