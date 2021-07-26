'use strict'
import * as dotenv from 'dotenv'
dotenv.config()

const {
    DB_URL,
    MONGO_URI
} = process.env

export {
    DB_URL as connectionString,
    MONGO_URI as mongoConnString
}