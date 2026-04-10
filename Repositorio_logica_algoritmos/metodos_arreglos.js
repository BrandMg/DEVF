const productos = [
  { nombre: "Playera", precio: 210, categoria: "Ropa" },
  { nombre: "Impresora", precio: 4700, categoria: "Electrónica" },
  { nombre: "Cuaderno", precio: 27, categoria: "Educación" },
  { nombre: "Botas", precio: 750, categoria: "Calzado" },
  { nombre: "Camara", precio: 600, categoria: "Electrónica" },
];

// Filtrar productos menores a $100
const baratos = productos.filter(p => p.precio < 100);
console.log("Productos menores a $100:", baratos);

// Ordenar alfabéticamente por nombre
const ordenados = baratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados:", ordenados);

// Obtener solo los nombres
const nombres = ordenados.map(p => p.nombre);
console.log("Nombres de productos:", nombres);

// Usar reduce para obtener el precio total de los productos filtrados (Opcional)
const total = baratos.reduce((acc, p) => acc + p.precio, 0);
console.log("Precio total de productos < $100:", total);