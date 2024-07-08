import React from "react";
import ProfilePhoto from "../../assets/reviewdetail/profilephoto.svg";
import Star from "../../assets/reviewdetail/Star.svg";
import Image from "next/image";

const Reviews = () => {
    const reviews = [
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            review:
                "Alicia did an amazing job with cleaning service. Highly recommend her services!",
            ratings: Star,
            date: "29/06/2024",
        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            review: "Great work, very professional and quick turnaround.",
            ratings: Star,
            date: "29/06/2024",
        },
        {
            image: ProfilePhoto,
            name: "Sarah Matter",
            review:
                "Alicia did an amazing job with cleaning service. Highly recommend her services!",
            ratings: Star,
            date: "29/06/2024",
        },
        {
            image: ProfilePhoto,
            name: "Jerry Khan",
            review: "Great work, very professional and quick turnaround.",
            ratings: Star,
            date: "29/06/2024",
        },
    ];
    return (
        <div className="pt-11">
            <div>
                <p className="text-sm text-[#556166] font-semibold">Ratings & reviews (5)</p>
                <p className="text-sm text-[#E63946] font-semibold">Want to write a review?</p>
            </div>

            {reviews.map((review, index) => (
                <div key={index} className="bg-white mt-5 px-2 py-3">
                    <div className="pt-4">
                        <div className="flex space-x-2 pt-3 items-center">
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
                        <div>
                            <p className="text-xs">{review.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reviews;