import React from 'react'
import CryptoNews from '../Crypto/CryptoNews'
import Footer from './Footer'
import Games from './Games'


const SideBarLeft = () => {
    return (
        <div>
            <div><Games /></div>
            <div><CryptoNews /></div>
            <div className='mb-10 border-b-2 hidden md:block  border-gray-600'>
                <Footer />
            </div>
        </div>
    )
}

export default SideBarLeft
