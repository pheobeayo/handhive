import React from "react";
import ProfilePhoto from "../../assets/reviewdetail/profilephoto.svg";
import Star from "../../assets/reviewdetail/smallstar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";


import Image from "next/image";

const Reviews = () => {
    const reviews = [
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            occupation: "Cleaner",
            ratings: Star,
            review:
                "rated by 20 people",


        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            occupation: "Cleaner",
            ratings: Star,
            review: "rated by 15people",
        },
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            occupation: "Cleaner",
            ratings: Star,
            review:
                "rated by 15people",


        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            occupation: "Cleaner",
            ratings: Star,
            review: "rated by 15people",
        },
    ];
    return (
        <div className="pt-11">
            <div className="flex justify-between">
                <p className="text-sm text-[#556166] font-semibold">Top reviews</p>
                <Link href="/errands" className="text-sm text-[#556166]">
                    Top reviews
                </Link>
            </div>
            <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">

                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="bg-white mt-5 px-2 py-3">
                        <Link href="/errands" className="">
                            <div className="pt-4 rounded-[8px] border-[#ADAF47] border-2  pb-2 mt-4">
                                <div className="flex space-x-2 pt-3 items-center bg-white ">
                                    <Image src={review.image} alt="profile_photo" />
                                    <p className="text-sm font-semibold text-[#001219] ">
                                        {review.name}
                                        <br />
                                        {review.occupation}
                                    </p>
                                </div>
                                <p className="text-sm font-semibold text-[#2B3A3F] p-2">
                                    {review.review}
                                </p>
                                <div className="flex justify-between flex-row p-2 ">
                                    <div className="flex text-sm font-semibold text-[#3D3D3D] ">
                                        Ratings:{" "}
                                        <Image src={review.ratings} alt="Star" />
                                        <Image src={review.ratings} alt="Star" />
                                        <Image src={review.ratings} alt="Star" />
                                        <Image src={review.ratings} alt="Star" />
                                        <Image src={review.ratings} alt="Star" />
                                    </div>

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