import React, { Fragment } from 'react';

const Success = () => {
    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-primary text-4xl font-bold pt-96'> আপনার পেমেন্ট  সফল ভাবে গ্রহন করা হইছে। </h1>
                <p className='text-xl text-orange-500 font-bold pt-5'> Agrifuture এ শপিং করার জন্য আপনাকে ধন্যবাদ </p>
            </div>
        </Fragment>
    );
};

export default Success;