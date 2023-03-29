import React from "react";
// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerData } from "./bannerData";
const Banner = () => {
  return (
    <>
      <Swiper
        loop={true}
       
        navigation={true}
        modules={[ Navigation]}
        className="cursor-pointer"
      >
        {bannerData?.map(({title,subTitle,description,image},index)=>(
          <SwiperSlide>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">
                  <span className="font-bold">{subTitle}</span>{description}
                </p>
                <button className="btn btn-primary text-white">Buy Now</button>
              </div>
              <div className="">
                <img
                  src={image}
                  className="max-w-sm rounded-lg shadow-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide> 
        ))}
       
      
      </Swiper>
    </>
  );
};

export default Banner;
