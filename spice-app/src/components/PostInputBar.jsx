import React from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { FcVideoCall, FcAddImage, FcAdvertising } from "react-icons/fc";





const PostInputBar = () => {
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
                        <div className="mx-3 mt-1 text-center text-light text-xl p-2 flex border-green-500 border-b-2 border-t-2 hover:border-green-900 rounded-full ">
                            <Col md={3}>

                                <span className="text-center cursor-pointer">
                                    post
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
