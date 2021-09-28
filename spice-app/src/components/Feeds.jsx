import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import PostInputBar from './PostInputBar'
import { Card } from 'react-bootstrap'



const Feeds = () => {


    // const ID = uuidv4()

    // useEffect(() => {
    //     axios.post(`${process.env.REACT_APP_BASE_URL}/posts/`,
    //         {
    //             postid: ID,
    //             postmessage: "wondegdtdgrful",
    //             postimage: [
    //                 "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //             ],
    //             likes: []
    //         })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [])

    return (
        <div className='flex flex-col' >
            <div className='flex'>
                <PostInputBar />
            </div>

            <div className='flex mx-auto'>

                <Card >
                    <Card.Img variant="top" className="img-fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Feeds
