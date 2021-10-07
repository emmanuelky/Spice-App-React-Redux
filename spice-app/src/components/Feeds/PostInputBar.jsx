import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { FcVideoCall, FcAddImage, FcAdvertising } from "react-icons/fc";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'
import { useSelector, useDispatch, } from 'react-redux'
import { fetchPosts, fetchUsers, addPosts, getCurrentUser } from '../../redux/actions'


const PostInputBar = () => {

    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")



    console.log(image)

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "emmanuelspice")
        data.append("cloud_name", "emmanuelky")
        fetch("https://api.cloudinary.com/v1_1/emmanuelky/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setUrl(data.url)

            })
            .catch(err => console.log(err))
    }

    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const getcurrentuser = useSelector(state => state.users.getcurrentuser)
    // console.log(getcurrentuser)


    useEffect(() => {
        uploadImage()
    }, [image.length])

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(getCurrentUser())

    }, [])

    const ID = uuidv4()
    const currentDate = format(new Date(), 'HH:mm b')


    const sendNewPost = {
        id: ID,
        createdAt: currentDate,
        text: message,
        postImage: url,
        likes: [],
        updatedAt: currentDate,
        user: getcurrentuser,
        comments: [],

    }

    const handleInputChange = (e) => {

        setMessage(e.target.value)

    }

    const handleAddPosts = (e) => {
        e.preventDefault();

        dispatch(addPosts(sendNewPost))
        setMessage('')
        setImage('')
        dispatch(fetchPosts())

    }




    return (
        <Container fluid className="my-5 justify-center mx-auto border-grey-100 pt-4 rounded-2xl border-blue-600 drop-shadow-2xl hover:border-green-900  border-b-4 border-t-4 shadow-2xl" >

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
                            <Col md={2}>
                                <span className=" ">
                                    <FcVideoCall />
                                </span>

                            </Col>
                        </div>
                        <div className="mx-3 mt-1 cursor-pointer  text-light text-xl bg-gray-600  flex  p-1 hover:bg-green-100 rounded-lg">
                            <Col md={2} className='flex'>


                                <label for="files" className="btn"><FcAddImage /></label>
                                <input onClick={uploadImage} onChange={(e) => setImage(e.target.files[0])} id="files" className="hidden" type="file" />
                            </Col>

                        </div>
                        <div className="mx-3 mt-1 cursor-pointer  text-light text-xl bg-gray-600 flex  p-1 hover:bg-green-100 rounded-lg">
                            <Col md={2}>

                                <span className="">
                                    <FcAdvertising />

                                </span>
                            </Col>
                        </div>
                        <div onClick={(e) => handleAddPosts(e)} className="mx-1 mt-1 text-center text-light text-xl p-2 flex border-green-500 border-b-2 border-t-2 hover:border-green-900 rounded-full ">
                            <Col md={2}>

                                <span className="text-center cursor-pointer">
                                    post
                                </span>
                            </Col>
                        </div>
                        {/* <div className="mx-3 "> */}
                        <Col md={2}>
                            {
                                <img className={image === '' ? 'hidden' : "w-20 h-20 rounded-full"} src={url} />
                            }
                        </Col>
                        {/* </div> */}


                    </div>
                </Row>

            </Form>
        </Container >
    )
}

export default PostInputBar
