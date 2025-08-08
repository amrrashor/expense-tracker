import React from 'react'

const Divider = () => {
    return (
        <div className='flex items-center justify-center my-7'>
            <span className='w-full h-1 border-b border-gray-300 bg-gray-50' />
            <span className='w-fit text-nowrap mx-3  block text-center text-sm text-black'>Or Login with</span>
            <span className='w-full h-1 border-b border-gray-300 bg-gray-50'/>
        </div>
    )
}

export default Divider