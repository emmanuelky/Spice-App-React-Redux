import React from 'react'
import { format } from 'date-fns'

const Footer = () => {
    return (
        <div className="flex-wrap justify-center gap-2 text-xs hidden md:block text-white border-gray-600 p-2 mb-2 rounded-lg">
            <span>Imprint |</span>
            <span> Privacy |</span>
            <span> Policy |</span>
            <span> Cookies |</span>
            <span> Spice @{format(new Date(), 'yyyy')} </span>
        </div>
    )
}

export default Footer
