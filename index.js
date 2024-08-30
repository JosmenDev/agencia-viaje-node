// Creacion del servidor express
// express es similar a apache en php

// Este codigo quiere decir que del paquete de express que hemos instalado, vamos a extraer express
// const express = require ('express');
// LA SINTAXIS NO SOPORTA EL REQUIRE
// EXPRESS Y NODE LOS ADOPTARON ESTA SINTAXIS
// HASTA HACE POCO, TIENE SOPORTE NATIVO DE JS.
import express, { response } from 'express';

// importamos el router
import router from './routes/index.js';

// app contiene la funcion para ejecutar express
const app = express();

// Definir puerto
// process.env.port -> variables de entorno, debido a que de forma local o en un servidor, las variables de entorno son distintas y con node ya la tenemos automaticas
const port = process.env.PORT || 4000;
// como está de forma local va a funcionar el 4000, pero si estas en deployment entonces, va a funcionar tu variable de entorno definida.

// habilitar pug
app.set('view engine', 'pug');
// view engine soporta express

// Crear el propio middleware, obtener el año actual
app.use( (request, response, next) => {
    const year = new Date();
    response.locals.actualYear = year.getFullYear();
    return next();
    // next te permite ir al siguiente middleware
})

// Definir la carpeta publica
app.use(express.static('public'));
// Le digo que quiero usar la carpeta estatica public
// de esta forma ya tiene acceso a esos archivos

// agregar router
app.use('/', router);
// use soporta get, post, put, delete


// BAsicamente,cada linea que se ha ido ejecutando es una linea de middleware en express, cada una es una linea de midleware


// app.get('/', (request, response) => {
//     // get es enviar una peticion a la url cuando visito la pagina
//     // / es decir a a pagina principal
//     // request -> lo que enviamos (Ejm: si lleno un formulario, aqui iria lo que lleno)
//     // response -> lo que express envia (Ejm: mandaste los datos del formulario correctamente)
//     // response.send; estaria creando mi propia resputa
//     // .send en un metodo para mostrar algo en pantalla
//     // .json: emite una respyesta json
//     // response.send('Hola Mundo');
//     // response.json({
//     //     id: 1
//     // })
//     // res.render(), el mas comun; se utiliza para mostrar una vista
//     // response.render()
//     response.send('Inicio');
// });

// // Creando otras pagina o url
// app.get('/nosotros', (request, response) => {
//     response.send('Nosotros');
// })

// // Pagina contacto
// app.get('/contacto', (request, response) => {
//     response.send('Contacto')
// })



app.listen( port, () => {
    // app.listen() -> nos dice que arranque el servidor con listen, le paso el puerto y un callback
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})