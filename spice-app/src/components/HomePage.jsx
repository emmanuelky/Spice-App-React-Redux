// import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react'


const HomePage = () => {
    // const ID = uuidv4()

    // const data =
    // {
    //     "createdAt": "2020-12-01T21:48:26.995Z",
    //     "text": "wonderful",
    //     "updatedAt": "2020-12-01T21:50:50.616Z",
    //     "user": {},
    //     "username": "meC",
    //     "id": ID,
    // }


    // useEffect(() => {
    //     axios.post(`${process.env.REACT_APP_BASE_URL}/posts/`, data)
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [])


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
                    <h4>Feeds</h4>

                </div>
                <div className="border" >
                    <h4>sidebarright</h4>
                </div>
            </div>
            <div className="flex mx-auto flex-col justify-center border my-3" >
                <h4>footer</h4>
            </div>

        </>
    )
}

export default HomePage
