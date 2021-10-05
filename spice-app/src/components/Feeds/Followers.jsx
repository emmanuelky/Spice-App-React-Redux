import React from 'react'
import { RiWalkFill } from "react-icons/ri";
import { Container, Row, Col } from 'react-bootstrap'



const Followers = () => {
    return (

        <Container fluid>
            <Row>

                <div className='  flex flex-wrap mb-5 p-2 gap-4 text-sm bg-gray-900 w-screen h-100  flex-col '>
                    <div className='text-light  flex justify-center align-items-center md:text-xs'><div className=' text-lg'><RiWalkFill /></div><span className='mx-2 text-lg'>Your Followers</span></div>

                    <div className=' md:text-xs md:flex-col relative  '>
                        <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl  '></div>
                        <div className='flex justify-between bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative  '>
                            <Col md={3}>
                                <div className=' cursor-pointer'><img className='h-5 w-5 rounded-full ' src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1019&q=80" alt="" /></div>
                            </Col>
                            <Col md={3}>
                                <div className=' cursor-pointer '><span className=' '>Wyogne</span></div>

                            </Col>
                            <Col md={3} className='mx-5'>
                                <div className=' cursor-pointer'><RiWalkFill /></div>

                            </Col>

                        </div>
                    </div>




                </div>
            </Row>
        </Container>
    )
}

export default Followers
