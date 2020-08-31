import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import image from '../assets/image/cloth_2.jpg'
import { Link } from 'react-router-dom'
import Payment from './Payment'

function Cart() {
    const [paymodal, setPaymodal] = useState(false)
    return (
        <div className='w-full flex flex-col flex-1'>
            <div className="w-full p-3 bg-gray-200 my-2 rounded">
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='font-bold'>Items : 7</h3>
                        <h3 className='font-bold'>Total : GHS 200.00</h3>
                    </div>
                    <Button onClick={() => setPaymodal(true)}>Pay / Checkout</Button>
                </div>
            </div>
            <div className='w-full border p-3'>
                <div className=' border-b  pb-2 flex justify-between items-center'>
                    <div>

                    </div>
                    <div className>
                        <h3 className='font-bold'>QUANTITY</h3>
                    </div>
                    <div>
                        <h3 className='font-bold'>PRICE</h3>
                    </div>
                </div>
                <div className=' border-b  pb-2 flex justify-between items-center'>
                    <div>
                        <img src={image} alt="" srcset="" className='w-20 h-20' />
                    </div>
                    <div>
                        <input type="number" placeholder='Quantity' className='border px-2 py-2 text-center' />
                    </div>
                    <div>
                        GHS 23.00
                    </div>
                </div>
            </div>
            <div className='w-full mt-5 text-center'>
                <Link to={`/history`} class='text-purple-900 font-bold'>Purchase history</Link>
            </div>
            <Payment open={paymodal} setOpen={setPaymodal} />
        </div>
    )
}

export default Cart
