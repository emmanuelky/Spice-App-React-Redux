import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PostInputBar from './PostInputBar'
import { Card, Spinner } from 'react-bootstrap'
import { RiWalkFill } from "react-icons/ri";
import { FcLike, FcSms } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch, } from 'react-redux'
import { fetchPosts, addLikes, removeLikes, getCurrentUser } from '../../redux/actions'




const Feeds = () => {

    const dispatch = useDispatch()


    const allPosts = useSelector(state => state.posts.posts)
    const postLikes = useSelector(state => state.posts.likes)


    const totalPosts = allPosts.length
    const loading = useSelector(state => state.posts.loading)

    const loggedInCurrentUser = useSelector(state => state.users.getcurrentuser)

    // const getUserPostId = allPosts.filter(p => p.user.id === loggedInCurrentUser?.id)

    // console.log(allPosts)




    // console.log(postLikes)

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        dispatch(fetchPosts())
        scrollTop()

    }, [])

    useEffect(() => {
        dispatch(getCurrentUser())

    }, [totalPosts])



    const handleLikesCount = (post) => {

        const likesCount = postLikes.filter(p => p.id === post.id).length;
        likesCounted(likesCount)
        return likesCount
    }

    const ID = uuidv4()



    const likesCounted = (likesCount) => {
        return likesCount
    }

    const countedLikes = likesCounted()
    // console.log(countedLikes)

    const handleLikeToggle = (e, post) => {
        return postLikes.find(p => p.id === post.id) ? dispatch(removeLikes(post.id)) : (dispatch(addLikes(post)))

    }


    return (
        <div className='flex flex-col bg-gray-900' >
            <div className='flex mb-4'>
                <PostInputBar />
            </div>
            {

                loading
                    ? (<Spinner animation="border" variant="success" />)
                    : allPosts?.map((post, i) => (
                        <>
                            <div key={post.id} className='flex flex-col align-items-center border-green-100  hover:bg-grey-50 rounded-lg'>

                                <Card style={{}} className='w-100 h-100 mb-5'  >
                                    <Card.Img variant="top" className="img-fluid" src={post.postImage} />
                                    <Card.Body>
                                        <div className='flex flex-wrap justify-between text-blue-600 mb-4 mx-3 border-b-2 p-1'>

                                            <div className="text-xs flex align-items-center ">
                                                <div>

                                                    <img className="text-right w-5 h-5 rounded-full img-fluid" src={post.user?.image} alt="" />
                                                </div>
                                                <div className='mx-1 '>

                                                    <span className=" align-self-bottom">{post.user?.firstName}</span>
                                                </div>
                                            </div>

                                            <div className='flex'>
                                                <i className="text-xs text-muted ">
                                                    @{post.createdAt}
                                                </i>
                                            </div>
                                        </div>
                                        <Card.Text className=' text-center'>
                                            <h6 className='justify'></h6>{post.text}
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <div className='flex flex-wrap justify-evenly  border-blue-800 border-b-2  pt-2 pb-3'>
                                            <div onClick={(e) => handleLikeToggle(e.target.value, post)} className="text-sm flex align-items-center cursor-pointer ">
                                                <div className="mx-1" >
                                                    {postLikes.find(p => p.id === post.id) ? < FcLike /> : < AiOutlineHeart />}
                                                </div>
                                                <div className="mx-1" >
                                                    {handleLikesCount(post)}
                                                </div>
                                            </div>
                                            <div className="text-sm flex cursor-pointer align-items-center  ">
                                                {/* {postId(post.id)} */}
                                                <div className="mx-1" >
                                                    <FcSms />
                                                </div>
                                                <div><span>Comment</span> </div>
                                            </div>

                                            {/* <div className={getUserPostId[0].user.id === post.user?.id ? 'hidden' : "visible text-sm flex align-items-center cursor-pointer  "}> */}
                                            {/* <div className={"visible text-sm flex align-items-center cursor-pointer  "}>

                                                <div className="mx-1 " >
                                                    <RiWalkFill />
                                                </div>
                                                <div><span>Follow</span> </div>
                                            </div> */}

                                        </div>
                                    </Card.Body>
                                </Card>

                            </div>

                        </>)).reverse()

            }
        </div>
    )
}

export default Feeds
