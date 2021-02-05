import React, { useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import detalleProducto from '../mocks/detalleProducto';




const ItemDetailContainer = () => {

        const [detallePro, setdetallePro] = useState();
        
        const getItems = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(detalleProducto)
            }, 1000)
        }); 
        getItems.then((result) => setdetallePro(result));
        console.log(detallePro)

    
    return (
        <section>
            <ItemDetail detallePro={detallePro}/>
        </section>
    )
}

export default ItemDetailContainer;
