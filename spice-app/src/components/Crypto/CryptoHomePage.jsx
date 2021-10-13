import React, { useEffect, useState } from 'react'
import MyNavBar from '../Feeds/MyNavBar'
import SideBarRight from '../Feeds/SideBarRight'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import AllCryptoMarket from './AllCryptoMarket'
import Footer from '../Feeds/Footer'
import Games from '../Feeds/Games'



const CryptoHomePage = () => {



    return (
        <div className='mx-5'>

            {

                (<Container fluid>
                    <Row className='sticky-top '>

                        <div className=" " >
                            <MyNavBar />
                        </div>
                        <Container fluid className='overflow-x-auto'>
                            <div className='text-gray-300 border-b border-gray-500 bg-gray-900'>
                                <div className='flex justify-center  pt-4 mb-2 '>

                                    <h3 className='text-center text-gray-300 mx-1'>Crypto Market  </h3>
                                    <span className="text-yellow-500">Live Update</span>
                                </div>

                                <Row className='mt-5 align-items-center'>

                                    <Col md={1} className=''> #rank</Col>


                                    <Col md={3} className='text-center' > Name</Col>

                                    <Col md={2} className='text-center'>Price </Col>


                                    <Col md={2} className='text-center'>lowest in 24h</Col>

                                    <Col md={2} className='text-center'>Market Cap</Col>

                                    <Col md={2} className='text-center'>Circulating Supply</Col>

                                </Row>
                            </div>
                        </Container>
                    </Row>

                    <Row className=' justify-center '>
                        {/* <Col md={} className=' '>
                            <div className="sticky top-20 shadow-2xl flex flex-wrap mx-1 drop-shadow-2xl  rounded " >

                                <SideBarLeft />

                            </div>
                        </Col> */}
                        <Col md={12}>
                            <div className=" sticky top-20  border-blue-600 drop-shadow-2xl border-b-2 rounded my-2 mx-2 shadow-2xl" >
                                <AllCryptoMarket />


                            </div>
                        </Col>
                        {/* <Col md={3} className='mx-auto'>
                            <div className=" sticky top-20  shadow-2xl flex flex-wrap border-blue-900 drop-shadow-2xl border-b-2 rounded " >
                                <Games />
                                <Footer />

                            </div>
                        </Col> */}
                        {/* </div> */}
                    </Row>

                </Container>)}
        </div>
    )
}

export default CryptoHomePage
