import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './detail.module.scss';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
})

const ItemDetail = ({detallePro}) => {
    // console.log(detallePro)
    const classes = useStyles();

    // const [carrito, setCarrito] = useState([]);

    const [irAlCarrito, setIrAlCarrito] = useState(false);

    const onAdd = (contador) => {
        // setCarrito([...carrito, detallePro]);
        console.log(`Usted agrego ${contador} productos`);
        setIrAlCarrito(true);
    };

// console.log(carrito);


    return (
        <div className={styles.contenedorGrande}>
            <h1>Detail</h1>
            <div className={styles.cont}>
                <div className={styles.contImg}>
                    <img src={detallePro.img} alt=""/>
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
                            <li><Link>XS</Link></li>
                            <li><Link>S</Link></li>
                            <li><Link>M</Link></li>
                            <li><Link>L</Link></li>
                            <li><Link>XL</Link></li>
                        </ul>
					</div>
                    <h5>Stock Disponible: {detallePro.stock}</h5>
                    {irAlCarrito ? <Link to= {`/Cart`}><Button variant="contained" color="secondary">Terminar mi compra</Button></Link> : <ItemCount  className={classes.contenedor} stock={detallePro.stock} onAdd={onAdd}/>}
                    
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;