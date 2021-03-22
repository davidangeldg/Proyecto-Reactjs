import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { cartContext } from '../../Context/cartContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff !important",
    },
    secondary: {
      main: "rgb(88, 88, 88)"
    }
  },
});


function CartWidget() {

    const { totalCant } = useContext(cartContext)
    // console.log(productCart.length)
    return (
        <ThemeProvider theme={theme}>
            <IconButton color="primary" aria-label="add to shopping cart">
                <Badge badgeContent={totalCant()} max={9} color="secondary">
                    <ShoppingCartRoundedIcon color="primary" />
                </Badge>
            </IconButton>
        </ThemeProvider>
    
    )
}

export default CartWidget;
