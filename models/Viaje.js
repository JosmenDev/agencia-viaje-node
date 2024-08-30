import Sequelize from "sequelize";
import db from "../config/db.js";
// importo mi conexion

export const Viaje = db.define('viajes', {
    // defino el nombre de mi tabla y sus campos
    // nombre: viajes
    // a continuacion sus campso
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.INTEGER
    },
    slug: {
        type: Sequelize.STRING
    }
});


