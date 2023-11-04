import React, { Fragment } from 'react';
import MetaData from "../Layout/MetaData";
import CheckOutSteps from "./CheckOutSteps";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmOrder = () => {

    const { shippingInfo, cartItems } = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.user);
    // navigate 
    const navigate = useNavigate()
    // calculate subtotal 
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    console.log(cartItems);
    const shippingPrice = subtotal > 1000 ? 0 : 200;
    const tax = subtotal * 0.05;
    const totalPrice = subtotal + shippingPrice + tax;
    const address = `${shippingInfo?.address},${shippingInfo?.state},${shippingInfo?.pinCode},${shippingInfo?.country},${shippingInfo?.phoneNumber}`;

    const proceedToPayment = () => {

        const data = {
            subtotal,
            shippingPrice,
            tax,
            totalPrice,
        };
        sessionStorage.setItem("orderInfo", JSON.stringify(data));
        navigate("/process/payment")
    }

    return (
        <Fragment>
            <MetaData title="Confirm oder" />
            <CheckOutSteps activeStep={1} />
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full px-12">
                <div>
                    <div>
                        <h2 className='text-3xl font-bold text-primary'> Shipping Info </h2>
                        <div className='flex flex-col gap-5 pt-5'>
                            <div className='text-xl font-semibold'>
                                <p>Name : <span> {user?.name} </span></p>
                            </div>
                            <div className='text-xl font-semibold'>
                                <p>Phone Number : <span> {shippingInfo?.phoneNumber} </span></p>
                            </div>
                            <div className='text-xl font-semibold'>
                                <p>Address : <span> {address} </span></p>
                            </div>
                        </div>
                    </div>
                    {/* cart summary  */}
                    <div className='pt-7'>
                        <h2 className='text-3xl font-bold text-primary border-gray-900 border-b-2 py-5'> Your cart Items </h2>
                        <div>
                            {
                                cartItems &&
                                cartItems?.map((item, index) => (
                                    <div
                                        key={index}
                                        className='mt-10 flex justify-between items-center'
                                    >
                                        <img src={item?.images} alt={item?.name} className='w-48 h-48 rounded-md' />
                                        <Link to={`/products/${item?.product}`} className='text-xl font-bold'> {item?.name} </Link>
                                        <span className='text-xl font-bold'> {item?.quantity} X {item?.price} ={""} <b> {item?.price * item.quantity} </b> </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* order summary */}
                <div className='w-96 border-l-2 p-2 flex flex-col gap-10 pt-5'>
                    <h1 className='text-primary text-3xl font-bold border-b-2 text-center pb-5'> Order Summary </h1>
                    <div className='flex justify-between items-center px-12 text-xl font-bold'> <p> Subtotal </p> <span> {subtotal} </span> </div>
                    <div className='flex justify-between items-center px-12 text-xl font-bold'> <p> Shipping Charge </p> <span> {shippingPrice} </span> </div>
                    <div className='flex justify-between items-center px-12 text-xl font-bold'> <p> GSR </p> <span> {tax} </span> </div>
                    <div className="border-t-2 border-gray-800">
                        <div className='flex justify-between items-center px-12 pt-5 text-xl font-bold'> <p> Total </p> <span> {totalPrice} </span> </div>
                    </div>
                    <button className='btn btn-primary text-white font-bold text-xl' onClick={proceedToPayment}> Proceed To payment </button>
                </div>
            </div>
        </Fragment>
    );
};

export default ConfirmOrder;