import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Suspense } from 'react';
import lazyLoadedHeroOne from "../images/hero-1.jpg";
import lazyLoadedHeroTwo from "../images/hero-2.jpg";
import lazyLoadedHeroThree from "../images/hero-3.jpg";
// Lazy load the images
// const lazyLoadedHeroOne = lazy(() => import("../images/hero-1.jpg"));
// const lazyLoadedHeroTwo = lazy(() => import("../images/hero-2.jpg"));
// const lazyLoadedHeroThree = lazy(() => import("../images/hero-3.jpg"));
const Hero = () => {

    const heroItem = [
        {
            id: 1,
            title: "Your market place for fresh farm products",
            image: lazyLoadedHeroOne,
        },
        {
            id: 2,
            title: "কৃষি পণ্য প্রক্রিয়াজাতকরণ এবং বিশ্ব রফতানি বাজার",
            image: lazyLoadedHeroTwo,
        },
        {
            id: 3,
            title: "Your market place for fresh farm products",
            image: lazyLoadedHeroThree,
        },
    ]

    return (
        <Swiper
            spaceBetween={50}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
        // className='container'
        >
            {
                heroItem.map((item) => (
                    <SwiperSlide key={item?.id}>
                        <Suspense fallback={<div> Loading... </div>}>
                            <div className="hero" style={{ backgroundImage: `url("${item?.image}")`, height: "70vh", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundOrigin: 'content-box', objectFit: 'cover', backgroundSize: 'cover' }}>

                                <div className="hero-overlay bg-opacity-70" ></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="">
                                        <h1 className="text-5xl font-bold text-white mb-5"> {item?.title} </h1>
                                        <p className="mb-5 text-lg font-bold text-gray-300">Welcome to the Agrifutures <br />
                                            where you can purchase products from fresh farms all over Bangladesh
                                        </p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </Suspense>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default Hero;