import { getClient } from './mongo.db.js'

async function insertVideoInfo(videoInfo) {
    const client = getClient()
    try {
        await client.connect()
        await client.db('video-platform').collection('videoInfo').insertOne(videoInfo)
    } catch (error) {
        throw error
    } finally {
        await client.close()
    }
}

export default { insertVideoInfo }