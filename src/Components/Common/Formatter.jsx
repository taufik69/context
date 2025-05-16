import React from 'react'

const Formatter = ({ children, color, visible }) => {
    return (
        <div>
            {visible && (<a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-green-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                style={{ background: color }}
            >
                {children}
            </a>)}

        </div>
    )
}

export default Formatter