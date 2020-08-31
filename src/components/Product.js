import React from 'react'
import Grid from '@material-ui/core/Grid';
import cloth from '../assets/image/cloth_1.jpg'

function Product({ image }) {
    return (
        <Grid item xs={3}>
            <div className='border rounded'>
                <img src={image || cloth} alt="" />
                <div className='w-full border-black p-2'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-gray-900'><span className='font-bold'>GHS</span> 30.00</h3>
                        <button className='text-purple-900 font-bold'>Purchase</button>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default Product
