import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getFirestore } from '../firebase';
// import itemsPromise from "../mocks/productos";




const ItemDetailContainer = () => {

    const [detallePro, setDetallePro] = useState([]);
    

    const{id} = useParams();
    console.log(id);

    useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();
        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('items');
        // Tomando los datos
        itemCollection.doc(id).get().then( value => {
            setDetallePro({...value.data(), id: value.id})
        })
    }, []);
    
    return (
        <section>
            <ItemDetail detallePro={detallePro}/> 
        </section>
    )
}

export default ItemDetailContainer;
