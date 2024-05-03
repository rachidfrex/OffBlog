import React from 'react'
import Carousel from "../components/carousel";
import NewBlogs from "../components/newBlogs";
import SlidCategoris from "../components/my-ui/slidCategoris";
import Discount from "../components/discount";
function Home() {
  return (
    <div>
    <Carousel />
      <SlidCategoris />
      <NewBlogs />
      <Discount /> 
    </div>
  )
}

export default Home