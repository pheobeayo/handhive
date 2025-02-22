import NavBar from '@/components/Navbar'
import Errand from '@/components/dashboardcomponents/Errand'
import Wallet from '@/components/dashboardcomponents/Wallet'
import Runner from '@/components/dashboardcomponents/runner'
import Reviews from '@/components/dashboardcomponents/Review'
import React from 'react'
import Recent from '@/components/dashboardcomponents/Recent'



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
                <Recent/>
            </div>
        </div>
    )
}

export default dashboard