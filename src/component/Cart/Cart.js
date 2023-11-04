import { RemoveShoppingCart } from '@mui/icons-material';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart, removeItemsFromCart } from '../action/cartAction';
import CartItems from './CartItems';
import { toast } from 'react-toastify';



const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);

    const increaseQuantity = (productId, quantity, stock) => {

        const newQty = quantity + 1;
        if (stock <= quantity) {
            return
        }
        dispatch(addItemToCart(productId, newQty))
        toast.success("Update your cart quantity")
    }
    const decreaseQuantity = (productId, quantity) => {

        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemToCart(productId, newQty))
        toast.success("Update your cart quantity")
    }


    const deleteCartItems = (id) => {

        dispatch(removeItemsFromCart(id))
        toast.warn("Item delete from cart")

    }


    return (
        <Fragment>
          
            {cartItems.length === 0 ? (
                <div className='flex flex-col justify-center items-center' style={{ width: '90%', height: '90vh', margin: '0 auto' }}>
                    <RemoveShoppingCart style={{ fontSize: '5vmax', color: 'tomato' }} />
                    <p className='text-2xl font-bold opacity-60'> No Product in Your cart </p>
                    <Link to="/products" className='text-xl font-bold opacity-60'> View Products </Link>
                </div>
            )
                : (
                    <Fragment>
                        <div className="p-5">
                            <div className="bg-black m-auto text-white flex flex-col lg:flex-row items-center justify-between text-lg font-bold p-5 rounded-md" style={{ width: '90%' }}>
                                <p> Product </p>
                                <p> Quantity </p>
                                <p> Subtotal </p>
                            </div>
                            {
                                cartItems &&
                                cartItems.map((item) => (
                                    <div className='m-auto' style={{ width: '90%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }} key={item.product}>
                                        <CartItems item={item} deleteCartItems={deleteCartItems} />
                                        <div className='flex justify-center items-center' style={{ height: '8vmax' }}>
                                            <button
                                                onClick={() => decreaseQuantity(item?.product, item?.quantity)}
                                                className='w-7 h-10 bg-black text-white text-2xl font-bold'> - </button>
                                            <input
                                                type="number"
                                                value={item?.quantity}
                                                readOnly className='w-7'
                                                style={{ outline: 'none', textAlign: 'center', font: '400 0.8vmax' }} />
                                            <button
                                                onClick={() => increaseQuantity(item?.product, item?.quantity, item?.stock)}
                                                className='w-7 h-10 bg-black text-white text-2xl font-bold'> + </button>
                                        </div>
                                        <p style={{
                                            display: 'flex',
                                            padding: '0.5vmax',
                                            height: '8vmax',
                                            alignItems: 'center',
                                            boxSizing: 'border-box',
                                            font: '300 1vmax',
                                            justifyContent: 'flex-end',
                                            color: 'rgba(0, 0, 0, 0.753)'
                                        }}>
                                            {` ${item?.price * item?.quantity} `}
                                        </p>
                                    </div>
                                ))
                            }
                            <div className='grid grid-cols-3 gap-4 full'>
                                <div></div>
                                <div className='flex justify-between box-border col-span-2 full' style={{ margin: '1vmax 5vmax', padding: '2vmax 0', borderTop: '3px solid black' }}>
                                    <p> Gross Total </p>
                                    <p> {`${cartItems.reduce(
                                        (acc, item) => acc + item?.quantity * item?.price, 0
                                    )}`} </p>
                                </div>
                                <div></div>
                                <div className='flex justify-end col-span-1 items-end'>
                                    <Link to="/shipping" className='btn btn-primary w-52 rounded-full text-white'> Check out </Link>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Cart;