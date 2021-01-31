// contenedor para productos

import React, { useState } from 'react';

import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ItemCount } from "../components/ItemCount";
import SimpleCard from "../components/SimpleCard";

const useStyles = makeStyles({
    contenedor: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
    },
})

const ItemListContainer = (props) => {
    const classes = useStyles();

    const onAdd = () => {
        alert('producto Agregado')
    };
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
            <ItemCount  className={classes.contenedor} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;