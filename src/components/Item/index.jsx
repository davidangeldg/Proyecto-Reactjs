import React from 'react';
import styles from "./Item.module.scss";
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  // console.log(product)
    return (
        <Link to={`/item/${product.id}`}>
          <div className={styles.card}>
            <img src={product.image} alt=""/>
            <h2>$ {product.price}</h2>
            <h3>{product.title}</h3>
            {/* <ItemCount  className={classes.contenedor} stock={product.stock} onAdd={onAdd}/> */}
            <Link to={`/item/${product.id}`}>VER DETALLE</Link>
          </div>
        </Link>
    ) 
};

export default Item;
