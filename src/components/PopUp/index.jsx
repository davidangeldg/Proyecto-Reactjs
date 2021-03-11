import React, { useContext, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@material-ui/core/';
import CheckIcon from '@material-ui/icons/Check';
import { useTheme } from '@material-ui/core/styles';
import { cartContext } from '../../Context/cartContext';
import styles from './popUp.module.scss';
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const PopUp = () => {
    const { open, setOpen, idCompra } = useContext(cartContext)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className={styles.contenedor}>
            <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className={styles.contenedor}
            >
                <DialogTitle id="responsive-dialog-title"> <CheckIcon severity="success" /> Tu compra ha sido realizada</DialogTitle>
                <DialogContent>
                <DialogContentText>
                Esta es tu orden de compra, por favor toma nota para hacerle seguimiento
                <Typography variant="h5" color="initial" >{idCompra}</Typography>
                <Typography variant="subtitle1" color="initial" >¡Gracias por confiar en nosotros!</Typography>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose} color="secondary" autoFocus>cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PopUp;
