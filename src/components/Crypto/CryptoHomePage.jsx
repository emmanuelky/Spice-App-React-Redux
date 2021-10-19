import React, { useEffect, useState } from 'react'
import MyNavBar from '../Feeds/MyNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import AllCryptoMarket from './AllCryptoMarket'
import Footer from '../Feeds/Footer'
import LiveCryptoWebSocket from './LiveCryptoWebSocket'
import Player from '../Music/Player'
import CryptoSearch from './CryptoSearch'




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
                                {/* <div><LiveCryptoWebSocket /> </div> */}
                                <Row>
                                    <CryptoSearch />

                                </Row>
                                <Row className='mt-2 align-items-center px-5'>

                                    <Col md={1} className=''> #</Col>

                                    <Col md={1} className='text-center'> </Col>

                                    <Col md={2} className='text-center' > Name</Col>

                                    <Col md={2} className='text-center'>Price (€) </Col>


                                    <Col md={2} className='text-center'>Change in 24h% (€)</Col>

                                    <Col md={2} className='text-center'>Market Cap (€)</Col>

                                    <Col md={2} className='text-center'>Volume (€)</Col>

                                </Row>
                            </div>
                        </Container>
                    </Row>

                    <Row className=' justify-center '>

                        <Col md={12}>
                            <div className=" sticky top-20  border-blue-600 drop-shadow-2xl border-b-2 rounded my-2 mx-2 shadow-2xl" >
                                <AllCryptoMarket />

                                <Footer />
                                <Player />
                            </div>
                        </Col>

                    </Row>

                </Container>)}
        </div>
    )
}

export default CryptoHomePage
