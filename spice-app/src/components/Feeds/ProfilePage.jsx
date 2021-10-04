import React from 'react'

const ProfilePage = () => {
    return (
        <>
            <div className="flex mx-auto justify-center border my-3" >
                <h4>Mynavbar</h4>
            </div>
            <div className="flex flex-wrap justify-around my-3">

                <div className="border" >
                    <h4>sidebarleft</h4>
                </div>
                <div className="border" >
                    <h4>My Profile</h4>
                </div>
                <div className="border" >
                    <h4>sidebarright</h4>
                </div>
            </div>
            <div className="flex mx-auto justify-center border my-3" >
                <h4>footer</h4>
            </div>

        </>
    )
}

export default ProfilePage
