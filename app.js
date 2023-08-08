// const evenOrOdd = require('num-is-even-or-odd')
// const http=require('http')
const express=require('express')

const app=express()

// definir una ruta de ejemplo
// app.get(direccion, requerimiento y peticion)
app.get('/',(req,res)=>{
 res.send('hola mundo')
})

app.get('/producto',(req,res)=>{
 res.send('hola mundo')
})

app.get('/contacto',(req,res)=>{
 res.send('hola mundo')
})
// localhost
// get => traer u obtener
app.listen(4001)

console.log('servidor ejecutandose')
// const servidor = http.createServer((pedido,respuesta)=>{
//  respuesta.writeHead(200,{'Content-type':'text/html'})
//  respuesta.write('<h1>hola<h1/>')
//  respuesta.end()
// })

// servidor.listen(8888)
// console.log('servidor ejecutandose')
// console.log(evenOrOdd(25))
// console.log(evenOrOdd(22))
// console.log('este numero es de tipo', evenOrOdd(87))
// console.log('buenas noches')
// console.log('hola mundo')
// const saludo = (nombre) => {
//    console.log(`hola buenos dias ${nombre}`)
//  } 

//  saludo('manuel')