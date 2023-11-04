import React, { Fragment } from 'react';
import contactImage from "../images/contact.svg";
import { ContactMail } from '@mui/icons-material';

const Contact = () => {
    return (
        <Fragment>
            <div className="px-12 flex flex-col lg:flex-row items-center justify-around pb-10 pt-12 bg-gray-50">
                <div className="w-full lg:w-96">
                    <img src={contactImage} alt="Contact us" />
                </div>

                <div className="">
                    <div className="card w-full lg:w-auto bg-base-100 shadow-2xl py-10">
                        <h1 className='text-center text-4xl py-5 font-bold'> <ContactMail fontSize='inherit' /> Contact us </h1>
                        <p className='text-center text-base font-semibold text-gray-500'> Lorem ipsum dolor sit amet. </p>
                        <hr />
                        <div className='px-5 pt-5 flex flex-col gap-5'>
                            <input type="text" placeholder="You name" className="input input-bordered w-96 " />
                            <input type="email" placeholder="You email" className="input input-bordered w-96 " />
                            <input type="text" placeholder="You message" className="input input-bordered w-96 h-32" />
                            {/* <input type='button' value="Send" className="input input-bordered w-96 " /> */}
                            <input type="button" value="Send" className=' btn btn-primary w-96 text-white'/>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default Contact;