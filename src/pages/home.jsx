import React from 'react'
import Carousel from "../components/carousel";
import NewBlogs from "../components/newBlogs";
import SlidCategoris from "../components/my-ui/slidCategoris";
import Discount from "../components/discount";
import MostPopilare from "../components/MostPopilare";
function Home() {
  return (
    <div>
    <Carousel />
      <SlidCategoris />
      <NewBlogs />
      {/* <Discount />  */}
      <MostPopilare />
    </div>
  )
}

export default Home