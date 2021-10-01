import React, { useEffect, useState } from 'react'
import MyNavBar from './MyNavBar'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import Feeds from './Feeds'
import { Container, Row, Col } from 'react-bootstrap'
import SignUp from './SignUp'
import Login from './Login'
import { useSelector, useDispatch } from 'react-redux'



const HomePage = () => {



    return (
        <div className='mx-5'>

            {

                (<Container fluid>
                    <Row className='sticky-top '>

                        <div className="mb-5 " >
                            <MyNavBar />
                        </div>
                    </Row>

                    <Row className=' '>
                        <Col md={3} className=' '>
                            <div className="sticky top-20 shadow-2xl flex flex-wrap mx-1 border-blue-600 drop-shadow-2xl border-b-2 rounded " >

                                <SideBarLeft />

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className=" border-blue-600 drop-shadow-2xl border-b-2 rounded my-2 mx-2 shadow-2xl" >
                                <Feeds />


                            </div>
                        </Col>
                        <Col md={3}>
                            <div className=" sticky top-20 shadow-2xl flex flex-wrap mx-1 border-blue-600 drop-shadow-2xl border-b-2 rounded " >

                                <SideBarRight />

                            </div>
                        </Col>
                        {/* </div> */}
                    </Row>

                </Container>)}
        </div>
    )
}

export default HomePage
