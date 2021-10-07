import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const CommentPhotoSection = () => {



    const singlePostComment = useSelector(state => state.posts.single_post_comment)
    console.log(singlePostComment)


    return (
        <div>
            {
                <div key={singlePostComment?.id}>
                    <div className="flex flex-col">
                        <div className='flex justify-between align-items-center'>

                            <div><img className="w-10 h-10 rounded-full my-1 " src={singlePostComment.user.image} alt="" /></div>
                            <div className="text-xs text-gray-400 mb-2"><i >@{singlePostComment.createdAt}</i> </div>
                        </div>
                        <div><img className="img-fluid rounded-lg" src={singlePostComment?.postImage} alt="" /></div>
                        <div className="flex justify-center m-2 border-b-2">
                            <div>{singlePostComment.text}</div>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default CommentPhotoSection
