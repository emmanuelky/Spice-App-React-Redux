import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { postComments } from '../../redux/actions'
import { format } from 'date-fns'
import { SiGooglemessages } from "react-icons/si";





const CommentInput = () => {

    const [message, setMessage] = useState('')



    const dispatch = useDispatch()
    const currentLoginUser = useSelector(state => state.users.getcurrentuser)
    const fetchAllComments = useSelector(state => state.posts.all_comments)
    const postId = useSelector(state => state.posts.post_id)
    // console.log(postId)

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }
    const ID = uuidv4()
    const currentDate = format(new Date(), 'HH:mm b')
    // yyyy-MM-dd, 

    const currentUserComment = {
        id: ID,
        post_Id: postId,
        commentText: message,
        createdAt: currentDate,
        user: currentLoginUser
    }



    useEffect(() => {

    }, [fetchAllComments.length])


    const handleAddComments = () => {

        setMessage('')
        dispatch(postComments(currentUserComment))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(e.keyCode === 13)
        if (e.keyCode === 13) {
            dispatch(postComments(currentUserComment))
            setMessage('')

        }
    }


    return (
        <div>
            <Container fluid className=" justify-center mx-auto border-grey-100  rounded-2xl border-gray-600 drop-shadow-2xl hover:border-green-900 shadow-2xl" >

                <Form onSubmit={(e) => handleAddComments(e)} >
                    <Row>
                        <Form.Group
                            className="mb-1"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                className="text-area rounded-full"
                                as="textarea"
                                placeholder="add comment"
                                rows={4}
                                value={message}
                                onChange={(e) => handleInputChange(e)}
                                onKeyUp={(e) => handleOnSubmit(e)}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='w-20 mx-auto'>
                        <div onClick={(e) => handleAddComments(e)} className="mx-1 mt-1 text-center text-light text-xl m-2  rounded ">
                            <Col>
                                <span className="text-center flex justify-center align-items-center text-black cursor-pointer">
                                    {/* <span className="mx-2  text-lg"> send</span> */}
                                    <div className="text-3xl text-gray-600 mx-2  "><SiGooglemessages /></div>
                                </span>
                            </Col>
                        </div>

                    </Row>

                </Form>
            </Container >
        </div >
    )
}

export default CommentInput
