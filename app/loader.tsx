import React from 'react'

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute w-full h-full border-4 border-[var(--lightBlue)] border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute w-8 h-8 bg-white rounded-full z-10"></div>
            </div>
        </div>
    )
}

export default Loader