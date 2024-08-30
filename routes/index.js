// Dentro de la carpeta routes, coloco todo lo relacionadoa las rutas

// importamos express
import express from 'express';

// definir la ruta
// estamos usando la misma instancia de express, pero estamos usando su router
const router = express.Router();

// importamos los controladores
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales } from '../controllers/paginasController.js';

// Pagina incio
router.get('/', paginaInicio);

// Pagina nosotros
router.get('/nosotros', paginaNosotros);
    // lo que hace ese render es buscar el archivo nosotros dentro del proyecto y lo muestra
    // entre las llaves, puedo colocar toda la informacion que quieres mandar hacia la vista 'nosotros'

// Pagina viajes
router.get('/viajes', paginaViajes);

// Pagina testimoniales
router.get('/testimoniales', paginaTestimoniales);



// Pagina contacto
// router.get('/contacto', (request, response) => {
//     response.send('Contacto')
// })

// SE VAN A IR COLOCANDO ESTAS RUTAS DELROUTER DE EXPRESS Y DESPUES COLOCAREMOS EN LA APP DEL INDEX.JS PRINCIPAL

export default router;