import React from 'react'
import { CircleSpinner } from 'react-spinners-kit'

function Loading({loading}) {
    return (
        <div className='flex w-full flex-col justify-center items-center my-3'>
            <CircleSpinner loading={loading} size={30} color='#ccc' />
            <h3 className="text-center font-bold">Please wait ...</h3>
        </div>
    )
}

export default Loading
