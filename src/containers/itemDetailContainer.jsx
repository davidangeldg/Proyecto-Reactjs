import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getFirestore } from '../firebase';
// import itemsPromise from "../mocks/productos";




const ItemDetailContainer = () => {

    const [detallePro, setDetallePro] = useState([]);
    

    const{id} = useParams();
    console.log(id);

    // useEffect(() => {
    //     // conexion a la bd
    //     const baseDeDatos = getFirestore();
    //     // Guardamos la referencia de la coleccion que queremos tomar
    //     const itemCollection = baseDeDatos.collection('items');
    //     // Tomando los datos
    //     itemCollection.doc(id).get().then( value => {
    //         setDetallePro({...value.data(), id: value.id})
    //     })
    // }, []);

    useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();
        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('items');
        // Tomando los datos
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
            setDetallePro(...aux.filter(element=> element.id.toString() === id));
        })
        // itemCollection.doc(id).get().then( value => {
        //     setDetallePro({...value.data(), id: value.id})
        // })
    }, []);

    console.log(detallePro)

    
    return (
        <section>
            <ItemDetail detallePro={detallePro}/> 
        </section>
    )
}

export default ItemDetailContainer;
