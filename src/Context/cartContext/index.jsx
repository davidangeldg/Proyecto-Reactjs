import { createContext, useState } from "react";

export const cartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [ productCart, setProductCart ] = useState([]);
    console.log(productCart.item)
    
    const addCart = (item) => {
        if (isInCart(item.item.id) === -1){
             setProductCart(item)
        }else{
           item.quantity ++
        }
        // setProductCart(item)
    }

    const isInCart = (id) => {
        // return productCart.findIndex(0)
        return productCart.findIndex(prod => prod.id === id)
    }

    return <cartContext.Provider value={{productCart, addCart}}>
        {children}
    </cartContext.Provider>
}