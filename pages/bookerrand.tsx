import BookErrand from '@/components/errandcomponents/bookerrand'
import SearchErrand from '@/components/errandcomponents/SearchErrand'
import NavBar from '@/components/Navbar'
import React from 'react'

const book_errand = () => {
    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg ">
            <div className="fixed top-2 w-full z-10">
                <NavBar />
            </div>
            <div className="px-3 pt-12">
             <SearchErrand/>
             <BookErrand/>   
                
            </div>
        </div>
    )
}

export default book_errand