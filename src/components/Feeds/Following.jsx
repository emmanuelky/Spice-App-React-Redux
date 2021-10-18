import React, { useEffect, useState } from 'react'
import { RiWalkFill } from "react-icons/ri";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { addUser, addUnfollowingUserBackToUsersList, removeFromFollowingList } from '../../redux/actions'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'





const Following = () => {



    const dispatch = useDispatch()
    const myAddedFollowers = useSelector(state => state.users.following)
    // console.log(myAddedFollowers)

    const unfollowingUsers = useSelector(state => state.users.unfollowing_user_list)
    // console.log(unfollowingUsers)
    const unfollowingUserId = unfollowingUsers?.map(user => user.id)

    // const loading = useSelector(state => state.posts.loading)



    const handleUnfollowing = (user) => {
        dispatch(addUnfollowingUserBackToUsersList(user))
        dispatch(removeFromFollowingList(user.id))
    }



    return (

        <Container fluid>
            <Row>

                <div className='  flex flex-wrap mb-5 p-2 gap-4 text-sm bg-gray-900 w-screen h-100  flex-col '>
                    <div className='text-light  flex justify-center align-items-center md:text-xs'><div className=' text-lg'><RiWalkFill /></div><span className='mx-2 text-lg'>Following</span></div>

                    {
                        // loading
                        //     ? (<Spinner animation="border" variant="success" />)
                        //     :
                        myAddedFollowers?.slice(0, 5).map(user => (
                            <div key={user.id}>
                                <div className={unfollowingUserId?.includes(user.id) ? 'hidden' : ' md:text-xs md:flex-col relative  '}>
                                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl  '></div>
                                    <div className='flex justify-between bg-gray-900 rounded-lg align-items-center  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative  '>
                                        <Col md={3}>
                                            <Link to={`/profile/${user.id}`}>

                                                <div className=' cursor-pointer'><img className='h-10 w-10 rounded-full ' src={user.image} alt="" /></div>
                                            </Link>
                                        </Col>
                                        <Col md={3}>
                                            <div className=' cursor-pointer text-sm'><span className=' '>{user.firstName}</span></div>

                                        </Col>
                                        <Col md={3} className='mx-5'>
                                            <div onClick={() => handleUnfollowing(user)} className=' cursor-pointer text-sm text-red-200 hover:text-red-500'>unfollow</div>

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

export default withRouter(Following)
