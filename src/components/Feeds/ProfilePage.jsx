import React, { useEffect, useState } from 'react'
import Player from '../Music/Player'
import MyNavBar from './MyNavBar'
import SideBarRight from './SideBarRight'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ProfilePage = () => {

    const allUsers = useSelector(state => state.users.users)
    const currentUser = useSelector(state => state.users.getcurrentuser)
    const allPosts = useSelector(state => state.posts.posts)


    const { id } = useParams()

    const userProfile = allUsers.find(user => user.id === id)

    const userPostImages = allPosts.filter(post => post.user.id === id)



    console.log(userPostImages)

    return (
        <>
            <div className='mx-5'>

                {

                    (<Container fluid>
                        <Row className='sticky-top '>

                            <div className=" " >
                                <MyNavBar />
                            </div>
                        </Row>

                        <Row className=' justify-center '>


                            <Col md={6}>
                                <div className=" border-blue-600 drop-shadow-2xl border-l-2 border-r-2 rounded my-2 px-4 shadow-2xl" >
                                    <h3 className='text-center text-gray-200 py-5'>Profile</h3>
                                    <div className='flex flex-wrap justify-around '>
                                        <div className=" my-2" ><img src={userProfile.image} className="rounded-full w-80 h-80" alt="" /></div>

                                        <div className="text-gray-200 my-auto ">
                                            <div>Name: {userProfile.firstName} {userProfile.lastName}</div>
                                            <div>Email: {userProfile.email}</div>
                                            <div>Location: {userProfile.city}</div>
                                        </div>


                                    </div>
                                    <div className='flex flex-wrap justify-around mx-auto my-4 py-3'>
                                        <span className='text-center text-gray-200'>Following</span>
                                        <span className='text-center text-gray-200'>Liked Songs</span>
                                    </div>

                                    {/* <Player /> */}
                                </div>
                            </Col>
                            <Col md={6} className=' '>
                                <div className="sticky top-40 shadow-2xl flex flex-wrap mx-1 drop-shadow-2xl  rounded " >
                                    <h5 className='text-center text-gray-200 py-5'>My Photos</h5>

                                    <div className='flex flex-wrap'>
                                        {
                                            userPostImages.map(post => (

                                                <div><img className='w-20 h-20 mx-2 rounded-lg my-1' src={post.postImage} alt="" /></div>
                                            ))

                                        }
                                    </div>

                                </div>
                            </Col>

                            {/* <Col md={1} className=' '>
                                <div className="sticky top-40 shadow-2xl flex flex-wrap mx-1 drop-shadow-2xl  rounded " >
                                    <h5 className='text-center text-gray-200 py-5'></h5>



                                </div>
                            </Col> */}

                        </Row>

                    </Container>)}
            </div>

        </>
    )
}

export default ProfilePage
