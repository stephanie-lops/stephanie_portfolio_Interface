import React from "react"
import bannerImage from '../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>
    )
} 

export default Banner;