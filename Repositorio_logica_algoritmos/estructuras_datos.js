// Practica: Estructura de datos

let listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`Producto "${producto}" agregado.`);
    } else {
        console.log(`El producto "${producto}" ya está en la lista.`);
    }
};

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);
    
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`Producto "${producto}" eliminado.`);
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista.`);
    }
};

const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    }
};

// Ejemplos
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Pan"); 

mostrarLista();

eliminarProducto("Pan");

mostrarLista();