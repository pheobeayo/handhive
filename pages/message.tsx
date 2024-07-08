import NavBar from '@/components/Navbar'
import Messages from '@/components/messagecomponents/Message'
import New from '@/components/messagecomponents/New'
import SearchMessage from '@/components/messagecomponents/SearchMessage'
import React from 'react'

const message = () => {
    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg ">
            <div className="fixed top-2 w-full z-10">
                <NavBar />
            </div>
            <div className="px-3 pt-12">
                <SearchMessage />
                <Messages />
                <New/>
            </div>
        </div>
    )
}

export default message