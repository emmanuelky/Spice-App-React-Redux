import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PostInputBar from './PostInputBar'
import { Card } from 'react-bootstrap'
import { RiWalkFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { useSelector, useDispatch, } from 'react-redux'
import { fetchPosts, addLikes } from '../redux/actions'



const Feeds = () => {

    useEffect(() => {
        dispatch(fetchPosts())

    }, [])


    const allPosts = useSelector(state => state.posts.posts)
    console.log(allPosts)

    const postLikesLength = useSelector(state => state.users.likes.length)



    const currentUser = useSelector(state => state.users.users[0])


    const dispatch = useDispatch()
    const ID = uuidv4()



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

                                            <img className="text-right w-5 h-5 rounded-full img-fluid" src={currentUser?.image} alt="" />
                                        </div>
                                        <div className='mx-1 '>

                                            <span className=" align-self-bottom">{currentUser?.username}</span>
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


                                    <div onClick={() => dispatch(addLikes(post.id))} className="text-sm flex align-items-center cursor-pointer ">
                                        <div className="mx-1" >
                                            < FcLike />
                                        </div>
                                        <div className='text-muted'> <span>{postLikesLength}</span>  </div>
                                    </div>
                                    <div className="text-sm flex cursor-pointer align-items-center  ">
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
