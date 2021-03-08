import React, { createContext, useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import firebase from 'firebase/app';
import '@firebase/firestore';

export const cartContext = createContext([]);

export const CartProvider = ({children}) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    const [ productCart, setProductCart ] = useState(cartLocalStorage ? cartLocalStorage : []);
    // desafio firebase
    const [productos, setProductos] = useState([]);
    // console.log(productos)   
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productCart))
    }, [productCart])
    // tomar datos formulario
    const [name, setName] = React.useState('');
    const [cellphone, setCellphone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [direccion, setDireccion] = React.useState('');
    const [idCompra, setIdCompra] = useState('');


    const finalizarCompra = () => {
        let newOrder = { 
            buyer: {name: name, telefono: cellphone, email: email, direccion: direccion }, 
            items: [...productCart], 
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice() };
        const baseDeDatos = getFirestore();
        const OrdenesCollection = baseDeDatos.collection('ordenes');
        OrdenesCollection.add(newOrder).then((value) => {
            setIdCompra(value.id);
            console.log(value.id)
        })
    }
    const totalPrice = () => productCart.reduce((acc, p) => acc + (p.quantity * p.item.price), 0);
    const totalCant = () => productCart.reduce((acc, {quantity}) => acc + quantity, 0);
    const sumarCantCart = (item) => {
        const newProductCart = [...productCart];
        newProductCart.forEach(p => {
            if(p.item.id === item.item.id){
                  p.quantity += 1;
            }
        })
        setProductCart(newProductCart);
    };
    const restCantCart = (item) => {
        const newProductCart = [...productCart];
        newProductCart.forEach(p => {
            if(p.item.id === item.item.id){
                  p.quantity -= 1;
            }
        })
        setProductCart(newProductCart);
    };
    const removeCart = (item) => {
        setProductCart( productCart.filter(p => p.item.id !== item.item.id) );
    }
    const addCart = (item) => {
        if (isInCart(item.item.id) === -1){
             setProductCart([...productCart, item])
        }else{
            const newCart = [...productCart];
            newCart.forEach(p => {
                if (p.item.id === item.item.id) {
                    p.quantity += item.quantity;
               }
            })
            setProductCart(newCart);
        }
    }

    const isInCart = (id) => {
        // console.log(productCart.findIndex(prod=>prod.item.id))
        return productCart.findIndex(prod => prod.item.id === id)
    }

    return <cartContext.Provider value={{
        productCart, addCart, sumarCantCart, restCantCart, removeCart, totalPrice, totalCant, 
        productos, setProductos, 
        name, setName, cellphone, setCellphone, email, setEmail, direccion, setDireccion,
        finalizarCompra,
        }}>
        {children}
    </cartContext.Provider>
}