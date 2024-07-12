import React from "react";
import ProfilePhoto from "../../assets/reviewdetail/profilephoto.svg";
import Star from "../../assets/reviewdetail/Star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import Image from "next/image";

const Reviews = () => {
    const reviews = [
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            review:
                "Alicia did an amazing job with cleaning service. Highly recommend her services!",
            ratings: Star,
            
        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            review: "Great work, very professional and quick turnaround.",
            ratings: Star,
            
        },
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            review:
                "Alicia did an amazing job with cleaning service. Highly recommend her services!",
            ratings: Star,
            
        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            review: "Great work, very professional and quick turnaround.",
            ratings: Star,
            
        },
    ];
    return (
        <div className="pt-11">
            <div className="flex justify-between">
                <p className="text-sm text-[#556166] font-semibold">Most frequent errands</p>
                <Link href="/errands" className="text-sm text-[#556166]">
                    Errands
                </Link>
            </div>
            <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">

            {reviews.map((review, index) => (
                <SwiperSlide key={index} className="bg-white mt-5 px-2 py-3">
                    <Link href="/errands" className="">
                    <div className="pt-4">
                        <div className="flex space-x-2 pt-3 items-center bg-[#F8F8F8] rounded-[8px] border-[#ADAF47] border-2  pb-2 mt-4">
                            <Image src={review.image} alt="profile_photo" />
                            <p className="text-sm font-semibold text-[#001219]">
                                {review.name}
                            </p>
                        </div>
                        <p className="text-sm font-semibold text-[#2B3A3F]">
                            {review.review}
                        </p>
                    </div>
                    <div className="flex justify-between flex-row ">
                        <div className="flex text-sm font-semibold text-[#3D3D3D] ">
                            Ratings:{" "}
                            <Image src={review.ratings} alt="Star" />
                            <Image src={review.ratings} alt="Star" />
                            <Image src={review.ratings} alt="Star" />
                            <Image src={review.ratings} alt="Star" />
                            <Image src={review.ratings} alt="Star" />
                        </div>
                        
                    </div>
                    </Link>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default Reviews;