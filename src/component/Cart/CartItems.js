import React from 'react';
import { Link } from 'react-router-dom';

const CartItems = ({ item, deleteCartItems }) => {
    // console.log(item)
    return (
        <div className='flex p-2 h-40 items-start box-border gap-5 pb-10 overflow-x-scroll lg:overflow-hidden'>
            <img src={item?.images} alt={item?.name} className='w-52 rounded-md h-32' />
            <div className='flex flex-col' style={{ margin: '0.3vmax 1vmax' }}>
                <Link to={`/products/${item?.product}`} className='text-xl font-bold capitalize'> {item?.name} </Link>
                <span className='text-primary text-sm font-bold'> {`Price: ${item?.price}`} </span>
                <p onClick={() => deleteCartItems(item.product)} className='text-lg font-bold text-red-500 cursor-pointer'> Remove </p>
            </div>
        </div>
    );
};

export default CartItems;