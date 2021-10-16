import React from 'react'
import MemoryGameModal from '../Games/MemoryGameModal'


const Games = () => {

    const [modalShow, setModalShow] = React.useState(false);



    return (
        <div>
            <div className='my-5 p-2 text-sm bg-gray-900 w-100 border-blue-900 border-b-2 rounded  hidden md:block '>
                <div className='text-light md:text-xs'><h5 className='text-center'>Play Games</h5></div>

                <div className=' md:text-xs md:flex-col  relative mx-5 mt-3 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '><a href="https://emmanuelky.github.io/Project-Game-Bugs-Killer/" target="_blank">Bugs Killer</a> </div> </div>
                <div className=' md:text-xs md:flex-col relative mx-4 '>
                    <div onClick={() => setModalShow(true)} className='bg-gray-900 hover:bg-pink-600 rounded-lg cursor-pointer  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Memory Game</div>
                </div>

                <div className=' md:text-xs md:flex-col relative mx-3 '>

                    <div className='bg-gray-900 hover:bg-pink-600  rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Snake</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-2 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Tic Tac</div> </div>

                <div className=' md:text-xs md:flex-col relative  mx-1'>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Mines</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-2 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Coming Soon...</div> </div>


                <div className=' md:text-xs md:flex-col relative mx-2 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Coming Soon...</div> </div>


                <div className=' md:text-xs md:flex-col relative mx-3 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Coming Soon...</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-4 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Coming Soon...</div> </div>
                <div className=' md:text-xs md:flex-col  relative mx-5 mb-4 '>

                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-indigo-600  text-center text-gray-300 leading-none p-2 relative '>Coming Soon... </div> </div>

            </div>






            <MemoryGameModal
                show={modalShow}
                onHide={() => setModalShow(false)}

            />
        </div>
    )
}

export default Games