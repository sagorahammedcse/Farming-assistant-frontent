
import React, { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import productOne from "../images/Organic product/Product 1.jpg";
import productTwo from "../images/Organic product/product 2.jpg";
import productThree from "../images/Organic product/product 3.jpg";
import productFour from "../images/Organic product/product 4.jpg";
import { LocationOn, Star } from '@mui/icons-material';
import { Rating } from '@mui/material';

const FeaturedProduct = () => {

    const products = [
        {
            id: 1,
            name: "ব্রকলি",
            image: productOne,
            price: "৮০",
        },
        {
            id: 2,
            name: "পাকা পেপে",
            image: productTwo,
            price: "১২০",
        },
        {
            id: 3,
            name: "গাঁজর",
            image: productThree,
            price: "১৫০",
        },
        {
            id: 4,
            name: "বাঁধা কপি",
            image: productFour,
            price: "৭০",
        },
        {
            id: 5,
            name: "বাঁধা কপি",
            image: productFour,
            price: "৭০",
        },
        {
            id: 6,
            name: "বাঁধা কপি",
            image: productFour,
            price: "৭০",
        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/products")
    }

    return (
        <Fragment>
            <div className=' px-12 mt-10'>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold text-primary lg:text-center'> ফিচার্ড প্রডাক্ট </h1>
                    <p onClick={navigateHandler} className='text-xl text-orange-700 font-bold cursor-pointer'> View All </p>
                </div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .7"
                    transitionDuration={5000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='mt-10'

                >

                    {
                        products &&
                        products?.map((product) => (
                            <div className="w-full md:w-auto lg:w-auto mx-2 h-auto bg-gray-100 rounded-lg shadow-xl relative" key={product.id}>
                                <img loading='lazy' src={product?.image} alt={product.name}
                                    className='p-1 rounded-2xl w-full h-60' />
                                <div className='mt-5 px-2'>
                                    <div className='flex justify-between gap-5 items-center'>
                                        <p className='text-xl font-bold'> {product?.name} </p>
                                        <Rating
                                            style={{ color: 'orange' }}
                                            name='review'
                                            readOnly
                                            precision={0.5}
                                            value={4}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </div>
                                    <p className='flex  gap-10 pt-2 text-gray-400 font-bold text-xl'> <LocationOn /> Barguna,Barishal </p>
                                    <div className='flex gap-3 items-center p-2 pb-5'>
                                        <p className='text-lg font-extrabold text-primary'> {product?.price} /- টাকা </p>
                                        <p className='bg-gray-400 p-2 rounded-xl px-5'> 5% </p>

                                    </div>
                                </div>
                                <div className='pb-0 mt-10'>
                                    <button
                                        className='btn btn-primary w-full absolute bottom-0 left-0 hidden  transition-opacity opacity-0 delay-300'>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </Fragment >
    );
};

export default FeaturedProduct;