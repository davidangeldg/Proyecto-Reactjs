import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';


function CartWidget() {
    return (
        <div>
            <IconButton color="inherit" aria-label="add to shopping cart">
                <ShoppingCartRoundedIcon />
            </IconButton>
        </div>
    )
}

export default CartWidget;
