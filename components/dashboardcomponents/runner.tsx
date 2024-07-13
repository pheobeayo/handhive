import React from "react";
import ProfilePhoto from "../../assets/reviewdetail/profilephoto.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";


import Image from "next/image";

const Runner = () => {
    const reviews = [
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            review:
                "“Let me help you get your apartment cleaned up” ",

        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            review: "“I make grocery shopping easier.”",

        },
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            review:
                "“Let me help you get your apartment cleaned up” ",

        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            review: "“I make grocery shopping easier.”",

        },
    ];
    return (
        <div className="pt-11">
            <div className="flex justify-between">
                <p className="text-sm text-[#556166] font-semibold">Runners around you</p>
                <Link href="/errands" className="text-sm text-[#556166]">
                    Runners
                </Link>
            </div>
            <Swiper slidesPerView={2} spaceBetween={10}  className="mySwiper">
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="bg-white mt-2  px-2 ">
                        <Link href="/errands" className="">
                            <div className="pt-2 bg-[#F8F8F8] rounded-[8px] border-[#457B9D] border-2 ">
                                <div className="flex space-x-2  items-center">
                                    <Image src={review.image} alt="profile_photo" />
                                    <p className="text-sm font-normal text-[#001219]">
                                        {review.name}
                                    </p>
                                </div>
                                <p className="text-sm font-normal text-[#2B3A3F]">
                                    {review.review}
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Runner;