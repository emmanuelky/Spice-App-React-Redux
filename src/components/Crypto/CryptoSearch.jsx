import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { fetchSearchedCrypto } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'


const CryptoSearch = () => {
    const [query, setQuery] = useState('')
    const [searchedCryptoData, setSearchedCryptoData] = useState({})

    const dispatch = useDispatch()
    const allCryptoMarket = useSelector(state => state.crypto.all_crypto_market)

    // console.log()

    useEffect((e) => {
        handleSearch()
        dispatch(fetchSearchedCrypto(searchedCryptoData))
    }, [searchedCryptoData])

    console.log(query)


    const handleSearch = () => {

        return allCryptoMarket.filter(crypto => crypto.name.toLowerCase() === query.toLowerCase() ? (setSearchedCryptoData(crypto), dispatch(fetchSearchedCrypto(searchedCryptoData))) : dispatch(fetchSearchedCrypto({})))
    }

    console.log(searchedCryptoData)

    return (
        <div className='sticky top-40 z-40 bg-gray-900 focus:ring-2 focus:ring-blue-600'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="search" placeholder="search with crypto name"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={() => handleSearch()}
                    />
                </Form.Group>

            </Form>
        </div>
    )
}

export default CryptoSearch

