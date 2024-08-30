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

    console.log(errores);
}

export {
    guardarTestimonial
}