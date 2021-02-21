import React, { useContext } from "react";
import { cartContext } from "../../Context/cartContext";


const CartComponent = () => {
    const cartUse = useContext(cartContext);
    console.log(cartUse);

    return (
        <div>
            <p>{`Hola soy el carrito`}</p>
        </div>
    )
}

export default CartComponent;
