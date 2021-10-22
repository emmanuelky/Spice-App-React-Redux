import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { CgTime } from "react-icons/cg";



const CurrentTime = () => {
    const [cTime, setCTime] = useState()

    const timer = () => {
        let currentTime = new Date()
        let hours = currentTime.getHours()
        let minutes = currentTime.getMinutes()
        let sec = currentTime.getSeconds()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (sec < 10) {
            sec = "0" + sec
        }
        let time = hours + ":" + minutes + ":" + sec + " ";
        if (hours > 11) {
            time += "PM";
        } else {
            time += "AM";
        }
        setCTime(time)
        setTimeout(timer, 1000);
    }


    useEffect(() => {
        timer()
    }, [timer])
    return (
        <div className='flex flex-wrap justify-start mx-5 pt-3'>
            <div className='text-gray-300 text-xs mx-1 px-1 rounded-lg bg-indigo-900'>{moment().format('ll')}</div>

            <div className='text-gray-300 text-xs mx-1 px-1 flex rounded-lg bg-indigo-900'><div>{cTime}</div><CgTime /></div>
            {/* <span className='text-gray-300 text-sm mx-1 px-1 rounded-lg bg-indigo-900'><CgTime /></span> */}
        </div>
    )
}

export default CurrentTime
