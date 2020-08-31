import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Product from './Product';
import image from '../assets/image/cloth_2.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
function NewList({ dispatch }) {
    const classes = useStyles();

    return (
        <div className={`${classes.root}`}>
            <Grid container spacing={3} wrap="wrap"  >
                <Grid item xs={3}  >
                    <div className='border rounded py-3'>
                        <div>
                            <h3 className='text-center text-2xl py-2 text-gray-900'>NewLists</h3>
                            <div className='px-2 text-gray-600 text-center'>
                                Carefully curated to help you find the best products.
                    </div>
                            <div className='px-2 text-gray-600 text-center my-3'>
                                Click <span className='font-bold cursor-pointer'>Follow</span> to get updates on your favourite lists!
                    </div>
                        </div>
                    </div>
                </Grid>
                <Product />
                <Product image={image} />
                <Grid item xs={3}>
                    <div className='border rounded py-3'>
                        <div>
                            <h3 className='text-center text-2xl py-2 text-gray-900'>Sign-in now!</h3>
                            <div className='px-2 text-gray-600 text-center'>
                                Creating an account allows us to properly keep track of your shipments.
                    </div>
                            <div className='px-2 text-gray-600 text-center py-2'>
                                Happy Shopping!.
                    </div>
                            <div className='w-full px-2 mt-2'>

                                <button onClick={() => dispatch({ type: 'open', size: 'mini' })} className='w-full bg-gray-700 text-white px-3 py-2 rounded'>Sign in!</button>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Product item xs={3} image={'https://instagram.facc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118599829_316292859685307_8694649592473547720_n.jpg?_nc_ht=instagram.facc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=KY5RgOpKUlkAX9cyFvo&oh=7062fdfef2fd9aa119af4b8e03c51665&oe=5F75905B'} />
                <Product item xs={3} image={'https://lh3.googleusercontent.com/87XirCtNYPnoedCuiFB3pCnE_5kxhgdhWtKI40WW10phitIV5_JhZzCMgvNwsffmuXH_ZFUNHbtlAiWRjPWKB_Rp'} />
                <Product item xs={3} image={'https://instagram.facc2-1.fna.fbcdn.net/v/t51.2885-15/e35/118599829_316292859685307_8694649592473547720_n.jpg?_nc_ht=instagram.facc2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=KY5RgOpKUlkAX9cyFvo&oh=7062fdfef2fd9aa119af4b8e03c51665&oe=5F75905B'} />

            </Grid>
        </div>
    )
}

export default NewList
