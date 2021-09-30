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
    // console.log(currentDate)

    // const allUsers = {
    //     city: "Najia",
    //     bio: "wget",
    //     createdAt: currentDate,
    //     email: "arianrazab@yahoo.com",
    //     image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    //     firstName: "Emmanuel",
    //     lastName: "Iyere",
    //     updatedAt: currentDate,
    //     username: "johniyere",
    //     followers: [],
    //     following: [],
    //     id: ID
    // }






    const allPost = {
        id: ID,
        createdAt: currentDate,
        text: message,
        postImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        likes: [],
        updatedAt: currentDate,
        user: currentUser,

    }

    // console.log(allPost.user.image)

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
        <Container fluid className="mb-5 justify-center mx-auto border-grey-100 border pt-4 rounded-2xl" >

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
