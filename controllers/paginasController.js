import { Viaje } from "../models/Viaje.js";

const paginaInicio = async (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request, response) => {
    // Consultar BD
    const viajes = await Viaje.findAll();
    console.log(viajes);
    response.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = (request, response) => {
    response.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (request, response) => {
    // response.render('viaje')
    // console.log(request.params.viaje);
    // viaje es el comodin que se definio en la ruta
    const { slug } = request.params;
    try {
        const viaje = await Viaje.findOne({
            where: { 
                slug 
            }
        });
        response.render('viaje', {
            pagina: 'Información viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}