import React from 'react'
import { format } from 'date-fns'

const Footer = () => {
    return (
        <div className="flex flex-wrap gap-2 text-xs text-gray-900 bg-gray-100 p-2 mb-2 rounded-lg">
            <span>Imprint |</span>
            <span> Privacy |</span>
            <span>Data Protection |</span>
            <span> Cookies |</span>
            <span>Policy |</span>
            <span> Spice @{format(new Date(), 'yyyy')} </span>
        </div>
    )
}

export default Footer
