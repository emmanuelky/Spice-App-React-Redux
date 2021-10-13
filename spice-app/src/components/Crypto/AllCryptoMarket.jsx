import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCryptoMarket, getSingleCryptoDetails } from '../../redux/actions'
import { Card, Button, Spinner, Container, Row, Col, Modal } from 'react-bootstrap'


const AllCryptoMarket = () => {

    const [priceChangeColor, setPriceChangeColor] = useState(false)

    const dispatch = useDispatch()

    const allCryptoMarket = useSelector(state => state.crypto.all_crypto_market)
    const singleCryptoDetail = useSelector(state => state.crypto.single_crypto_detail)
    console.log(singleCryptoDetail)

    const cryptoPriceChange = allCryptoMarket.map(cryptoprice => cryptoprice.current_price)

    // console.log(cryptoPriceChange)

    // const addColorToPriceChange = cryptoPriceChange.forEach(priceChange => console.log(priceChange))

    useEffect(() => {

    }, [cryptoPriceChange])

    useEffect(() => {
        dispatch(fetchAllCryptoMarket())
    }, [])


    const symbolToUpperCase = (symbol) => symbol.toUpperCase()

    return (
        <div className='text-gray-300   '>
            <Container fluid className='overflow-x-auto'>

                {
                    allCryptoMarket.map(crypto => (
                        // <Link to={ }>

                        <Row onClick={() => dispatch(getSingleCryptoDetails(crypto.id))} className='my-5 align-items-center border-b border-gray-800 hover:border-gray-500 hover:bg-gray-700 hover:text-gray-200 rounded-lg p-1'>

                            <Col md={1} className=''> {crypto.market_cap_rank}</Col>


                            <Col md={3}  ><div className="flex justify-evenly align-items-center"><div><img className="w-10 h-10" src={crypto.image} alt="" /> </div><div className=''>{crypto.name} </div><span className='text-gray-500'>{symbolToUpperCase(crypto.symbol)}</span></div></Col>

                            <Col md={2} className='text-center'>${crypto.current_price}</Col>

                            <Col md={2} className='text-center'>{crypto.low_24h}</Col>

                            <Col md={2} className='text-center'>${crypto.market_cap}</Col>

                            <Col md={2} className='text-center'>{crypto.circulating_supply}</Col>

                        </Row>
                        // </Link>
                    ))
                }
            </Container>
        </div>
    )
}

export default AllCryptoMarket
