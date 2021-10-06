import React, { useEffect, useState } from 'react'
import { RiWalkFill } from "react-icons/ri";
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch, } from 'react-redux'



const Followers = () => {

    const myAddedFollowers = useSelector(state => state.users.followers)
    console.log(myAddedFollowers)


    const loading = useSelector(state => state.posts.loading)

    return (

        <Container fluid>
            <Row>

                <div className='  flex flex-wrap mb-5 p-2 gap-4 text-sm bg-gray-900 w-screen h-100  flex-col '>
                    <div className='text-light  flex justify-center align-items-center md:text-xs'><div className=' text-lg'><RiWalkFill /></div><span className='mx-2 text-lg'>Your Followers</span></div>

                    {

                        loading
                            ? (<Spinner animation="border" variant="success" />)
                            : myAddedFollowers?.slice(0, 5).map(user => (
                                <div className=' md:text-xs md:flex-col relative  '>
                                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl  '></div>
                                    <div className='flex justify-between bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative  '>
                                        <Col md={3}>
                                            <div className=' cursor-pointer'><img className='h-5 w-5 rounded-full ' src={user.image} alt="" /></div>
                                        </Col>
                                        <Col md={3}>
                                            <div className=' cursor-pointer '><span className=' '>{user.firstName}</span></div>

                                        </Col>
                                        <Col md={3} className='mx-5'>
                                            <div className=' cursor-pointer'><RiWalkFill /></div>

                                        </Col>

                                    </div>
                                </div>
                            ))
                    }




                </div>
            </Row>
        </Container>
    )
}

export default Followers
