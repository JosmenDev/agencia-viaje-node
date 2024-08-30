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

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}