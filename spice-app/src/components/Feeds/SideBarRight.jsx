import React from 'react'
import Followers from './Followers';
import FollowNewUsers from './FollowNewUsers';





const SideBarRight = () => {
    return (<>
        <div className='  flex flex-wrap my-5 p-2 gap-4 text-sm bg-gray-900 w-100 h-100  flex-col '>

            <FollowNewUsers />
            <Followers />
        </div>


    </>)
}

export default SideBarRight
