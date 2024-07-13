import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';





const signup = () => (
  <div className="h-full max-w-md mx-auto ">
    <Header />
    <div className="bg-white shadow-lg rounded-lg h-full mx-auto ">
      <div className="bg-white rounded-lg flex items-end justify-center h-full">
        <div className="bg-white px-2 py-5 h-full  rounded-[8px]">
          <div className="grid place-items-center">
            <h1 className="text-xl text-[#457B9D] font-bold ">Sign up</h1>
          </div>
          <p className="text-base text-[#666666] mt-2 ">Welcome to,
            <br />
            Let’s get you started!
          </p>
          <p className="text-lg text-[#001219] font-bold">
            What would you love to use our platform as?
          </p>


          <ul className="w-48 text-sm font-medium text-[#001219]">
            <li className="w-full ">
              <div className="flex items-center ps-3">
                <input id="client-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#001219] bg-gray-100 border-white rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-[#457B9D] dark:border-[#457B9D]" />
                <label className="w-full py-3 ms-2 text-sm font-bold text-[#001219] ">Client</label>
              </div>
            </li>
            <li className="w-full ">
              <div className="flex items-center ps-3">
                <input id="client-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#001219] bg-gray-100 border-[#457B9D] rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-[#457B9D] dark:border-[#457B9D]" />
                <label className="w-full py-3 ms-2 text-sm font-bold text-[#001219] ">Runner</label>
              </div>
            </li>

          </ul>
          <div className="mt-4">
           <Link href='/signupsubmit'> <button className="bg-[#457B9D] w-full text-white h-[44px] rounded-[12px]">
              Next
            </button></Link>
          </div>
          <div className="mt-4">
            <button type="button" className="py-2 px-4 max-w-md flex justify-center items-center bg-white hover:bg-[#457B9D] focus:ring-[#457B9D] focus:ring-offset-red-200 text-[#001219] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg border-[#001219] border-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default signup;
