import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { cartContext } from "../../Context/cartContext";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import styles from './cartItem.module.scss';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "0.5rem",
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
    image: {
      width: 128,
      height: "100%",

    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    delete: {
     margin:".5rem 0",
    },
  }));


const CartItem = ({ cartProduct }) => {
    
    const classes = useStyles();

    const { sumarCantCart, restCantCart, removeCart } = useContext(cartContext);

    // console.log(cartProduct)
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={4}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={cartProduct.item.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h6">
                                {cartProduct.item.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {cartProduct.item.description}
                            </Typography>
                            <div className={styles.contador}>
                                {(cartProduct.quantity > 1) ?
                                <IconButton aria-label="remove" onClick={ () => {restCantCart(cartProduct)}}>
                                    <RemoveIcon fontSize="small" color="secondary"/>
                                </IconButton>:
                                <IconButton disabled><RemoveIcon fontSize="small" color="secondary"/></IconButton>
                                } 
                                <Typography variant="body1" color="textSecondary">
                                    {cartProduct.quantity}
                                </Typography>
                                {(cartProduct.quantity < cartProduct.item.stock) ?
                                <IconButton aria-label="add" onClick={ () => {sumarCantCart(cartProduct)}}>
                                <AddIcon fontSize="small" color="secondary"/></IconButton>:
                                <IconButton disabled><AddIcon fontSize="small" color="secondary"/></IconButton>
                                }
                            </div>
                            <Grid item className={classes.delete}>
                                <Link  variant="body2" style={{ cursor: 'pointer' }} onClick={ () => {removeCart(cartProduct) }}>
                                Eliminar
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                        <Typography variant="h6">${cartProduct.item.price * cartProduct.quantity}</Typography>
                </Grid>
                    </Grid>  
            </Paper>
        </div>
    )
};

export default CartItem;