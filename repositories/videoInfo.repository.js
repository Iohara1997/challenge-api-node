import { getClient } from '../config/mongo.db.js'

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

async function updateVideoInfo(videoInfo) {
    const client = getClient()
    try {
        await client.connect()
        await client.db('video-platform').collection('videoInfo').updateOne(
            {id: videoInfo.id},
            {$set: {...videoInfo}}
        )
    } catch (error) {
        throw err
    } finally {
        await client.close()
    }
}

async function getAllVideoInfo() {
    const client = getClient()
    try {
        await client.connect()
        return await client.db('video-platform').collection('videoInfo').find({}).toArray()
    } catch (error) {
        throw error
    } finally {
        await client.close()
    }
}

async function getVideoInfo(id) {
    const client = getClient()
    try {
        await client.connect()
        return await client.db('video-platform').collection('videoInfo').findOne({id})
    } catch (error) {
        throw error
    } finally {
        await client.close()
    }
}

async function deleteVideoInfo(id) {
    const client = getClient()
    try {
        await client.connect()
        return await client.db('video-platform').collection('videoInfo').deleteOne({id})
    } catch (error) {
        throw error
    } finally {
        await client.close()
    }
}

export default { 
    insertVideoInfo,
    updateVideoInfo,
    getAllVideoInfo,
    getVideoInfo,
    deleteVideoInfo
}