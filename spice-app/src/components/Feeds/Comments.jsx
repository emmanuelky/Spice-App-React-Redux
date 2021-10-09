import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Comments = () => {

    const lastMessageView = useRef(null);

    const postID = useSelector(state => state.posts.post_id)
    const fetchAllComments = useSelector(state => state.posts.comments)

    const uniquePostComments = fetchAllComments.filter(comment => comment.data.post_Id === postID)
    // console.log(uniquePostComments)

    useEffect(() => {

        if (fetchAllComments.length - 1 && lastMessageView.current) {
            lastMessageView.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [fetchAllComments.length])


    return (
        <>
            <div className={` flex flex-col mx-1 overflow-y-auto h-80 `}>
                {
                    uniquePostComments?.map(comment => (
                        <div key={comment.data.id} ref={lastMessageView} className=" bg-gray-50 rounded-lg my-2 px-2">
                            <div className="flex justify-between my-2">
                                <div className="flex align-items-center">
                                    <img className="h-5 w-5 rounded-full" src={comment.data.user.image} alt="" />
                                    <i className="text-xs mx-2 font-bold">{comment.data.user.firstName}</i>
                                </div>
                                <div>  <span className="text-xs">@{comment.data.createdAt}</span></div>

                            </div>
                            <div className=" mx-4 my-2">
                                <span className="text-lg break-words text-justify">{comment.data.commentText}</span>
                            </div>

                        </div>))
                }
            </div>
        </>
    )
}

export default Comments
