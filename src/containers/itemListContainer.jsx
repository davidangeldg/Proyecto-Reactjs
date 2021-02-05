// contenedor para productos

import React, { useState, useEffect } from 'react';

import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ItemCount } from "../components/ItemCount";
import productos from "../mocks/productos";
import ItemList from '../components/ItemList';


const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
})

const ItemListContainer = (props) => {
    const classes = useStyles();

    // const [carrito, setCarrito] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        //promesa
        const PromesaProduct = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(productos);
                // reject(console.log("no se cargo todo"));
            }, 2000)
    });

    PromesaProduct.then((result) => setProducts(result));
    }, [])

    // const onAdd = () => {
    //     setCarrito([...carrito, {name: 'producto X'}]);
    //     alert('Producto Agregado');
    // };

    return (
        <>
            <Typography 
            variant="h3" 
            color="secondary" 
            align="center"
            fontWeight={700}
            gutterBottom="true"
            >
            {props.greeting}
            </Typography>
            {/* <ItemCount  className={classes.contenedor} stock={5} onAdd={onAdd}/> */}
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;