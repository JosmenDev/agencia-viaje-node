// Dentro de la carpeta routes, coloco todo lo relacionadoa las rutas

// importamos express
import express from 'express';

// definir la ruta
// estamos usando la misma instancia de express, pero estamos usando su router
const router = express.Router();

// Pagina incio
router.get('/', (request, response) => {
    response.send('Inicio');
});

// Pagina nosotros
router.get('/nosotros', (request, response) => {
    response.send('Nosotros');
})

// Pagina contacto
router.get('/contacto', (request, response) => {
    response.send('Contacto')
})

// SE VAN A IR COLOCANDO ESTAS RUTAS DELROUTER DE EXPRESS Y DESPUES COLOCAREMOS EN LA APP DEL INDEX.JS PRINCIPAL

export default router;