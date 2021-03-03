import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import CartItem from "../cartItem";
import EmptyCart from "../emptyCart";
import styles from './cart.module.scss';
//MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/*===================================================================================================*/
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "0.5rem",
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginTop: ".5rem",
      maxWidth: 700,
      display:"flex",
      alignItems: "flex-end"
    },
    texto: {
        textAlign: "right",
        padding: "1rem",
        margin:".5rem 0"
    },
    allPrice: {
        marginLeft: "4rem",
    },
    separador:{
        borderBottom: "1px solid #f1ebeb",
        width: "100%",
        margin: "0 .5rem"
    },
  }));

const CartComponent = () => {

    const classes = useStyles();
    const cartUse = useContext(cartContext);
    const {totalPrice , totalCant} = useContext(cartContext)
    
    return (
        <div className={styles.backg}>
            {cartUse.productCart.length === 0 ? <EmptyCart/> : cartUse.productCart.map((cartProduct)=> { 
                return <CartItem key={cartProduct.item.id} cartProduct={cartProduct}/>})
            }
            {cartUse.productCart.length === 0 ? null : 
                <Paper className={classes.paper}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} className={classes.texto}>
                            <Typography variant="body2">Cantidad de productos <span className={classes.allPrice}>{totalCant()}</span></Typography>
                        </Grid>
                        <div className={classes.separador}/>
                        <Grid item xs={12} className={classes.texto}>
                            <Typography variant="h5">Total <span className={classes.allPrice}> $ {totalPrice()} </span></Typography>
                        </Grid>
                    </Grid>  
                </Paper>
            }
        </div>
    )
}

export default CartComponent;
