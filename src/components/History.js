import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function History() {
    return (
        <div className='flex flex-1  w-full'>
            <div className="flex flex-col flex-1 justify-center items-center">
            <AiOutlineShoppingCart style={{width:40,height:40}} />
            <h3 className='font-bold text-2xl'>No History</h3>
            </div>
        </div>
    )
}

export default History
