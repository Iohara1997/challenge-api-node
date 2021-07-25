'use strict'
import * as dotenv from 'dotenv'
dotenv.config()

const {
    DB_URL
} = process.env

export default DB_URL