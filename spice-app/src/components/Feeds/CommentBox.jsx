import React from 'react'
import CommentInput from './CommentInput'
import Comments from './Comments'

const CommentBox = () => {
    return (
        <div className=" flex flex-col justify-between border-1 text-gray-300 border-gray-300 rounded-lg w-full h-full">
            <div className=""><Comments /></div>
            <div className=' '><CommentInput /></div>

        </div>
    )
}

export default CommentBox
