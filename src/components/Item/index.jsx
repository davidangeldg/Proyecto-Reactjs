import React from 'react';
import styles from "./Item.module.scss";

const Item = ({product}) => {
    return (
        <div className={styles.card}>
          <img src={product.img} alt=""/>
          <h2>$ {product.price}</h2>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
    )
};

export default Item;
