import React from 'react'
import './CryptoNews.css'
import MyVerticallyCenteredModal from './CryptoModal'
import { Link } from 'react-router-dom'

const CryptoNews = () => {


    const [modalShow, setModalShow] = React.useState(false);
    // <Button variant="primary" onClick={() => setModalShow(true)}>
    //     Launch vertically centered modal
    //   </Button>

    return (

        <div className=" flex my-4 items-center justify-center md:flex-col">
            <Link to={`/crypto`}>

                <div className='text-gray-200 mx-2'><button className='bg-blue-600 p-2 rounded text-sm'>Crypto? <span className='bg-yellow-500 p-1 text-black rounded-full px-2'>click!</span> </button></div>


            </Link>
            <div className="relative w-3/4 lg:w-1/2 bg-gray-900 p-4  rounded text-white space-y-3 overflow-hidden">
                <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-100"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 "></span>
                </span>
                <div className="absolute bottom-4 left-0 right-0 space-y-1 hidden md:block">
                    <div className="scroller flex space-x-1 whitespace-nowrap text-xs text-gray-900">
                        <span className="bg-yellow-400 py-1 px-3 rounded">BTC</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">ETH</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">BNB</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">ADA</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">SOL</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">ALG</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">BTC</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">POT</span>
                        <span className="bg-yellow-400 py-1 px-3 rounded">SHI</span>

                    </div>

                </div>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}

            // to open a new modal
            //onClick={() => setModalShow(true)}
            />

        </div>

    )
}

export default CryptoNews
