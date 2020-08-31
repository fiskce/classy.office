import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
function Payment({ open, setOpen }) {
    const [option, setOption] = useState({ momo: 1, pd: 0 })
    const [stage, setStage] = useState(1)

    const handleNext = () => {
        if (stage === 1) {
            if (option.momo === 0 && option.pd === 0) {
                return
            }
            else {
                setStage(stage + 1);
                console.log(stage);
            }
        }
        else if(stage === 4 || (stage === 3 && option.pd)) {
           return
        }
        else{
            setStage(stage + 1)
        }
    }
    return (
        <Modal
            size={'mini'}
            open={open}
            onClose={() => setOpen(false)}
        >

            <Modal.Content>
                {stage === 4 || (stage === 3 && option.pd) ? '' : <>
                    <div className='mb-5'>
                        <h3 className='text-center text-2xl'> Payment Option </h3>
                        <div className='text-center'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing .
                    </div>
                    </div>
                </>}

                {stage === 1 ? <> <div className="w-full my-2 border rounded p-2">
                    <div className='w-full flex justify-center items-center font-bold'>
                        <input type="checkbox" name="opt" checked={option.momo} className='mr-2' onChange={(e) => { setOption({ momo: e.target.checked, pd: 0 }) }} />
                        <h3>MOMO Payment</h3>
                    </div>
                </div>
                    <div className="w-full my-2 border rounded p-2">
                        <div className='w-full flex justify-center items-center font-bold'>
                            <input type="checkbox" name="opt" checked={option.pd} className='mr-2' onChange={(e) => { setOption({ momo: 0, pd: e.target.checked }) }} />
                            <h3>Cash on delevery</h3>
                        </div>
                    </div> </> : ''}
                {stage === 2 ? <MomoForm /> : ''}
                {stage === 3 && option.momo ? <FinalMomo /> : ''}
                {stage === 4 || (stage === 3 && option.pd) ? <PaymentComplete /> : ''}
                <div className='w-full'>
                    <button onClick={handleNext} className='w-full bg-purple-900 font-bold p-2 text-purple-100 border rounded'>
                        Next
                    </button>
                </div>
            </Modal.Content>
        </Modal>
    )
}

const MomoForm = () => {
    return (
        <>
            <div className="w-full my-2 border rounded p-2">
                <label>Full Name</label>
                <div className='w-full'>
                    <input type="text" placeholder='Full Name' className='w-full py-3 px-1' />
                </div>
            </div>
            <div className="w-full my-2 border rounded p-2">
                <label>Phone Number</label>
                <div className='w-full'>
                    <input type="tel" placeholder='Your Phone' className='w-full py-3 px-1' />
                </div>
            </div>
            <div className="w-full my-2 border rounded p-2">
                <label>Location</label>
                <div className='w-full'>
                    <input type="text" placeholder='HG930A' className='w-full py-3 px-1' />
                </div>
            </div>
        </>
    )
}


const FinalMomo = () => {
    return (
        <>
            <div className='w-full'>
                <div>
                    <h3 className='font-bold'>0245407922</h3>
                    <h3 className='font-bold'>GEORGINA EDUAMA</h3>
                    <div>Please put the checkout id <span className='font-bold'>[XIT5689]</span> into the dicription during the momo transaction. </div>
                </div>
                <div className="w-full my-2 border rounded p-2">
                    <label>Tranaction ID</label>
                    <div className='w-full'>
                        <input type="text" placeholder='Transaction ID' className='w-full py-3 px-1' />
                    </div>
                </div>
            </div>
        </>
    )
}

const PaymentComplete = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <h3 className='text-center text-2xl mb-2'>Thanks for Shopping</h3>
                <div>
                    <h3 className='text-center my-2'>your oders will be sent to you with in <span className='font-bold'>2 - 3 working days</span>.</h3>
                    <div className="text-center font-bold mb-2">Stay Safe.</div>
                </div>
            </div>
        </>
    )
}


export default Payment
