import React from 'react'
import { Button } from 'semantic-ui-react'

function Sell() {
    const [seller, setSeller] = React.useState(true)
    return (
        <div className='flex flex-1'>
            {!seller ? <BecomSeller /> :
                <div className="w-full flex flex-1 mb-0">
                    <div className='w-32 border-r'>
                        <div className="my-2">
                            <h3 className='font-bold'>Products</h3>
                        </div>
                        <div className="my-2">
                            <h3 className='font-bold'>Products</h3>
                        </div>
                        <div className="my-2">
                            <h3 className='font-bold'>Products</h3>
                        </div>
                        <div className="my-2">
                            <h3 className='font-bold'>Products</h3>
                        </div>
                        <div className="my-2">
                            <h3 className='font-bold'>Products</h3>
                        </div>
                        <div className="my-2">
                            <h3 className='font-bold'>Products</h3>
                        </div>
                    </div>
                    <div className='flex-1'></div>
                </div>

            }
        </div>
    )
}


function BecomSeller() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h3 className="text-3xl font-bold mb-5">Become A Seller</h3>
            <div className="font-bold w-36 text-center">
                Becomeing a seller has some <span className='text-purple-500 cursor-pointer'>terms and conditons</span> that comes with it by checking the box below makes all your actions on this platform term bound.
                </div>
            <div className='flex justify-center items-center font-bold my-2'>
                <input type="checkbox" name="" id="" className='mx-2' /><label htmlFor="">Accept terms and conditions</label>
            </div>
            <Button>Become a Seller</Button>
        </div>
    )
}

export default Sell
