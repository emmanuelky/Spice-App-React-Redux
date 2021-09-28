import React, { useEffect, useState } from 'react'
import MyNavBar from './MyNavBar'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import Feeds from './Feeds'
import { Container, Row, Col } from 'react-bootstrap'


const HomePage = () => {
    return (
        <Container fluid>
            <Row>

                <div className="mb-5" >
                    <MyNavBar />
                </div>
            </Row>
            <Row className=''>
                <Col md={3}>
                    {/* <div className="flex flex-wrap min-h-screen  justify-around mx-5 my-3"> */}

                    <div className="md:flex   border bg-indigo-900 shadow-2xl flex flex-wrap mx-1 border-blue-600 border-b-2 rounded " >
                        <SideBarLeft />

                    </div>
                </Col>
                <Col md={6}>
                    <div className=" border rounded-lg my-2 mx-2" >
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

        </Container>
    )
}

export default HomePage
