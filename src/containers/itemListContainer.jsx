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
     //hook
    const [contador, setContador] = useState(1);

    const onAdd = (stock) => {
        if(contador < stock){
            setContador(contador + 1);
        }else{
            console.log("no tenemos stock")
        }
    };

    const onSubstract = () => {
        if(contador > 1){
            setContador(contador - 1);
        }else{
            console.log("el valor es menor a lo que podemos vender")
        }
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
            <ItemCount  className={classes.contenedor}stock={12} contador={contador} onSubstract={onSubstract} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;