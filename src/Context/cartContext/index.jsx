import { createContext, useEffect, useState } from "react";
import { getFirestore } from "../../firebase";

export const cartContext = createContext([]);

export const CartProvider = ({children}) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    const [ productCart, setProductCart ] = useState(cartLocalStorage ? cartLocalStorage : []);
    console.log(productCart)
    
    // desafio firebase
    // const [productos, setProductos] = useState([])
    // console.log(productos)
    // useEffect(() => {
    //     // conexion a la bd
    //     const baseDeDatos = getFirestore();
    //     // Guardamos la referencia de la coleccion que queremos tomar
    //     const itemCollection = baseDeDatos.collection('items');
    //     // Tomando los datos
    //     itemCollection.get().then((value) => {
    //         let aux = value.docs.map( async (product) => {
    //             // llamar otra vez a la bd tomando la categoriaID del element
    //             const CategoriasCollection = baseDeDatos.collection('categorias');
    //             let auxCategorias = await CategoriasCollection.doc(product.data().nombre).get()
    //             return { ...product.data(), categoria: auxCategorias.data() };
    //         })
    //         setProductos(aux);
    //     })
    // }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productCart))
    }, [productCart])

    
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
        productCart, 
        addCart, 
        sumarCantCart, 
        restCantCart,
        removeCart,
        totalPrice,
        totalCant,
        }}>
        {children}
    </cartContext.Provider>
}