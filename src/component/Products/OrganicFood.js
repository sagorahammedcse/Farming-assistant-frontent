import React, { Fragment } from 'react';
import productOne from "../images/Organic product/Product 1.jpg";
import productTwo from "../images/Organic product/product 2.jpg";
import productThree from "../images/Organic product/product 3.jpg";
import productFour from "../images/Organic product/product 4.jpg";
import { LocationOn, Star } from '@mui/icons-material';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';





const OrganicFood = () => {

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
    ]

    return (
        <Fragment>
            <div className='pt-20 pb-10 lg:px-12 md:px-10'>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold text-primary lg:text-center'>অর্গানিক ফুড </h1>
                    <Link to="/products" className='text-xl text-orange-700 font-bold'> View All </Link>
                </div>
                <div className='pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        products?.map((product) => (
                            <div className="w-96 h-auto bg-gray-100 rounded-lg shadow-xl relative" key={product.id}>
                                <img loading='lazy' src={product?.image} alt={product.name}
                                    className='p-1 rounded-2xl w-full h-64' />
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
                                <div className='pb-1 mt-10'>
                                    <Link
                                        to="/products"
                                        className='btn btn-primary w-full absolute bottom-0 left-0 hidden  transition-opacity opacity-0 delay-300 pt-4 justify-center items-center'> View details </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </Fragment>
    );
};

export default OrganicFood;