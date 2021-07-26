import Sequelize from 'sequelize'
import { connectionString } from '../config.js';


const sequelize = new Sequelize(
    connectionString,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
) 

export default sequelize