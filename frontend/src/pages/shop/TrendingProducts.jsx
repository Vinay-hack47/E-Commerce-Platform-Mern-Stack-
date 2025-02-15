import React from 'react'
import { useState } from 'react'
import products from "../../data/product.json"
import ProductCard from './ProductCard'

const TrendingProducts = () => {

  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 4);
  }


  return (
   <section className='section__container product__container'> 
    <h2 className='section__header'>Trending Products</h2>
    <p className='section__subheader mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta, obcaecati corrupti reprehenderit natus consectetur rerum vero temporibus itaque officiis rem, voluptatem deleniti numquam ex. Laudantium omnis adipisci rerum voluptate?</p>

    {/*product cards*/}
    <div className='mt-12 mb-12'>
    <ProductCard products={products.slice(0, visibleProducts)} ></ProductCard>
    </div>

    {/*load more button*/}
    <div className='product__btn mt-12'>
      {
        visibleProducts < products.length && <button onClick={loadMoreProducts} className='btn'>Load More</button>
      }
    </div>


   </section>
  )
}

export default TrendingProducts
