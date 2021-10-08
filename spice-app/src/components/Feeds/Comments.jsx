import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Comments = () => {

    const lastMessageView = useRef(null);

    const fetchAllComments = useSelector(state => state.posts.all_comments)
    console.log(fetchAllComments)

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
                    fetchAllComments?.map(comment => (
                        <div ref={lastMessageView} className=" border my-2 px-2">
                            <div className="flex justify-between my-2">
                                <div className="flex align-items-center">
                                    <img className="h-5 w-5 rounded-full" src={comment.user.image} alt="" />
                                    <span className="text-xs mx-1 font-bold">{comment.user.firstName}</span>
                                </div>
                                <div>  <span className="text-xs">@{comment.createdAt}</span></div>

                            </div>
                            <div className="  my-2">
                                <span className="text-lg break-words text-justify">{comment.commentText}</span>
                            </div>

                        </div>))
                }
            </div>
        </>
    )
}

export default Comments
