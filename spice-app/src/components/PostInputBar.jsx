import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { FcVideoCall, FcAddImage, FcAdvertising } from "react-icons/fc";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'
import { useSelector, useDispatch, } from 'react-redux'
import { fetchPosts, fetchUsers, addPosts } from '../redux/actions'


const PostInputBar = () => {

    const [message, setMessage] = useState('')

    const dispatch = useDispatch()


    const currentUser = useSelector(state => state.users.users[0])
    // console.log(currentUser)



    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const ID = uuidv4()
    const currentDate = format(new Date(), 'HH:mm b, do-MMM-yyyy')


    const allPost = {
        id: ID,
        createdAt: currentDate,
        text: message,
        postImage: "https://media-exp1.licdn.com/dms/image/C4D03AQGDf3sUhZgiOQ/profile-displayphoto-shrink_800_800/0/1628360955565?e=1638403200&v=beta&t=4nI5gHqJsfd2Vq8cMdf_jfEBk_QCqTxU6rVV4tqsW8U",
        likes: [],
        updatedAt: currentDate,
        user: currentUser,

    }

    const handleInputChange = (e) => {

        setMessage(e.target.value)

    }

    const handleAddPosts = (e) => {
        e.preventDefault();
        dispatch(addPosts(allPost))
        setMessage('')
        dispatch(fetchPosts())
    }



    return (
        <Container fluid className="my-5 justify-center mx-auto border-grey-100 border pt-4 rounded-2xl" >

            <Form onSubmit >
                <Row>
                    <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Control
                            className="text-area rounded-full"
                            as="textarea"
                            placeholder="Spice up your day!"
                            rows={4}
                            value={message}
                            onChange={(e) => handleInputChange(e)}

                        />
                    </Form.Group>
                </Row>
                <Row className='px-4'>
                    <div className=" my-4 flex flex-wrap justify-around align-items-center ">
                        <div className="mx-3 mt-1 cursor-pointer  text-light text-xl bg-gray-600 flex  p-1 hover:bg-green-100 rounded-lg">
                            <Col md={3}>
                                <span className=" ">
                                    <FcVideoCall />
                                </span>

                            </Col>
                        </div>
                        <div className="mx-3 mt-1 cursor-pointer  text-light text-xl bg-gray-600  flex  p-1 hover:bg-green-100 rounded-lg">
                            <Col md={3}>

                                <span className=" ">

                                    <FcAddImage />

                                </span>
                            </Col>
                        </div>
                        <div className="mx-3 mt-1 cursor-pointer  text-light text-xl bg-gray-600 flex  p-1 hover:bg-green-100 rounded-lg">
                            <Col md={3}>

                                <span className="">
                                    <FcAdvertising />

                                </span>
                            </Col>
                        </div>
                        <div onClick={(e) => handleAddPosts(e)} className="mx-3 mt-1 text-center text-light text-xl p-2 flex border-green-500 border-b-2 border-t-2 hover:border-green-900 rounded-full ">
                            <Col md={3}>

                                <span className="text-center cursor-pointer">
                                    post
                                </span>
                            </Col>
                        </div>


                    </div>
                </Row>
            </Form>
        </Container >
    )
}

export default PostInputBar
