import React from "react";
import wallet from "../../assets/wallet/wallet.svg";
import errand from "../../assets/wallet/errand.svg";
import Image from "next/image";

const Wallet = () => {

    return (
        <div className="pt-11">

            <div className="bg-white mt-5 px-2 py-3 w-full">
                <div className="flex gap-2">
                    <div className="w-1/2 p-2 bg-[#CDF3E2] rounded-lg border-2 border-[#024125]">
                        <div className="flex gap-4">
                            <Image src={wallet} alt="wallet" className="bg-[#F7F7F7] p-2 rounded-lg" />
                            <h1 className="text-base font-bold text-black">Wallet</h1>
                        </div>
                        <div className="flex gap-4 p-2">
                            <p className="text-base text-black">Total:</p>
                            <h4 className="text-2xl text-black">$20 </h4>
                        </div>
                    </div>
                    <div className="w-1/2 p-2 bg-[#DAE5EB] rounded-lg border-2 border-[#172934]">
                        <div className="flex gap-4">
                            <Image src={errand} alt="errand" className="bg-[#F7F7F7] p-2 rounded-lg" />
                            <h1 className="text-base font-bold text-black">Errand</h1>
                        </div>
                        <div className="flex gap-4 p-2">
                            <p className="text-base text-black">Total:</p>
                            <h4 className="text-2xl text-black">0 </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Wallet;