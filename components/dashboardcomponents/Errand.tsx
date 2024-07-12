import React from "react";
import Link from "next/link";
import ErrandPhoto from "../../assets/errandetail/cleaning.svg";
import ErrandPhoto2 from "../../assets/errandetail/grocery.svg";
import ErrandPhoto3 from "../../assets/errandetail/device.svg";
import { HiArrowCircleRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Errand = () => {
    const errands = [
        {
            image: ErrandPhoto,
            name: "Cleaning service",
            review: "$20",

        },
        {
            image: ErrandPhoto2,
            name: "Grocery shopping",
            review: "$20",

        },
        {
            image: ErrandPhoto3,
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
                    <Link href="/errands" className="bg-[#F8F8F8] rounded-[8px] border-[#E63946] border-2 pb-2 mt-4">
                    <div className="pt-4">
                        <div className="border rounded-lg bg-white">
                            <div className="w-full">
                                <Image src={errand.image} alt="profile_photo" className="rounded-t-[8px]" />
                            </div>
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
                                    <button type="button" className="py-2 px-4 w-32 flex justify-center items-center bg-[#06C270] hover:bg-[#06C270] focus:ring-[#06C270] focus:ring-offset-white text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg border-[#06C270]">
                                        Most used
                                    </button>
                                    <HiArrowCircleRight color="blue" className="mt-4 mb-4 mx-10" />
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