import React, { useContext } from 'react';
//mui
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

//propios
import styles from './check.module.scss'
import { cartContext } from '../../Context/cartContext';
import CheckCart from '../checkcart';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PopUp from '../PopUp';
import BaseData from '../products';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     // width: '50%',
    // },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '49%',
    },
    large:{
        // margin: theme.spacing(1),
        width: '100%',
    },
  }));

const Checkout = () => {
    const classes = useStyles();
    const {
        productCart, totalPrice, totalCant, finalizarCompra, setName, cellphone, setCellphone, 
        email, setEmail, direccion, setDireccion, validarEmail, setValidarEmail, openAlert, setOpenAlert
    } = useContext(cartContext);

    const handleChangeName = (event) => {
    setName(event.target.value);
    };
    const handleChangeCel = (event) => {
        setCellphone(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangeValidar = (event) => {
        setValidarEmail(event.target.value);
    };
    const handleChangeDir = (event) => {
        setDireccion(event.target.value);
    };
    const handleAlert = (event) => {
        setOpenAlert(false)
    }
    
    return (
        <div className={styles.backg}>
            <div className={styles.checkContainer}>
                <form className={styles.root} noValidate autoComplete="off">
                    <div className={styles.inputs}>
                        <h3>datos de contacto</h3>
                        <TextField id="name" label="Nombre y Apellido" 
                        placeholder="Tu nombre Aquí!" color="secondary"
                        onChange={handleChangeName} className={classes.large} />
                        <TextField id="telefono" label="telefono" 
                        placeholder="3115553344" value={cellphone} className={classes.textField} 
                        color="secondary" onChange={handleChangeCel} />
                        <TextField id="standard-required" label="Dirección" 
                        placeholder="cll 1 # 100-50" value={direccion} color="secondary"
                        onChange={handleChangeDir} className={classes.textField} />
                        <TextField id="e-mail" label="E-mail" 
                        placeholder="usuario@correo.com" value={email} className={classes.large} 
                        color="secondary" onChange={handleChangeEmail} autoComplete="off" />
                        <TextField id="validateEmail" label="Confirmar Email" 
                        placeholder="usuario@correo.com" value={validarEmail} className={classes.large} 
                        color="secondary" onChange={handleChangeValidar} autoComplete="off" />
                    </div>
                    {/* <div className={styles.dir}>
                    </div> */}
                </form>
                <div className={styles.carrito}>
                    <h3>Productos en tu carrito</h3>
                    {productCart.map((cartProduct)=> { 
                     return <CheckCart key={cartProduct.item.id} cartProduct={cartProduct}/>})
                    }
                    <div className={styles.total}>
                    <Typography variant="body2" className={styles.price}>Total items<span>{totalCant()}</span></Typography>
                    <Typography variant="subtitle2" className={styles.price}>Total <span> $ {totalPrice()} </span></Typography>
                    </div>
                    <div className={styles.comprar}>
                        <Button variant="contained" color="secondary" onClick={()=>{finalizarCompra()}}>
                            Comprar
                        </Button>
                    </div>
                </div>
            </div>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleAlert} className={styles.snack}>
                <Alert onClose={handleAlert} severity="error">
                No has completado todos los campos
                </Alert>
            </Snackbar>
            <PopUp/>
        </div>
    )
}

export default Checkout;
