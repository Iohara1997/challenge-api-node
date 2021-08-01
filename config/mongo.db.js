import mongoose from 'mongoose'
import { mongoConnString } from '../config.js'

async function connect() {
    const uri = mongoConnString
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

export { connect }