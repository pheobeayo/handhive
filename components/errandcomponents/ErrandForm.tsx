import React from "react";

type Props = {
    handleFormConfirm: () => void;
};

const ModalForm = ({ handleFormConfirm }: Props) => {
    return (
        <div className="bg-white px-2 py-5 rounded-[8px]">
            <p className="text-xs text-[#666666]">Errand Title</p>

            <div className="mb-6 mt-5">
                <label className="block text-[#000405] text-sm font-[600] mb-2">
                    Price
                </label>
                <input
                    type="amount"
                    className="h-[44px] border-[1px] border-[#172934] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
                    placeholder="how much are you willing to pay?"
                />
            </div>
            <div className="border-2 border-[#AAB0B2]"></div>
            <div className="mb-6 mt-2">
                <label className="block text-[#000405] text-sm font-[600] mb-2">
                    Full name
                </label>
                <input
                    type="text"
                    className="h-[44px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
                    placeholder="enter in your full name"
                />
            </div>
            <div className="mb-6 mt-2">
                <label className="block text-[#666666] text-sm font-[600] mb-2">
                    Phone number
                </label>
                <input
                    type="phone number"
                    className="h-[44px] border-[1px] border-[#888888] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
                    placeholder="enter in your phone number"
                />
            </div>

            <div className="mb-6 mt-2">
                <p className="text-lg text-[#001219] font-bold">
                    Address
                </p>
                <ul className="w-48 text-sm font-medium text-[#000405]">
                    <li className="w-full ">
                        <div className="flex items-center ps-3">
                            <input id="client-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#000405] bg-gray-100 border-white rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2" />
                            <label className="w-full py-3 ms-2 text-sm font-bold text-[#000405] ">Use default address</label>
                        </div>
                    </li>
                    <li className="w-full ">
                        <div className="flex items-center ps-3">
                            <input id="client-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#000405] bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 " />
                            <label className="w-full py-3 ms-2 text-sm font-bold text-[#000405] ">Change address</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mb-6 mt-2">
                <label className="block text-[#000405] text-sm font-[600] mb-2">
                    Additional information?
                </label>
                <input
                    type="text"
                    className="h-[44px] border-[1px] border-[#172934] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
                    placeholder="what other information do you think is necessary?"
                />
            </div>
            <div className="mb-6 mt-2">
                <label className="block text-[#666666] text-sm font-[600] mb-2">
                    Number of runners
                </label>
                <input
                    type="text"
                    className="h-[44px] border-[1px] border-[#172934] rounded-[8px] w-full py-2 px-3 text-[#80888C] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
                    placeholder="how many runners do you need?"
                />
            </div>
            <div className="mb-6 mt-2">
                <label className="block text-[#000405] text-sm font-[600] mb-2">
                    Schedule date & time
                </label>
                <input
                    type="date"
                    className="h-[44px] border-[1px] border-[#001219] rounded-[8px] w-full py-2 px-3 text-[#001219] leading-tight focus:outline-none text-sm focus:shadow-outline bg-transparent"
                    placeholder="date"
                />
            </div>

            <div className="">
                <button onClick={handleFormConfirm} className="bg-[#457B9D] w-full text-white h-[44px] rounded-[12px]">
                    Make payment
                </button>
            </div>
        </div>
    );
};

export default ModalForm;