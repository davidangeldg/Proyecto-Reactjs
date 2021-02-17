const productos = ()=> {
return [
        { id: 1, name: "Zapatillas", price: 8000, stock: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/zapatillas.jpg", categoryId: 1 },
        { id: 2, name: "Maleta", price: 5000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/maleta.jpg", categoryId: 2 },
        { id: 3, name: "Camiseta", price: 2000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/camiseta.jpg", categoryId: 3 },
        { id: 4, name: "Gorra", price: 1000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/gorra.jpg", categoryId: 4 },
        { id: 5, name: "Buzo Capucha Negro", price: 10000, stock: 5, description: 'Buzo elaborado en algodón perchado, de suave textura, estilo moderno con capucha de cordón ajustable, amplio bolsillo delantero.', img: "/images/buzo.jpg", categoryId: 5 },
        { id: 6, name: "Zapatillas", price: 8000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/zapatillas.jpg", categoryId: 1 },
        { id: 7, name: "Maleta", price: 5000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/maleta.jpg", categoryId: 2 },
        { id: 8, name: "Camiseta", price: 2000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/camiseta.jpg", categoryId: 3 },
        { id: 9, name: "Gorra", price: 1000, stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint quae iure provident eveniet temporibus excepturi animi nam, aperiam autem accusamus iusto deserunt quam voluptas? Dicta ab consequuntur ea excepturi.', img: "/images/gorra.jpg", categoryId: 4 },
        { id: 10, name: "Buzo Capucha Azul", price: 10000, stock: 100, description: 'Buzo elaborado en algodón perchado, de suave textura, estilo moderno con capucha de cordón ajustable, amplio bolsillo delantero.', img: "/images/sudadera.jpg", categoryId: 5 }
    ]
};

const detalleProducto = ()=> {
    return [
        { 
            id: 1, 
            name: "Buzo Capucha Negro", 
            price: 50000, 
            description: "Buzo elaborado en algodón perchado, de suave textura, estilo moderno con capucha de cordón ajustable, amplio bolsillo delantero.",
            stock: 5, 
            img: "/images/buzo.jpg"
         }
    ]
};

const itemsPromise = new Promise((rej, res) => {
    setTimeout(() => {
      rej(productos());
    }, 2000);
  });
  
  export const itemPromise = new Promise((rej, res) => {
    setTimeout(() => {
      rej(detalleProducto());
    }, 2000); 
  });


export default itemsPromise;