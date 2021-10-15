import React, { useState, useEffect } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/actions'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { addFollowers, removeFollowers } from '../../redux/actions'


const FollowNewUsers = () => {



    const dispatch = useDispatch()

    const allUsers = useSelector(state => state.users.users)
    const currentLoginUser = useSelector(state => state.users.getcurrentuser)
    // console.log(allUsers)

    const copyOfAllUsers = [...allUsers]
    const newUsersToFollow = copyOfAllUsers.filter(user => user.id !== currentLoginUser.id)



    // console.log(copyOfAllUsers, currentLoginUser)

    // const loading = useSelector(state => state.posts.loading)


    const myAddedFollowers = useSelector(state => state.users.following)
    const followerUserId = myAddedFollowers?.map(user => user.id)


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
                    <div className='text-light  flex justify-center align-items-center md:text-xs'><div className=' text-lg'><FiPlusCircle /></div><span className='mx-2 text-lg'>Follow ?</span></div>
                    {
                        //  loading
                        //  ? (<Spinner animation="border" variant="success" />)
                        //  :
                        newUsersToFollow?.slice(0, 5).map(user => (
                            <div key={user.id}>
                                <div className={followerUserId?.includes(user.id) ? 'hidden' : ' md:text-xs md:flex-col  relative  '}>
                                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl  '></div>
                                    <div className='flex justify-between bg-gray-900  align-items-center rounded-lg  border-1 border-indigo-600  text-center text-gray-300  leading-none p-2 relative  '>
                                        <Col md={3}>
                                            <div className=' cursor-pointer'><img className='h-10 w-10 rounded-full ' src={user.image} alt="" /></div>
                                        </Col>
                                        <Col md={3}>
                                            <div className=' cursor-pointer text-sm '><span className=' '>{user.firstName}</span></div>

                                        </Col>
                                        <Col md={3} className='mx-5'>
                                            <div onClick={() => dispatch(addFollowers(user))} className=' cursor-pointer text-2xl hover:text-gray-500'><span>< FiPlusCircle /></span></div>

                                        </Col>


                                    </div>
                                </div>


                            </div>))
                    }
                </div>
            </Row>
        </Container>
    )
}

export default FollowNewUsers
