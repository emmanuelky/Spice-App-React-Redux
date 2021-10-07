import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const CommentPhotoSection = () => {



    const singlePostComment = useSelector(state => state.posts.single_post_comment)
    console.log(singlePostComment)


    return (
        <div>
            {
                <div key={singlePostComment?.id}>

                    <img className="img-fluid" src={singlePostComment?.postImage} alt="" />
                </div>
            }
        </div>
    )
}

export default CommentPhotoSection
