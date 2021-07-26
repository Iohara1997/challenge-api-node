import mongodb from 'mongodb'
import { mongoConnString } from '../config.js'

function getClient() {
    const uri = mongoConnString
    return new mongodb.MongoClient(uri)
}

export { getClient }