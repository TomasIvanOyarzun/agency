import Sequelize from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const {DB_NAME , DB_USER, DB_HOST, DB_PASS  }= process.env

export const db = new Sequelize(DB_NAME, DB_USER,DB_PASS,{
    host : DB_HOST,
    port : '3306',
    dialect : 'mysql',
    define : {
          timestamps : false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorAliases: false
})

