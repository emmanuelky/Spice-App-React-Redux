import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PostInputBar from './PostInputBar'
import { Card } from 'react-bootstrap'
import { RiWalkFill } from "react-icons/ri";
import { FcLike, FcSms } from "react-icons/fc";
import { useSelector, useDispatch, } from 'react-redux'
import { fetchPosts, addLikes, currentUser, } from '../redux/actions'



const Feeds = () => {


    // const currentUsername = useSelector(state => state.users.getcurrentuser)
    // console.log(currentUsername)

    useEffect(() => {
        dispatch(fetchPosts())


    }, [])

    const allPosts = useSelector(state => state.posts.posts)


    const postLikes = useSelector(state => state.posts.likes)
    const totalLikes = useSelector(state => state.posts.likes.length)
    console.log(postLikes)
    console.log(allPosts)


    let newArr = allPosts.map((item, index, arr) =>

        item.id === (postLikes.map(p => p.id)) ? (postLikes.map(p => p.likes + 1)) : 0
    )

    console.log(newArr)

    const dispatch = useDispatch()
    const ID = uuidv4()


    // const counts = {};
    // postLikes.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    // console.log(counts)




    const handleUserPostLikes = (e, post) => {

        dispatch(addLikes(post))


    }


    return (
        <div className='flex flex-col bg-gray-900' >
            <div className='flex mb-4'>
                <PostInputBar />
            </div>
            {allPosts?.reverse().map((post, i) => (
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

                                            <span className=" align-self-bottom">{post.user?.username}</span>
                                        </div>
                                    </div>

                                    <div className='flex'>
                                        <i className="text-xs text-muted ">
                                            posted at  {post.createdAt}
                                        </i>
                                    </div>
                                </div>
                                <Card.Text className=' text-center'>
                                    {post.text}
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <div className='flex flex-wrap justify-evenly  border-blue-800 border-b-2  pt-2 pb-3'>


                                    <div onClick={(e) => handleUserPostLikes(e.target.value, post)} className="text-sm flex align-items-center cursor-pointer ">
                                        <div className="mx-1" >
                                            < FcLike />
                                            {post.likes.length}
                                        </div>

                                    </div>
                                    <div className="text-sm flex cursor-pointer align-items-center  ">
                                        {/* {postId(post.id)} */}
                                        <div className="mx-1" >
                                            <FcSms />
                                        </div>
                                        <div><span>Comment</span> </div>
                                    </div>
                                    <div className="text-sm flex align-items-center cursor-pointer  ">
                                        <div className="mx-1 " >
                                            <RiWalkFill />
                                        </div>
                                        <div><span>Follow</span> </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>

                    </div>

                </>))

            }
        </div>
    )
}

export default Feeds
