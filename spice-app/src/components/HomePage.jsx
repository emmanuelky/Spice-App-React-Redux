import React, { useEffect, useState } from 'react'
import axios from 'axios'




const HomePage = () => {

    const [data, setData] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            try {
                const database = await axios.get(`${process.env.REACT_APP_BASE_URL}/db`)
                const result = database.data.users
                console.log(database.data.users)
                setData(result)
            } catch {

            }
        }

        fetchData()

    }, [])

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
                {data.map((data) => (
                    <div>
                        <h5>{data.usernames}</h5>
                        <img src={data.image} height='100px' width='100' alt="" />
                    </div>
                ))}
                <h4>footer</h4>
            </div>

        </>
    )
}

export default HomePage
