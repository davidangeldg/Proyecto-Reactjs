import React from 'react';

import Item from "../Item";
import { makeStyles } from '@material-ui/core/styles';
// import itemsPromise from "../../mocks/productos";

const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        flexFlow: "row wrap",
        padding: "0 2rem",
        margin: "auto",
        maxWidth: 1100,
    },
})


const ItemList = ({ productos }) => {
    const classes = useStyles();
    // console.log(productos)

    return (
        <div className= {classes.contenedor}>
            {productos.map((product)=> { 
                return <Item key={product.id} product={product}/>
            })}
        </div>
    )
};

export default ItemList;