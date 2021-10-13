import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCryptoMarket } from '../../redux/actions'
import { Card, Button, Spinner, Container, Row, Col, Modal } from 'react-bootstrap'


const AllCryptoMarket = () => {

    const dispatch = useDispatch()

    const allCryptoMarket = useSelector(state => state.crypto.all_crypto_market)

    console.log(allCryptoMarket)

    useEffect(() => {
        dispatch(fetchAllCryptoMarket())
    }, [])
    return (
        <div className='text-gray-500 overflow-x-auto'>
            <Container fluid >
                {
                    allCryptoMarket.map(crypto => (

                        <Row className='my-5'>

                            <Col md={1}>{crypto.market_cap_rank}</Col>
                            <Col md={1}><img className="" src={crypto.image} alt="" /> </Col>

                            <Col md={2}  > {crypto.name} ({crypto.symbol})</Col>

                            <Col md={2}>{crypto.current_price}</Col>

                            <Col md={1}>24h%</Col>

                            <Col md={1}>7d %</Col>

                            <Col md={2}>Market cap</Col>

                            <Col md={2}>Circulation</Col>

                        </Row>
                    ))
                }
            </Container>
        </div>
    )
}

export default AllCryptoMarket
