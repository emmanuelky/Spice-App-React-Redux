import React from 'react'
import './CrytoNews.css'

const CrytoNews = () => {
    return (

        <div className=" flex my-4 items-center justify-center md:flex-col">
            <div className='text-gray-200'><h6>Cryto News</h6></div>

            <div className="relative w-3/4 lg:w-1/2 bg-gray-900 p-4  rounded text-white space-y-3 overflow-hidden">
                <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-900 opacity-100"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 "></span>
                </span>
                <div className="absolute bottom-4 left-0 right-0 space-y-1">
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

        </div>

    )
}

export default CrytoNews
