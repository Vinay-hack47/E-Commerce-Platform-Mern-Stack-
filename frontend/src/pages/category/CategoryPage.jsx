import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/product.json"
import ProductCard from '../shop/ProductCard'

const CategoryPage = () => {
  const { categoryName } = useParams()
  console.log(categoryName);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (categoryName) {
      const filtered = products.filter((product) => product.category == categoryName);
      setFilterData(filtered);
    }
    else {
      setFilterData([]);
    }
  },
    [categoryName, products]);

  
    useEffect(() =>{
      window.scrollTo(0,0)
    })

  console.log(filterData);



  return <>

    <section className='section__container bg-pink-100'>
      <h2 className='section__header capitalize'>{categoryName}</h2>
      <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
    </section>

    {/* product card*/}
    <div className='section__container'>
      <ProductCard products={filterData} />

    </div>


  </>
}

export default CategoryPage
