import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './detail.module.scss';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { red } from '@material-ui/core/colors';
import { ItemCount } from '../ItemCount';



const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
})

const ItemDetail = ({detallePro}) => {
    console.log(detallePro)
    const classes = useStyles();

    const [carrito, setCarrito] = useState([]);

    const onAdd = () => {
        setCarrito([...carrito, {name: 'producto X'}]);
        alert('Producto Agregado');
    };

    return (
        <div className={styles.contenedorGrande}>
            <h1>DETALLE</h1>
            <div className={styles.cont}>
                <div className={styles.contImg}>
                    <img src={detallePro.img} alt=""/> 
                    <img src={detallePro.img2} alt=""/>
                </div>
                <img src={detallePro.img} alt=""/>
                <div className={styles.contDetail}>
                    <h6>Nuevo | 1.000 vendidos</h6>
                    <h3>{detallePro.name}</h3>
                    <div className={styles.productRating}>
                        <StarRoundedIcon style={{ color: red[800] }} fontSize="small"/>
                        <StarRoundedIcon style={{ color: red[800] }} fontSize="small"/>
                        <StarRoundedIcon style={{ color: red[800] }} fontSize="small"/>
                        <StarRoundedIcon style={{ color: red[800] }} fontSize="small"/>
                        <StarRoundedIcon color="disabled" fontSize="small"/>
                    </div>
                    <span className={styles.venta}>MÁS VENDIDO</span>
                    <h2>${detallePro.price}</h2>
                    <p>{detallePro.description}</p>
                    <div className={styles.productSize}>
                        <h4 class={styles.talla}>Talla:</h4>
                        <ul class={styles.ul_size}>
                            <li><a href="#">XS</a></li>
                            <li><a href="#">S</a></li>
                            <li><a href="#">M</a></li>
                            <li><a href="#">L</a></li>
                            <li><a href="#">XL</a></li>
                        </ul>
					</div>
                    <h5>Stock Disponible: {detallePro.stock}</h5>
                    <ItemCount  className={classes.contenedor} stock={detallePro.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;