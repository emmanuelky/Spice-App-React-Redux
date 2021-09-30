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

                    <Row className=''>
                        <Col md={3}>
                            <div className="  border bg-indigo-900 shadow-2xl flex flex-wrap mx-1 border-blue-600 border-b-2 rounded " >

                                <SideBarLeft />

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className=" border-l border-r border-gray-800 rounded-lg my-2 mx-2" >
                                <Feeds />


                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="  border bg-indigo-900 shadow-2xl flex flex-wrap mx-1 border-blue-600 border-b-2 rounded " >

                                <SideBarRight />

                            </div>
                        </Col>
                        {/* </div> */}
                    </Row>
                    <div className="flex mx-auto flex-col justify-center border mt-3 border-blue-600 border-b-2 rounded " >
                        <h4>footer</h4>
                    </div>

                </Container>)}
        </div>
    )
}

export default HomePage
