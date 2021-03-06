import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCryptoMarket, getSingleCryptoDetails } from '../../redux/actions'
import { Card, Button, Spinner, Container, Row, Col, Modal } from 'react-bootstrap'
import moment from 'moment'
import CryptoSearch from './CryptoSearch'



const AllCryptoMarket = () => {



    const dispatch = useDispatch()

    const allCryptoMarket = useSelector(state => state.crypto.all_crypto_market)
    const singleCrypto = useSelector(state => state.crypto.single_crypto_detail)
    console.log(singleCrypto)

    const dateTimeAgo = moment().fromNow();
    console.log(dateTimeAgo);


    useEffect(() => {
        dispatch(fetchAllCryptoMarket())

    }, [singleCrypto])




    return (<>
        <div className='text-gray-300   '>
            <Container fluid className='overflow-x-auto'>


                {
                    Object.keys(singleCrypto).length === 0 ?
                        (allCryptoMarket?.map(crypto => (
                            // <Link to={ }>
                            // onClick={() => dispatch(getSingleCryptoDetails(crypto.id))}
                            <Row className='my-5 align-items-center border-b border-gray-800 hover:border-gray-500 hover:bg-gray-700 hover:text-gray-200 rounded-lg p-1'>

                                <Col md={1} className=''> {crypto.market_cap_rank}</Col>

                                <Col md={1} className='text-center'> <div><img className="w-10 h-10" src={crypto.image} alt="" /> </div></Col>

                                <Col md={2}  ><div className="flex justify-evenly align-items-center"><div className=''>{crypto.name} </div><span className='text-gray-500'>{crypto.symbol.toUpperCase()}</span></div></Col>

                                <Col md={2} className='text-center'>€{crypto.current_price}</Col>

                                <Col md={2} className={crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>{crypto.price_change_percentage_24h.toLocaleString()}%</Col>

                                <Col md={2} className='text-center'>€{crypto.market_cap.toLocaleString()}</Col>

                                <Col md={2} className='text-center'>€{crypto.total_volume.toLocaleString()}</Col>

                            </Row>
                            // </Link>
                        )))

                        :

                        (
                            // <Link to={ }>

                            <Row onClick={() => dispatch(getSingleCryptoDetails(singleCrypto?.id))} className='my-5 align-items-center border-b border-gray-800 hover:border-gray-500 hover:bg-gray-700 hover:text-gray-200 rounded-lg p-1'>

                                <Col md={1} className=''> {singleCrypto?.market_cap_rank}</Col>

                                <Col md={1} className='text-center'> <div><img className="w-10 h-10" src={singleCrypto?.image} alt="" /> </div></Col>

                                <Col md={2}  ><div className="flex justify-evenly align-items-center"><div className=''>{singleCrypto?.name} </div><span className='text-gray-500'>{singleCrypto?.symbol.toUpperCase()}</span></div></Col>

                                <Col md={2} className='text-center'>€{singleCrypto?.current_price}</Col>

                                <Col md={2} className={singleCrypto?.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>{singleCrypto?.price_change_percentage_24h.toLocaleString()}%</Col>

                                <Col md={2} className='text-center'>€{singleCrypto?.market_cap.toLocaleString()}</Col>

                                <Col md={2} className='text-center'>€{singleCrypto?.total_volume.toLocaleString()}</Col>

                            </Row>
                            // </Link>
                        )
                }
            </Container>
        </div>
    </>)
}

export default AllCryptoMarket
