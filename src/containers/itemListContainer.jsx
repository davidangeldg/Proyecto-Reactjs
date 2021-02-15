// contenedor para productos

import React, { useState, useEffect } from 'react';

import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ItemCount } from "../components/ItemCount";
import itemsPromise from "../mocks/productos";
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import createTypography from '@material-ui/core/styles/createTypography';


const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
    titulo: {
        textAlign: "center",
        color:  "rgb(243, 19, 19)",
    },
    carga: {
        textAlign: "center",
    }
})

const ItemListContainer = () => {
    const classes = useStyles();

    // const [carrito, setCarrito] = useState([]);
    const [products, setProducts] = useState([])


    useEffect(() => {
        itemsPromise.then((res) => setProducts(res));
    }, []);

    return (
        <>            
            <h1 className={classes.titulo}>PRODUCTOS</h1>
            {products.length < 1 ? <h1 className={classes.carga}>Cargando...</h1> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer;