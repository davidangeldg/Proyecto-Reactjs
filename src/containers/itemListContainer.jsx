// contenedor para productos
import React, { useEffect, useContext } from 'react';
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
    const {productos, setProductos} = useContext(cartContext);
    
    const{ categoryId } = useParams(); 
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
        itemCollection.get().then(value =>{
            const productFilter = value.docs.map(doc => ({...doc.data(), id: doc.id}));
                if (categoryId === undefined) {
                    setProductos(productFilter);
                }else{
                    setProductos(productFilter.filter(element=> element.categoryId === categoryId))
                };
            console.log(productFilter);
            
        });
    }, [categoryId]); 
 
    return (
        <>            
            {productos.length < 1 ? <div className={classes.contenedor}><CircularProgress color="secondary" /></div> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer;