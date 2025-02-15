import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from '../shop/TrendingProducts'
import ProductCard from '../shop/ProductCard'
import DealSection from './DealSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <>
    <Banner></Banner>
    <Categories></Categories>
    <HeroSection></HeroSection>
    <TrendingProducts></TrendingProducts>
    <ProductCard></ProductCard>
    <DealSection></DealSection>
    <PromoBanner></PromoBanner>
    <Blogs></Blogs>
    </>
  )
}

export default Home
