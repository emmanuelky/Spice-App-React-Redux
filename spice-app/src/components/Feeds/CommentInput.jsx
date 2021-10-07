import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";




const CommentInput = () => {

    const [message, setMessage] = useState('')

    const handleAddComments = () => {

    }

    const handleInputChange = (e) => {
        e.preventDefault();
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

                            />
                        </Form.Group>
                    </Row>

                    <Row className='w-20 mx-auto'>
                        <div onClick={(e) => handleAddComments(e)} className="mx-1 mt-1 text-center text-light text-xl border-b-2 m-2  hover:border-blue-900 rounded ">
                            <Col>
                                <span className="text-center text-black cursor-pointer">
                                    send
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
