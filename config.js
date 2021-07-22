'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    DB_URL
} = process.env;

export {
    DB_URL
}