import { CheckCircle } from '@mui/icons-material';
import React, { Fragment } from 'react';
import aboutImage from "../images/aboutImage.svg";

const Aboutus = () => {
    return (
        <Fragment>
            <div className='flex flex-col lg:flex-row w-full items-center gap-10 bg-base-300 px-12 justify-between mt-12 mb-10 p-12'>
                <div className='w-full lg:w-1/2 flex flex-col'>
                    <h1 className='text-5xl font-bold text-black py-5 font-serif'> About Us !!</h1>
                    <h3 className='text-sm lg:text-lg text-gray-600 font-medium font-sans'> Lorem, ipsum dolor sit amet consectetur <span className='text-primary'> adipisicing elit </span> </h3>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className='mt-5 ml-3 lg:ml-7'>
                        <ul>
                            <li className='text-primary font-semibold text-2xl flex items-center gap-5 '> < CheckCircle className='text-primary text-4xl' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore! </li>
                            <p className='text-sm mt-2 pl-10 font-bold'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                            <li className='text-primary font-semibold text-2xl flex items-center gap-5'> <CheckCircle className='text-primary text-4xl' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore! </li>
                            <p className='text-sm mt-2 pl-10 font-bold'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                            <li className='text-primary font-semibold text-2xl flex items-center gap-5'> <CheckCircle className='text-primary text-4xl' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore! </li>
                            <p className='text-sm mt-2 pl-10 font-bold'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                            <li className='text-primary font-semibold text-2xl flex items-center gap-5'> <CheckCircle className='text-primary text-4xl' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore! </li>
                            <p className='text-sm mt-2 pl-10 font-bold'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                            <li className='text-primary font-semibold text-2xl flex items-center gap-5'> <CheckCircle className='text-primary text-4xl' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore! </li>
                            <p className='text-sm mt-2 pl-10 font-bold'> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                        </ul>
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='w-full lg:w-4/12 pt-10'>
                    <img src={aboutImage} alt="About us" className='w-full' />
                </div>
            </div>
        </Fragment>
    );
};

export default Aboutus;