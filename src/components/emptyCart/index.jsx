import React from 'react';
// import styles from './emptyCart.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "0.5rem",
        },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
    })
)


const EmptyCart = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Paper className={classes.paper}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Typography gutterBottom variant="h4" align="center">Tu carrito está vacío</Typography>
                            <Typography variant="body2" gutterBottom align="center">
                                ¿No sabes qué comprar? ¡Miles de productos te esperan!
                            </Typography>
                            <Link to= {'/'} align="center">
                                Vuelve a ver nuestros productos
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>  
    )
};

export default EmptyCart;