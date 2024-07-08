import NavBar from '@/components/Navbar'
import Earlier from '@/components/notificationscomponents/Earlier'
import Notifications from '@/components/notificationscomponents/Notifications'
import SearchNotifications from '@/components/notificationscomponents/SearchNotifications'
import React from 'react'

const message = () => {
    return (
        <div className="max-w-md mx-auto border-[#457B9D] border-2 rounded-lg">
            <div className="fixed top-1 w-full z-10 ">
                <NavBar />
            </div>
            <div className="px-3 pt-24">
                <SearchNotifications />
                <Notifications />
                <Earlier/>
            </div>
        </div>
    )
}

export default message