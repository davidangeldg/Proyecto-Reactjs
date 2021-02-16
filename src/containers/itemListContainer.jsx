// contenedor para productos

import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import itemsPromise from "../mocks/productos";
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';


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

    // const [category, setCategory] = useState();

    const{categoryId} = useParams();
    console.log(categoryId);

    useEffect(() => {
        itemsPromise.then((res) => {
            if (categoryId === undefined) {
                setProducts(res);
            }else{
                setProducts(res.filter(element=> element.categoryId.toString() === categoryId))
            };
        });
    }, [categoryId]);

    return (
        <>            
            <h1 className={classes.titulo}>PRODUCTOS</h1>
            {products.length < 1 ? <h1 className={classes.carga}>Cargando...</h1> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer;