import React from 'react'
import CrytoNews from './Cryto/CrytoNews'
import Footer from './Footer'


const SideBarLeft = () => {
    return (
        <div>
            <div className='my-5 p-2 text-sm bg-gray-900 w-100 border-blue-900 border-b-2 rounded  hidden md:block '>
                <div className='text-light md:text-xs'><h5 className='text-center'>Play Games</h5></div>

                <div className=' md:text-xs md:flex-col  relative mx-5 mt-3 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600    rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '><a href="https://emmanuelky.github.io/Project-Game-Bugs-Killer/" target="_blank">Bugs Killer</a> </div> </div>
                <div className=' md:text-xs md:flex-col relative mx-4 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-3 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600  rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-2 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>

                <div className=' md:text-xs md:flex-col relative  mx-1'>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-2 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>


                <div className=' md:text-xs md:flex-col relative mx-2 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>


                <div className=' md:text-xs md:flex-col relative mx-3 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>

                <div className=' md:text-xs md:flex-col relative mx-4 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer</div> </div>
                <div className=' md:text-xs md:flex-col  relative mx-5 mb-4 '>
                    <div className='absolute -inset-0.5 opacity-50 bg-blue-600    rounded-lg blur-xl '></div>
                    <div className='bg-gray-900 hover:bg-pink-600 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative '>Bugs Killer </div> </div>

            </div>
            <div><CrytoNews /></div>
            <div className='mb-10 border-b-2 hidden md:block  border-gray-600'>
                <Footer />
            </div>
        </div>
    )
}

export default SideBarLeft
