import React from 'react'
import { Button } from '../common/ui/Button'
const LoginOptions = () => {
    return (
        <div>
            <div className='mb-5'>
                <Button className='border-input-bg borde text-center w-full  p-6 text-lg rounded-lg'>
                    <img src='/src/assets/google.webp' alt='google logo' className='w-4' /> continue with Google
                </Button>
            </div>

            <div className='mb-5'>
                <Button className='border-input-bg border text-center w-full  p-6 text-lg rounded-lg'>
                    <img src='/src/assets/Apple_logo_black.svg' alt='apple logo' className='w-4' /> continue with Apple
                </Button>
            </div>

            <div className='text-gray-1 text-sm text-center'>
                Don't have an account? <a  href='' className=' underline text-primary-blue-1'>Sign Up</a>
            </div>
        </div>
    )
}

export default LoginOptions