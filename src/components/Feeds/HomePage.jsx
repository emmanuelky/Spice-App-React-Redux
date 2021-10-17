import React, { useEffect, useState } from 'react'
import MyNavBar from './MyNavBar'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import Feeds from './Feeds'
import { Container, Row, Col } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import Player from '../Music/Player'



const HomePage = () => {



    return (
        <div className='mx-5'>

            {

                (<Container fluid>
                    <Row className='sticky-top '>

                        <div className=" " >
                            <MyNavBar />
                        </div>
                    </Row>

                    <Row className=' justify-center '>
                        <Col md={3} className=' '>
                            <div className="sticky top-40 shadow-2xl flex flex-wrap mx-1 drop-shadow-2xl  rounded " >

                                <SideBarLeft />

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className=" border-blue-600 drop-shadow-2xl border-b-2 rounded my-2 mx-2 shadow-2xl" >
                                <Feeds />

                                <Player />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className=" sticky top-40 shadow-2xl flex flex-wrap mx-1 border-blue-900 drop-shadow-2xl border-b-2 rounded " >

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
