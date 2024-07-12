import React from "react";
import Link from "next/link";
import { HiArrowCircleRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";


const Errand = () => {
    const errands = [
        {
           
            name: "Cleaning service",
            review: "$20",

        },
        {
            
            name: "Grocery shopping",
            review: "$20",

        },
        {
            
            name: "Device fixing",
            review: "$20",

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
            <Swiper slidesPerView={2} spaceBetween={2} className="mySwiper">
            {errands.map((errand, index) => (
                <SwiperSlide key={index} className="bg-white mt-5 px-2 py-3">
                    <Link href="/errands" className="">
                    <div className="pt-4 bg-[#F8F8F8] rounded-[8px] border-[#E63946] border-2 pb-2 mt-4">
                        <div className="border rounded-lg bg-white">
                            <div className="flex gap-10">
                                <div className="w-1/2 mt-4">
                                    <p className="text-lg font-bold text-[#001219] mx-2">
                                        {errand.name}
                                    </p>
                                    <p className="text-sm font-semibold text-[#457B9D] mx-4">
                                        {errand.review}
                                    </p>
                                </div>
                                <div className="mt-3 w-1/2">
                                    <HiArrowCircleRight color="red" className="mt-4 mb-4 mx-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </SwiperSlide>

            ))
            }
            </Swiper>
        </div >
    );
};

export default Errand;