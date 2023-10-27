import FeaturedItem from '@/components/FeaturedItem'
import Offers from '@/components/Offers'
import Slider from '@/components/Slider'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Slider/>
      <FeaturedItem/>
      <Offers/>
    </main>
  )
}

export default Home
