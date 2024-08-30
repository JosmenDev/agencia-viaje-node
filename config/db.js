import Sequelize from 'sequelize'

// Importar dependencia del dotenv para las variables de entorno
import dotenv from 'dotenv'
// Llamar a las variables de entorno
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DV_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
// 1- el primer valor es la bd
// 2- nombre de usuario
// 3- password
// 4- serie de configruaciones