import React, { useState, useEffect } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/actions'
import { Container, Row, Col } from 'react-bootstrap'


const FollowNewUsers = () => {

    const dispatch = useDispatch()

    const allUsers = useSelector(state => state.users.users)
    console.log(allUsers)


    const totalUsers = () => {
        return allUsers.length
    }


    useEffect(() => {
        dispatch(fetchUsers())
        totalUsers()
    }, [totalUsers()])

    return (
        <Container fluid>
            <Row>

                <div className='  flex flex-wrap mb-5 p-2 gap-4 text-sm bg-gray-900 w-screen h-100  flex-col '>
                    <div className='text-light  flex justify-center align-items-center md:text-xs'><div className=' text-lg'><FiPlusCircle /></div><span className='mx-2 text-lg'>Follow</span></div>
                    {
                        allUsers?.map(user => (
                            <>
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
                                            <div className=' cursor-pointer'><FiPlusCircle /></div>

                                        </Col>

                                    </div>
                                </div>


                            </>))
                    }
                </div>
            </Row>
        </Container>
    )
}

export default FollowNewUsers
