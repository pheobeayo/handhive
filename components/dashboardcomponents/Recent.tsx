import React from "react";
import Link from "next/link";


const Recent = () => {



    return (
        <div className="pt-11">
            <div className="flex justify-between">
                <p className="text-sm text-[#556166] font-semibold">Recent activities
                    <br/>
                    No errands found. 
                </p>
                <Link href="/bookerrand" className="text-sm text-[#E63946]">
                    Book errand
                </Link>
            </div>
            

            
        </div >
    );
};

export default Recent;