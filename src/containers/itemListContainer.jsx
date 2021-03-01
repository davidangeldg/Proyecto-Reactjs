// contenedor para productos
import React, { useState, useEffect, useContext } from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// locales
import itemsPromise from "../mocks/productos";
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../firebase";


const useStyles = makeStyles({
    contenedor: {
        padding: "40px",
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
    const [products, setProducts] = useState([])
    const{categoryId} = useParams(); 

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
            {/* <h1 className={classes.titulo}>PRODUCTOS</h1> */}
            {products.length < 1 ? <div className={classes.contenedor}><CircularProgress color="secondary" /></div> : <ItemList products={products}/>}
        </>
    )
}

export default ItemListContainer;