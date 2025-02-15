import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/header.png'

const Banner = () => {
  return (
    <div className='section__container header_container bg-pink-100'>

      <div className='header__content z-30'>
        <h4>UP TO 20% Discount on</h4>
        <h1>Girl's Fashion </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos, eius enim quia itaque vel debitis mollitia ducimus odit sed, consequatur asperiores dolor quaerat! At unde voluptatum voluptate libero quo.</p>

        <button className="btn"><Link to="/shop">EXPLORE NOW</Link></button>
      </div>

      <div className='header__image'>
        <img src={bannerImg} alt="banner Img" />
      </div>

    </div>
  )
}

export default Banner
