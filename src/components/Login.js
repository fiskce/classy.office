import React from 'react'
import { Modal } from 'semantic-ui-react'
function Login({ size, open, dispatch }) {
    return (
        <Modal
            size={size}
            open={open}
            onClose={() => dispatch({ type: 'close' })}
        >

            <Modal.Content>
                <div className='mb-5'>
                    <h3 className='text-center text-2xl'> Login / Signup </h3>
                    <div className='text-center'>
                        Fill the form form below to <span className='font-bold'>Loin or Register</span> depending on your status.
                    </div>
                </div>
                <div className="w-full my-2 border rounded p-2">
                    <label>Email</label>
                    <div className='w-full'>
                        <input type="email" placeholder='email@domain.com' className='w-full py-3 px-1' />
                    </div>
                </div>
                <div className="w-full my-2 border rounded p-2">
                    <label>Password</label>
                    <div className='w-full'>
                        <input type="password" placeholder='Secrete' className='w-full py-3 px-1' />
                    </div>
                </div>
                <div className='w-full'>
                    <button className='w-full bg-purple-900 font-bold p-2 text-purple-100 border rounded'>
                        Start
                    </button>
                </div>
            </Modal.Content>
        </Modal>
    )
}

export default Login
