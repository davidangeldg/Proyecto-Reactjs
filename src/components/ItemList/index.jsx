import React, { useState, useEffect } from 'react';

import Item from "../Item";
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import itemsPromise from "../../mocks/productos";

const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        flexFlow: "row wrap",
        padding: "0 2rem"
    },
})


const ItemList = ({ products }) => {
    const classes = useStyles();

    return (
        <div className= {classes.contenedor}>
            {products.map((product)=> { 
                return <Item key={product.id} product={product}/>
            })}
        </div>
    )
};

export default ItemList;