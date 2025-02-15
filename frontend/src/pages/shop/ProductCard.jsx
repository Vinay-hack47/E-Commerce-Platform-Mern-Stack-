import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating'

const ProductCard = ({ products }) => {

  if (!Array.isArray(products)) {
    return <p>No products available</p>; // or some other fallback content
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
      {
        products.map((pro, index) => {
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className='relative'>
                <Link to={`/shop/${pro._id}`}>
                  <img src={pro.image} alt="product image" className="w-full h-48 object-cover object-center hover:scale-105 transition-all duration-308" />
                </Link>

                <div className='hover:block absolute top-3 right-3'>
                  <button>
                    <i class="ri-shopping-cart-2-line bg-red-600 p-1.5 text-white hover:bg-primary-dark"></i>
                  </button>
                </div>
              </div>

              {/*product details*/}
              <div className='product__card__content'>
                <h4>{pro.name}</h4>
                <p>${pro.price} {pro.oldPrice ? <s>${pro ?.oldPrice}</s> : null}</p>
                <Rating rating = {pro.rating}></Rating>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductCard
