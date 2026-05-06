const planetas = require('./planetas');

planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Tipo: ${planeta.tipo}`);
  console.log('---');
});

console.log(`Total de planetas registrados: ${planetas.length}`);