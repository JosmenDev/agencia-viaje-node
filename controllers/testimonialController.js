const guardarTestimonial = (request, response) => {
    // Validar ...
    const { nombre, correo, mensaje } = request.body;
    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre está vacío'});
    }
    
    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo está vacío'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje está vacío'});
    }

    if (errores.length > 0) {
        // nos dice si es que hay almenos un error
        // mostrar la vista con errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
    }
}

export {
    guardarTestimonial
}