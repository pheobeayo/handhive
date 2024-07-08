import NavBar from '@/components/Navbar'
import Reviews from '@/components/reviewcomponents/Review'
import Top from '@/components/reviewcomponents/Top'

import React from 'react'

const message = () => {
    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg">
            <div className="fixed top-1 w-full z-10 ">
                <NavBar />
            </div>
            <div className="px-3 pt-24">
                <Top/>
                <Reviews/>
            </div>
        </div>
    )
}

export default message