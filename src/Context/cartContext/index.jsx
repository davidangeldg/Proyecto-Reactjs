import { createContext, useState } from "react";

export const cartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [ productCart, setProductCart ] = useState([]);
    console.log(productCart)
    
    const addCart = (item) => {
        if (isInCart(item.item.id) === -1){
             setProductCart([...productCart, item])
        }else{
            productCart.forEach(p => {
                if(p.item.id == item.item.id){
                    p.quantity += item.quantity;
                }
            })
        }
    }

    const isInCart = (id) => {
        // console.log(productCart.findIndex(prod=>prod.item.id))
        return productCart.findIndex(prod => prod.item.id === id)
    }

    return <cartContext.Provider value={{productCart, addCart}}>
        {children}
    </cartContext.Provider>
}