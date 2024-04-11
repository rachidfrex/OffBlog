import React from 'react'
import Carousel from "../components/carousel";
import Categories from "../components/categories";
import NewBlogs from "../components/newBlogs";
import Discount from "../components/discount";
function Home() {
  return (
    <div>
    <Carousel />
      <Categories />
      <NewBlogs />
      <Discount /> 
    </div>
  )
}

export default Home