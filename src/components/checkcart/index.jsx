import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography'
import styles from './checkcart.module.scss'


const CheckCart = ({ cartProduct }) => {

    return (
        <div className={styles.cont}>
            <img alt={cartProduct.item.title} src={cartProduct.item.image} />
            <span>
            <Typography variant="h6" color="initial">{cartProduct.item.title}</Typography>
            <Typography variant="body2" color='inherit'>{cartProduct.item.price} x {cartProduct.quantity}</Typography>
            </span>
        </div>
    )
}

export default CheckCart;
