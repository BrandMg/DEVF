let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro agregado correctamente");
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has agregado libros.");
    } else {
        console.log("Libros leídos:");
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}

// Pruebas
agregarLibro("Cien años de soledad");
agregarLibro("El Principito");
agregarLibro("1984");

mostrarLibrosLeidos();