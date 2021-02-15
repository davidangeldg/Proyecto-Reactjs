import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import itemsPromise from "../mocks/productos";




const ItemDetailContainer = () => {

    const [detallePro, setDetallePro] = useState({});
    

    const{id} = useParams();
    console.log(id);

    useEffect(() => {
        itemsPromise.then((res) => {
            setDetallePro(res.find(element=> element.id.toString() === id))
        });
    }, []);

    console.log(detallePro);

    
    return (
        <section>
            <ItemDetail detallePro={detallePro}/>
        </section>
    )
}

export default ItemDetailContainer;
