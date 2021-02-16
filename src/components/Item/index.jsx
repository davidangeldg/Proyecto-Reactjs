import React from 'react';
import styles from "./Item.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  contenedor: {
      display:"flex",
      justifyContent: "center",
      alignItems:"center",
  },
})

const Item = ({product}) => {

  const classes = useStyles()

  const onAdd = (contador) => {
    // setCarrito([...carrito, {name: 'producto X'}]);
    // alert('Producto Agregado');
    console.log(`Usted agrego ${contador} productos`)
};
    return (
        <Link to={`/item/${product.id}`}>
          <div className={styles.card}>
            <img src={product.img} alt=""/>
            <h2>$ {product.price}</h2>
            <h3>{product.name}</h3>
            {/* <ItemCount  className={classes.contenedor} stock={product.stock} onAdd={onAdd}/> */}
            <Link to={`/item/${product.id}`}>VER DETALLE</Link>
          </div>
        </Link>
    )
};

export default Item;
