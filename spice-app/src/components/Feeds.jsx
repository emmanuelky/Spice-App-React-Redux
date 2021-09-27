import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';



const Feeds = () => {


    const ID = uuidv4()

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/posts/`,
            {
                postid: ID,
                postmessage: "wondegdtdgrful",
                postimage: [
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                ],
                likes: []
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div>

        </div>
    )
}

export default Feeds
