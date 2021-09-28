import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import PostInputBar from './PostInputBar'
import { Card } from 'react-bootstrap'
import { RiWalkFill } from "react-icons/ri";
// import { RiHeart2Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FcSms } from "react-icons/fc";









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
        <div className='flex flex-col bg-gray-900' >
            <div className='flex'>
                <PostInputBar />
            </div>

            <div className='flex flex-col flex-wrap border-green-100 border-r-2 border-l-2 hover:bg-grey-50 rounded-lg'>

                <Card style={{ width: '30rem' }} className=' mx-auto mb-5'>
                    <Card.Img variant="top" width="100px" height="100px" className="img-fluid" src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" />
                    <Card.Body>
                        <div className='flex flex-wrap justify-between text-blue-600 mb-4 mx-3 border-b-2 p-1'>

                            <div className="text-xs flex ">
                                <div>

                                    <img className="text-right w-5 h-5 rounded-full img-fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                </div>
                                <div className='mx-1 '>

                                    <span className=" align-self-bottom">emmanuelky</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <span className="text-xs ">
                                    12 mins ago
                                </span>
                            </div>
                        </div>
                        <Card.Text className='text-justify'>
                            I never knew strive school was awesome!!!
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <div className='flex flex-wrap justify-evenly align-middle border-blue-800 border-b-2  pt-2 pb-3'>


                            <div className="text-sm flex cursor-pointer ">
                                <div className="mx-1" >
                                    < FcLike />
                                </div>
                                <div><span>Like</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer align-self-center ">
                                <div className="mx-1" >
                                    <FcSms />
                                </div>
                                <div><span>Comment</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer  ">
                                <div className="mx-1 " >
                                    <RiWalkFill />
                                </div>
                                <div><span>Follow</span> </div>
                            </div>

                        </div>
                    </Card.Body>
                </Card>







                <Card style={{ width: '30rem' }} className=' mx-auto mb-5'>
                    <Card.Img variant="top" width="100px" height="100px" className="img-fluid" src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" />
                    <Card.Body>
                        <div className='flex flex-wrap justify-between text-blue-600 mb-4 mx-3 border-b-2 p-1'>

                            <div className="text-xs flex ">
                                <div>

                                    <img className="text-right w-5 h-5 rounded-full img-fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                </div>
                                <div className='mx-1 '>

                                    <span className=" align-self-bottom">emmanuelky</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <span className="text-xs ">
                                    12 mins ago
                                </span>
                            </div>
                        </div>
                        <Card.Text className='text-justify'>
                            I never knew strive school was awesome!!!
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <div className='flex flex-wrap justify-evenly align-middle border-blue-800 border-b-2  pt-2 pb-3'>


                            <div className="text-sm flex cursor-pointer ">
                                <div className="mx-1" >
                                    < FcLike />
                                </div>
                                <div><span>Like</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer align-self-center ">
                                <div className="mx-1" >
                                    <FcSms />
                                </div>
                                <div><span>Comment</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer  ">
                                <div className="mx-1 " >
                                    <RiWalkFill />
                                </div>
                                <div><span>Follow</span> </div>
                            </div>

                        </div>
                    </Card.Body>
                </Card>





                <Card style={{ width: '30rem' }} className=' mx-auto mb-5'>
                    <Card.Img variant="top" width="100px" height="100px" className="img-fluid" src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" />
                    <Card.Body>
                        <div className='flex flex-wrap justify-between text-blue-600 mb-4 mx-3 border-b-2 p-1'>

                            <div className="text-xs flex ">
                                <div>

                                    <img className="text-right w-5 h-5 rounded-full img-fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                </div>
                                <div className='mx-1 '>

                                    <span className=" align-self-bottom">emmanuelky</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <span className="text-xs ">
                                    12 mins ago
                                </span>
                            </div>
                        </div>
                        <Card.Text className='text-justify'>
                            I never knew strive school was awesome!!!
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <div className='flex flex-wrap justify-evenly align-middle border-blue-800 border-b-2  pt-2 pb-3'>


                            <div className="text-sm flex cursor-pointer ">
                                <div className="mx-1" >
                                    < FcLike />
                                </div>
                                <div><span>Like</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer align-self-center ">
                                <div className="mx-1" >
                                    <FcSms />
                                </div>
                                <div><span>Comment</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer  ">
                                <div className="mx-1 " >
                                    <RiWalkFill />
                                </div>
                                <div><span>Follow</span> </div>
                            </div>

                        </div>
                    </Card.Body>
                </Card>






                <Card style={{ width: '30rem' }} className=' mx-auto mb-5'>
                    <Card.Img variant="top" width="100px" height="100px" className="img-fluid" src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" />
                    <Card.Body>
                        <div className='flex flex-wrap justify-between text-blue-600 mb-4 mx-3 border-b-2 p-1'>

                            <div className="text-xs flex ">
                                <div>

                                    <img className="text-right w-5 h-5 rounded-full img-fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                </div>
                                <div className='mx-1 '>

                                    <span className=" align-self-bottom">emmanuelky</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <span className="text-xs ">
                                    12 mins ago
                                </span>
                            </div>
                        </div>
                        <Card.Text className='text-justify'>
                            I never knew strive school was awesome!!!
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <div className='flex flex-wrap justify-evenly align-middle border-blue-800 border-b-2  pt-2 pb-3'>


                            <div className="text-sm flex cursor-pointer ">
                                <div className="mx-1" >
                                    < FcLike />
                                </div>
                                <div><span>Like</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer align-self-center ">
                                <div className="mx-1" >
                                    <FcSms />
                                </div>
                                <div><span>Comment</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer  ">
                                <div className="mx-1 " >
                                    <RiWalkFill />
                                </div>
                                <div><span>Follow</span> </div>
                            </div>

                        </div>
                    </Card.Body>
                </Card>





                <Card style={{ width: '30rem' }} className=' mx-auto mb-5'>
                    <Card.Img variant="top" width="100px" height="100px" className="img-fluid" src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" />
                    <Card.Body>
                        <div className='flex flex-wrap justify-between text-blue-600 mb-4 mx-3 border-b-2 p-1'>

                            <div className="text-xs flex ">
                                <div>

                                    <img className="text-right w-5 h-5 rounded-full img-fluid" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U" alt="" />
                                </div>
                                <div className='mx-1 '>

                                    <span className=" align-self-bottom">emmanuelky</span>
                                </div>
                            </div>

                            <div className='flex'>
                                <span className="text-xs ">
                                    12 mins ago
                                </span>
                            </div>
                        </div>
                        <Card.Text className='text-justify'>
                            I never knew strive school was awesome!!!
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <div className='flex flex-wrap justify-evenly align-middle border-blue-800 border-b-2  pt-2 pb-3'>


                            <div className="text-sm flex cursor-pointer ">
                                <div className="mx-1" >
                                    < FcLike />
                                </div>
                                <div><span>Like</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer align-self-center ">
                                <div className="mx-1" >
                                    <FcSms />
                                </div>
                                <div><span>Comment</span> </div>
                            </div>
                            <div className="text-sm flex cursor-pointer  ">
                                <div className="mx-1 " >
                                    <RiWalkFill />
                                </div>
                                <div><span>Follow</span> </div>
                            </div>

                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Feeds
