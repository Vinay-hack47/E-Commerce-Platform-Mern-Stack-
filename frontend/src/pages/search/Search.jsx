import React, { useState } from 'react'
import productsData from "../../data/product.json"
import ProductCard from '../shop/ProductCard';

const Search = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    const filtered = productsData.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );

    setFilterProducts(filtered);
  }
 
  return <>
    <div>
    <section className='section__container bg-pink-100'>
      <h2 className='section__header capitalize'>Search Products</h2>
      <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
    </section>

    <section className='flex justify-center items-center py-8 px-4'>
      <div className='w-full max-w-4xl flex flex-col md:flex-row items-center gap-4'>
        <input type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='search-bar w-full p-2 border rounded'
        placeholder='Search for products...'
         />

         <button className='search-button w-full md:w-auto py-2 px-8 bg-red-600 text-white rounded' onClick={handleSearch}>Search</button>
      </div>
    </section>

    <section>
      <ProductCard products={filterProducts}></ProductCard>
    </section>
    </div>
    </>
}

export default Search