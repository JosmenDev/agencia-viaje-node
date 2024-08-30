const paginaInicio = (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = (request, response) => {
    response.render('viajes', {
        pagina: 'Viajes'
    })
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