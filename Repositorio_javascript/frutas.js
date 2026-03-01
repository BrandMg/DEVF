// Arreglo de frutas

let frutas = ["manzana", "banana", "manzana", "naranja", "banana", "manzana", "pera"];

let conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Cantidad de cada fruta:");
for (let tipo in conteoFrutas) {
    console.log(tipo + ": " + conteoFrutas[tipo]);
}

// Uso de while (Si al ejecutarse sale doble en el ciclo while es porque esta considerando las del ciclo for)

let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }

    i++;
}

console.log("Cantidad de cada fruta:");
for (let tipo in conteoFrutas) {
    console.log(tipo + ": " + conteoFrutas[tipo]);
}
