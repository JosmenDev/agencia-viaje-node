import Sequelize from 'sequelize'

// Importar dependencia del dotenv para las variables de entorno
import dotenv from 'dotenv'
// Llamar a las variables de entorno
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
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