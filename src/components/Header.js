import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserAdd, AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function Header({ dispatch ,url}) {
    return (
        <div className='flex justify-between items-center w-full py-3 border-b sticky'>
            <Link to='/' className='flex justify-center items-center'>
                <h3 className='font-bold text-2xl  pl-2 py-1'>Classy.Office</h3>
                <AiOutlineShopping style={{ fontSize: 30 }} />
            </Link>

            <div className='flex justify-center items-center'>
                <Link to={`${url}cart`}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={0} color="secondary">
                            <AiOutlineShoppingCart />
                        </StyledBadge>
                    </IconButton>
                </Link>

                <button onClick={() => dispatch({ type: 'open', size: 'mini' })} className='ml-2 flex justify-center items-center bg-purple-700 rounded-full px-3 py-2 text-purple-100 font-bold'>
                    <AiOutlineUserAdd />
                    <span>Login / Signup</span>
                </button>
            </div>
        </div>
    )
}

export default Header
