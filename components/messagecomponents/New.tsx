import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const New = () => {
    const messages = [

        {

            title: "John Doe",
            people: "When will you deliver",
            time: "1:30pm",

        },
        {
            title: "Mary Doe",
            people: "When will you deliver",
            time: "1:30pm",
        },
        {
            title: "John Doe",
            people: "When will you deliver",
            time: "2:30pm",
        },
        {
            title: "Mary Doe",
            people: "When will you deliver",
            time: "2:30pm",
        },
        {
            title: "John Doe",
            people: "When will you deliver",
            time: "3:30pm",
        },

        {
            title: "Mary Doe",
            people: "When will you deliver",
            time: "4:30pm",
        },

    ];
    return (
        <div className="pt-11 mb-28">
            <div className="flex justify-between">
                <p className="text-sm text-[#2E0039] font-semibold">Messages</p>
                <Link href="/messages" className="text-sm text-[#2E0039]">
                    View all
                </Link>
            </div>

            <Swiper slidesPerView={2} spaceBetween={10} className="mySwiper">
                {messages.map((message, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#F8F8F8] rounded-[8px] mt-4 border-[#457B9D]">


                            <div className="px-2 mt-3">
                                <h2 className="text-sm font-semibold">{message.title}</h2>

                                <div className="flex justify-between mt-2">

                                    <p className="text-xs text-[#888888] font-medium">
                                        {message.people}
                                    </p>
                                    <p className="text-xs text-[#888888] font-medium">
                                        {message.time}
                                    </p>


                                </div>
                            </div>

                            <div className="bg-[#457B9D] hover:bg-[#457B9D] text-center text-white hover:text-white rounded-b-[8px] font-semibold text-sm py-1 mt-5">
                                Read
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default New;