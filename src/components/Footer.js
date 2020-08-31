import React from 'react'
import { AiOutlineSend, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
function Footer() {
    return (
        <div className='flex w-full border-t my-10 mt-20 justify-between items-center'>
                    <div className='my-5'>
                        <h3 className='font-bold text-2xl'>News Letter</h3>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className='flex justify-center items-center border rounded my-2 px-3 w-72'>
                            <input type="email" name="" id="" placeholder='email@domain.com' className='p-3 flex-1' />
                            <button>
                                <AiOutlineSend />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <BiLocationPlus className='mr-2 font-bold' />
                            <div>
                                {'Takoradi , Beach-Road'}
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <AiOutlinePhone className='mr-2 font-bold' />
                            <div>
                                {'  +233 5739 78554'}
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <AiOutlineMail className='mr-2 font-bold' />
                            <div>
                                {'  classy.office@mail.com'}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Footer
