// Dentro de la carpeta routes, coloco todo lo relacionadoa las rutas

// importamos express
import express from 'express';

// definir la ruta
// estamos usando la misma instancia de express, pero estamos usando su router
const router = express.Router();

// Pagina incio
router.get('/', (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    });
});

// Pagina nosotros
router.get('/nosotros', (request, response) => {
    const viajes = 'Cambiando el texto';

    response.render('nosotros', {
        viajes,
        pagina: 'Nosotros'
    });
    // lo que hace ese render es buscar el archivo nosotros dentro del proyecto y lo muestra
    // entre las llaves, puedo colocar toda la informacion que quieres mandar hacia la vista 'nosotros'
})

// Pagina viajes
router.get('/viajes', (request, response) =>{
    response.render('viajes', {
        pagina: 'Viajes'
    })
});

// Pagina testimoniales
router.get('/testimoniales', (request, response) => {
    response.render('testimoniales', {
        pagina: 'Testimoniales'
    })
});



// Pagina contacto
// router.get('/contacto', (request, response) => {
//     response.send('Contacto')
// })

// SE VAN A IR COLOCANDO ESTAS RUTAS DELROUTER DE EXPRESS Y DESPUES COLOCAREMOS EN LA APP DEL INDEX.JS PRINCIPAL

export default router;