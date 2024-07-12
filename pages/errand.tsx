import NavBar from '@/components/Navbar'
import Earlierhistory from '@/components/errandcomponents/earlierhistory'
import Errandhistory from '@/components/errandcomponents/errandhistory'
import React from 'react'



const errand = () => {


    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg ">
            <div className="fixed top-2 w-full z-10">
                <NavBar />
            </div>
            <div className="px-3 pt-12">
                <Errandhistory />
                <Earlierhistory />
            </div>
        </div>
    )
}

export default errand