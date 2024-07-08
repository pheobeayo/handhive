import React from "react";
import ErrandPhoto from "../../assets/errandetail/errandphoto1.svg";
import ErrandPhoto2 from "../../assets/errandetail/errandphoto2.svg";
import ErrandPhoto3 from "../../assets/errandetail/errandphoto3.svg";
import pen from "../../assets/errandetail/pen.svg";
import Image from "next/image";

const Errandhistory = () => {
    const errands = [
        {
            image: ErrandPhoto,
            name: "Cleaning service",
            review: "In progress",
            ratings: pen,
            date: "01/07/2024",
        },
        {
            image: ErrandPhoto2,
            name: "Grocery shopping",
            review: "Completed",
            ratings: pen,
            date: "01/07/2024",
        },
        {
            image: ErrandPhoto3,
            name: "Device fixing",
            review: "Cancelled",
            ratings: pen,
            date: "01/07/2024",
        },

    ];
    return (
        <div className="pt-11">
            <div>
                <p className="text-lg text-[#556166] font-semibold">Errand history</p>
                <p className="text-sm text-[#2B3A3F] font-semibold">New</p>
            </div>

            {errands.map((errand, index) => (
                <div key={index} className="bg-white mt-5 px-2 py-3">
                    <div className="pt-4">
                        <div className="flex gap-10">
                            <div className="w-1/3">
                                <Image src={errand.image} alt="profile_photo" />
                            </div>
                            <div className="w-1/2 mt-4">
                                <p className="text-lg font-bold text-[#001219]">
                                    {errand.name}
                                </p>
                                <p className="text-sm font-semibold text-[#2B3A3F]">
                                    {errand.review}
                                </p>
                            </div>
                            <div className="mt-3">
                                <Image src={errand.ratings} alt="Star"  />
                                <p className="text-xs text-[#2B3A3F] mt-4">{errand.date}</p>
                            </div>
                        </div>
                    </div>
                </div>

            ))
            }
        </div >
    );
};

export default Errandhistory;