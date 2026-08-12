const http = require('http')

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
}

const req = http.request(options, (res) => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    console.log('Respuesta del servidor:', data)
    if (data === 'Hola Mundo') {
      console.log('Prueba exitosa: El servidor responde correctamente')
    } else {
      console.log('Prueba fallida: La respuesta no es la esperada')
      process.exit(1)
    }
    process.exit(0)
  })
})

req.on('error', (err) => {
  console.error('Error al hacer la peticion:', err.message)
  process.exit(1)
})

req.end()
