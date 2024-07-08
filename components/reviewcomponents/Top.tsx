import React from "react";
import profilephoto2 from "../../assets/reviewdetail/profilephoto2.svg";
import Image from "next/image";

const Top = () => {

    return (
        <div className="pt-11">
            <div>
                <p className="text-lg text-[#556166] font-bold">Reviews</p>
            </div>
            <div className="bg-white mt-5 px-2 py-3">
                <div className="flex gap-3">
                    <div>
                        <Image src={profilephoto2} alt="profilephoto2" />
                    </div>
                    <div>
                        <p className="text-lg text-[#001219] font-semibold mt-8">John Doe</p>
                        <p className="text-base text-[#2B3A3F] font-medium ">Cleaner</p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Top;