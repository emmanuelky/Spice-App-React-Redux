import React from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { FcVideoCall, FcStackOfPhotos } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";



const PostInputBar = () => {
    return (
        <Container fluid className=" my-4 justify-center mx-5 border-blue-500 border-b-2 rounded-full" >

            <Form onSubmit >
                <Row>
                    <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Control
                            className="text-area rounded-full"
                            as="textarea"
                            placeholder="What is spicy about today!"
                            rows={4}

                        />
                    </Form.Group>
                </Row>
                <Row className='px-4'>
                    <div className=" my-4 flex flex-wrap justify-around ">
                        <div className="mx-3 cursor-pointer  text-light text-xl p-2 flex border-blue-600 border-b-2 hover:border-green-900 rounded-full ">
                            <Col md={3}>
                                <span className=" ">
                                    <FcVideoCall />
                                </span>

                            </Col>
                        </div>
                        <div className="mx-3 cursor-pointer  text-light text-xl p-2 flex border-blue-600 border-b-2 hover:border-green-900 rounded-full ">
                            <Col md={3}>

                                <span className=" ">
                                    <FcStackOfPhotos />

                                </span>
                            </Col>
                        </div>
                        <div className="mx-3 cursor-pointer  text-light text-xl p-2 flex border-blue-600 border-b-2 hover:border-green-900 rounded-full ">
                            <Col md={3}>

                                <span className="">
                                    <FcAdvertising />

                                </span>
                            </Col>
                        </div>
                        <div className="mx-3 mt-1 text-center text-light text-xl p-2 flex border-green-500 border-b-2 border-t-2 hover:border-green-900 rounded-full ">
                            <Col md={3}>

                                <span className="text-center cursor-pointer">
                                    Post
                                </span>
                            </Col>
                        </div>


                    </div>
                </Row>
            </Form>
        </Container>
    )
}

export default PostInputBar