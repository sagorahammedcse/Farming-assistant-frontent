import React from 'react';

import tree from "../images/category/tree.jpg";
import vegetable from "../images/category/vagitable.jpg";
import doctor from "../images/category/doctor.jpg";
const CategoryCard = () => {
    const fakeData = [
        {
            id: 1,
            image: tree,
            title: "চারা গাছ",
            description: "সম্পূর্ণ পৃথিবী গাছের বৃক্ষগুলি ছাড়াই অধ্যাত্মিক এবং প্রাকৃতিক সৌন্দর্যে অভিভূত। গাছগুলির মাধ্যমে প্রাকৃতিক সম্পদ এবং সংতৃপ্তি পেতে আমরা নিয়মিত যোগাযোগ করি।",
            link: "/products",

        },
        {
            id: 2,
            image: vegetable,
            title: "সতেজ শাকসবজি",
            description: "শাক-সবজি মানব আহারের একটি অত্যন্ত গুরুত্বপূর্ণ অংশ, যা পৃথিবীর প্রাকৃতিক উপাদান হতে উৎপন্ন হয়।",
            link: "/products",

        },
        {
            id: 3,
            image: doctor,
            title: "কৃষিতথ্য",
            description: "কৃষি ডাক্তার এমন একজন পেশাদার ব্যক্তি যার কাজ হলো কৃষি এবং উদ্যানবানিক প্রজেক্টগুলির পরামর্শ এবং মূল্যায়ন প্রদান করা।",
            link: "/products",

        },
    ]
    return (
        <div className='pt-10 px-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fakeData?.map((item) => (
                        <div className="card  bg-primary shadow-xl image-full" key={item?.id}>
                            <figure><img loading='lazy' src={item?.image} alt={item?.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> {item?.title} </h2>
                                <p className=' opacity-50'>{item?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryCard;