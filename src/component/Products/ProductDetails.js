import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import profile from "../images/user/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, productDetails } from '../action/productAction';
import Carousel from 'react-material-ui-carousel';
import { toast } from 'react-toastify';
import Loader from '../Layout/Loader';
import { addItemToCart } from '../action/cartAction';



const ProductDetails = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { loading, error, product } = useSelector((state) => state.productDetails)
    // state for quantity 
    const [quantity, setQuantity] = useState(1);

    const options = {
        size: "large",
        readOnly: true,
        precision: 0.5,
        name: "uncontrolled-rating"

    }
    // increase quantity 
    const increaseQuantity = () => {

        if (product.Stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const decreaseQuantity = () => {

        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);

    }

    const addToCartHandler = () => {
        dispatch(addItemToCart(productId, quantity))
        toast.success("Item added to cart");
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(productDetails(productId))

    }, [productId, dispatch, error])

    return (
        <Fragment>

            {
                loading ? (<Loader />)
                    :
                    (<Fragment>
                        <div>
                            <div className='w-full bg-gray-300 flex flex-col lg:flex-row justify-evenly lg:items-center px-12' style={{ minHeight: '90vh' }}>
                                <div className='w-full lg:w-1/2 pb-5 lg:pb-0'>
                                    <div
                                        className='flex lg:justify-center lg:items-center shadow-xl rounded-md'
                                        style={{
                                            width: '600px', height: '600px', border: '2px solid #fff'
                                        }}>
                                        <Carousel className='w-full h-full'>
                                            {
                                                product?.images &&
                                                product?.images.map((item, i) => (
                                                    <img
                                                        key={item.url}
                                                        src={item?.url}
                                                        alt={`${i} Slide`}
                                                        className='w-full h-full'
                                                    />
                                                ))
                                            }

                                        </Carousel>
                                    </div>
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col  justify-start items-start p-5'>
                                    <p className='text-3xl pb-3 font-bold'> {product?.name} </p>
                                    <p className='text-xl font-bold opacity-60 border-b border-gray-500 w-full'>  productID: #{product?._id} </p>

                                    <div className="w-full flex items-center justify-start py-10 border-b border-gray-500">
                                        <Rating
                                            {...options}
                                        /> <span className='text-lg font-semibold text-gray-600'> ({product?.numOfReviews} Reviews) </span>
                                    </div>
                                    <div>
                                        <h1 className='text-4xl font-bold py-7'> BDT {product?.price} /- </h1>
                                        <div className='flex justify-start items-center border-b border-gray-500 pb-7'>
                                            <button
                                                className='text-white font-bold text-2xl'
                                                style={{
                                                    width: 45, height: 45, backgroundColor: '#1c1c1c'
                                                }}
                                                onClick={decreaseQuantity}
                                            > - </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                readOnly
                                                style={{ width: 60, height: 45, textAlign: 'center', outline: 'none' }}
                                            />
                                            <button
                                                className='text-white font-bold text-2xl' style={{
                                                    width: 45, height: 45, backgroundColor: '#1c1c1c'
                                                }}
                                                onClick={increaseQuantity}
                                            > + </button>
                                            <button
                                                className='btn btn-primary ml-7 rounded-full text-md'
                                                disabled={product.Stock <= 1 ? true : false}
                                                onClick={addToCartHandler}
                                            > Add to cart </button>
                                        </div>
                                        <div className='py-7 border-b border-gray-500'>
                                            <p className=' text-2xl font-bold text-gray-500'> status:
                                                <span className={product?.Stock <= 1 ? "text-red-700" : "text-primary"}> {product.Stock < 1 ? "OutOfStock" : "InStock"} </span> </p>
                                        </div>
                                        <div className='py-7'>
                                            <p className='text-xl font-bold text-gray-600'> Description </p>
                                            <p className='py-4 text-justify font-semibold opacity-70'> {product?.description} </p>
                                        </div>
                                        <button
                                            className='btn w-52 bg-primary text-white outline-none border-0 rounded-full'> Submit Review </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-center py-7 text-3xl font-bold  uppercase pb-4'> Reviews </h1>
                                <hr style={{ width: 200, border: '2px solid gray', alignItems: 'center', margin: '0 auto' }} />
                            </div>
                            <div className='flex gap-5 items-center justify-center mt-24 overflow-x-scroll pb-5 px-12'>
                                <div className="w-full h-96 bg-gray-300 flex flex-col items-center rounded-md px-5">
                                    <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                                    <h2 className='py-4 text-xl font-bold'> Jon Denver </h2>
                                    <p className=' text-justify font-semibold text-sm opacity-70'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                                </div>
                                <div className="w-full h-96 bg-gray-300 flex flex-col items-center rounded-md px-5">
                                    <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                                    <h2 className='py-4 text-xl font-bold'> Jon Denver </h2>
                                    <p className=' text-justify font-semibold text-sm opacity-70'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                                </div>
                                <div className="w-full h-96 bg-gray-300 flex flex-col items-center rounded-md px-5">
                                    <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                                    <h2 className='py-4 text-xl font-bold'> Jon Denver </h2>
                                    <p className=' text-justify font-semibold text-sm opacity-70'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                                </div>
                                <div className="w-full w h-96 bg-gray-300 flex flex-col items-center rounded-md px-5">
                                    <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                                    <h2 className='py-4 text-xl font-bold'> Jon Denver </h2>
                                    <p className=' text-justify font-semibold text-sm opacity-70'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                                </div>
                                <div className="w-full h-96 bg-gray-300 flex flex-col items-center rounded-md px-5">
                                    <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                                    <h2 className='py-4 text-xl font-bold'> Jon Denver </h2>
                                    <p className=' text-justify font-semibold text-sm opacity-70'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                                </div>
                            </div>
                        </div>

                    </Fragment>)
            }
        </Fragment>
    );
};

export default ProductDetails;