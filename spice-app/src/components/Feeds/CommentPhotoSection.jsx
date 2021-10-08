import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { addLikes, removeLikes } from '../../redux/actions'



const CommentPhotoSection = () => {

    const dispatch = useDispatch()

    const postLikes = useSelector(state => state.posts.likes)
    const singlePostComment = useSelector(state => state.posts.single_post_comment)
    console.log(singlePostComment)

    const handleLikesCount = (post) => {
        const likesCount = postLikes.filter(p => p.id === post.id).length;
        likesCounted(likesCount)
        return likesCount
    }

    const likesCounted = (likesCount) => {
        return likesCount
    }

    const handleLikeToggle = (e, post) => {
        return postLikes.find(p => p.id === post.id) ? dispatch(removeLikes(post.id)) : (dispatch(addLikes(post)))

    }




    return (
        <div>
            {
                <div key={singlePostComment?.id}>
                    <div className="flex flex-col my-3 bg-gray-900 p-4 text-gray-300 border rounded">
                        <div className='flex  my-2 justify-between align-items-center'>

                            <div><img className="w-10 h-10 rounded-full my-1 " src={singlePostComment.user.image} alt="" /></div>
                            <div className="text-xs text-gray-400 mb-2"><i >@{singlePostComment.createdAt}</i> </div>
                        </div>
                        <div className="flex justify-center"><img className="img-fluid h-60 w-60 my-2 rounded-lg" src={singlePostComment?.postImage} alt="" /></div>
                        <div className="flex justify-center my-4">
                            <div>{singlePostComment.text}</div>

                        </div>
                        <div>
                            <div onClick={(e) => handleLikeToggle(e.target.value, singlePostComment)} className="text-sm flex align-items-center cursor-pointer ">
                                <div className="mx-1 text-lg" >
                                    {postLikes.find(p => p.id === singlePostComment.id) ? < FcLike /> : < AiOutlineHeart />}
                                </div>
                                <div className="mx-1" >
                                    {handleLikesCount(singlePostComment)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default CommentPhotoSection
