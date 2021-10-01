import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { RiWalkFill } from "react-icons/ri";



const SideBarRight = () => {
    return (<>
        <div className='  flex flex-wrap my-5 p-2 gap-4 text-sm bg-gray-900 w-100 h-100  md:flex-col '>
            <div className='text-light md:text-xs flex justify-center align-items-center'><div className=' text-lg'><RiWalkFill /></div><span className='mx-2 text-lg'>Follow</span></div>



            <div className=' md:text-xs md:flex-col relative mx-3 '>
                <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl  '></div>
                <div className='bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative flex align-items-center'><img className='h-5 w-5 rounded-full mx-1 cursor-pointer' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> <span className='ml-1 mr-4'>Joe Doney</span> <span className="text-xl mr-4 cursor-pointer lg:mx-auto"><FiPlusCircle /></span></div> </div>

            <div className=' md:text-xs md:flex-col relative mx-3 '>
                <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                <div className='bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative flex align-items-center'><img className='h-5 w-5 rounded-full mx-1 cursor-pointer' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> <span className='ml-1 mr-4'>Joe Doney</span> <span className="text-xl mr-4 cursor-pointer lg:mx-auto"><FiPlusCircle /></span></div> </div>

            <div className=' md:text-xs md:flex-col relative mx-3 '>
                <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                <div className='bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative flex align-items-center'><img className='h-5 w-5 rounded-full mx-1 cursor-pointer' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> <span className='ml-1 mr-4'>Joe Doney</span> <span className="text-xl mr-4 cursor-pointer lg:mx-auto"><FiPlusCircle /></span></div> </div>

        </div>

        <div className='  flex flex-wrap my-5 p-2 gap-4 text-sm bg-gray-900 w-100 h-100  md:flex-col '>
            <div className='text-light md:text-xs flex justify-center align-items-center'><span className='mx-2 text-lg'>Followers</span><div className=' text-lg'><RiWalkFill /></div></div>



            <div className=' md:text-xs md:flex-col relative mx-3 '>
                <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                <div className='bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative flex align-items-center'><img className='h-5 w-5 rounded-full mx-1 cursor-pointer' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> <span className='ml-1 mr-4'>Joe Doney</span> <span className="text-xl mr-4 cursor-pointer lg:mx-auto"><RiWalkFill /></span></div> </div>

            <div className=' md:text-xs md:flex-col relative mx-3 '>
                <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                <div className='bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative flex align-items-center'><img className='h-5 w-5 rounded-full mx-1 cursor-pointer' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> <span className='ml-1 mr-4'>Joe Doney</span> <span className="text-xl mr-4 cursor-pointer lg:mx-auto"><RiWalkFill /></span></div> </div>

            <div className=' md:text-xs md:flex-col relative mx-3 '>
                <div className='absolute -inset-0.5 opacity-50 bg-blue-600 rounded-lg blur-xl '></div>
                <div className='bg-gray-900 rounded-lg  border-1 border-blue-600  text-center text-gray-300 leading-none p-2 relative flex align-items-center'><img className='h-5 w-5 rounded-full mx-1 cursor-pointer' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" /> <span className='ml-1 mr-4'>Joe Doney</span> <span className="text-xl mr-4 cursor-pointer lg:mx-auto"><RiWalkFill /></span></div> </div>

        </div>
    </>)
}

export default SideBarRight
