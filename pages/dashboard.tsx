import NavBar from '@/components/Navbar'
import Errand from '@/components/dashboardcomponents/Errand'
import Wallet from '@/components/dashboardcomponents/Wallet'
import Runner from '@/components/dashboardcomponents/runner'
import Earlierhistory from '@/components/errandcomponents/earlierhistory'
import Errandhistory from '@/components/errandcomponents/errandhistory'
import Reviews from '@/components/reviewcomponents/Review'
import React from 'react'



const dashboard = () => {


    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg ">
            <div className="fixed top-2 w-full z-10">
                <NavBar />
            </div>
            <div className="px-3 pt-12">
                <Wallet/>
                <Runner/>
                <Errand/>
                <Reviews/>
            </div>
        </div>
    )
}

export default dashboard