import React from 'react'
import Following from './Following';
import FollowNewUsers from './FollowNewUsers';





const SideBarRight = () => {
    return (<>
        <div className='  flex flex-wrap p-2 gap-4 text-sm bg-gray-900 w-100 h-100  flex-col '>

            <FollowNewUsers />
            <Following />
        </div>


    </>)
}

export default SideBarRight
