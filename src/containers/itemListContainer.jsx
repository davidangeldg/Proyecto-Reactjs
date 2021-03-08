// contenedor para productos
import React, { useEffect, useContext, useState } from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// locales
// import itemsPromise from "../mocks/productos";
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { cartContext } from '../Context/cartContext';
import { getFirestore } from '../firebase';


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
    const {productos, setProductos } = useContext(cartContext);
    console.log(productos)
    
    const{ categoria } = useParams(); 
    // console.log(categoria)
    // productos Locales
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     itemsPromise.then((res) => {
    //         if (categoryId === undefined) {
    //             setProducts(res);
    //         }else{
    //             setProducts(res.filter(element=> element.categoryId.toString() === categoryId))
    //         };
    //     });
    // }, [categoryId]);

    useEffect(() => {

        // conexion a la bd
        const baseDeDatos = getFirestore();
        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('items');
        itemCollection.get().then(async (value) => {
            //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
            let aux = await Promise.all(value.docs.map( async (product) => {

                // Llamar otra vez a la bd tomando la categoriaID del element
                const CategoriasCollection = baseDeDatos.collection('categorias');
                //cambiar datos por los que yo voy a subir
                // Tomamos el documento la id de la categoria
                let auxCategorias = await CategoriasCollection.doc(product.data().categoria).get()
                // console.log(auxCategorias.data())
                return { ...product.data(), categoria:auxCategorias.data().category }
            }))
            if (categoria === undefined) {
                setProductos(aux);
            }else{
                setProductos(aux.filter(element=> element.categoria === categoria))
            };
        })
    }, [categoria]); 

    console.log(productos)
 
    return (
        <>            
            {productos.length < 1 ? <div className={classes.contenedor}><CircularProgress color="secondary" /></div> : 
            <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer;