import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const LiveCryptoWebSocket = () => {


    const [btcPrice, setBTCPrice] = useState(null)
    const [ethPrice, setETHPrice] = useState(null)
    const [bnbPrice, setBNBPrice] = useState(null)
    const [adaPrice, setADAPrice] = useState(null)
    const [xrpPrice, setXRPPrice] = useState(null)
    const [solPrice, setSOLPrice] = useState(null)

    useEffect(() => {
        const btc = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
        btc.onmessage = (event) => {
            let cryptoStock = JSON.parse(event.data)
            let cryptoPrice = parseFloat(cryptoStock.p).toLocaleString()
            setBTCPrice(cryptoPrice)
        }

        const eth = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
        eth.onmessage = (event) => {
            let cryptoStock = JSON.parse(event.data)
            let cryptoPrice = parseFloat(cryptoStock.p).toLocaleString()
            setETHPrice(cryptoPrice)
        }

        const bnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade')
        bnb.onmessage = (event) => {
            let cryptoStock = JSON.parse(event.data)
            let cryptoPrice = parseFloat(cryptoStock.p).toLocaleString()
            setBNBPrice(cryptoPrice)
        }

        const ada = new WebSocket('wss://stream.binance.com:9443/ws/adaeur@trade')
        ada.onmessage = (event) => {
            let cryptoStock = JSON.parse(event.data)
            let cryptoPrice = parseFloat(cryptoStock.p).toLocaleString()
            setADAPrice(cryptoPrice)
        }

        const xrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpeur@trade')
        xrp.onmessage = (event) => {
            let cryptoStock = JSON.parse(event.data)
            let cryptoPrice = parseFloat(cryptoStock.p).toLocaleString()
            setXRPPrice(cryptoPrice)
        }

        const sol = new WebSocket('wss://stream.binance.com:9443/ws/soleur@trade')
        sol.onmessage = (event) => {
            let cryptoStock = JSON.parse(event.data)
            let cryptoPrice = parseFloat(cryptoStock.p).toLocaleString()
            setSOLPrice(cryptoPrice)
        }
    }, [])





    return (
        <div className='text-gray-200 my-5'>
            <Row>
                <Col md={2}>
                    <div className='text-gray-200'>BTC {btcPrice}</div>
                </Col>
                <Col md={2}>
                    <div className='text-gray-200'>ETH {ethPrice}</div>

                </Col>
                <Col md={2}>
                    <div className='text-gray-200'>BNB {bnbPrice}</div>

                </Col><Col md={2}>
                    <div className='text-gray-200'>ADA {adaPrice}</div>

                </Col><Col md={2}>
                    <div className='text-gray-200'>XRP {xrpPrice}</div>

                </Col><Col md={2}>
                    <div className='text-gray-200'>SOLANA {solPrice}</div>

                </Col><Col md={2}>

                </Col>
            </Row>
        </div>
    )
}

export default LiveCryptoWebSocket
