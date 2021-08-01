import VideoInfoSchema from '../schemas/videoInfo.schema.js'
import { connect } from '../config/mongo.db.js'

async function insertVideoInfo(videoInfo) {
    try {
       const mongoose = await connect()
       const VideoInfo = mongoose.model('VideoInfo', VideoInfoSchema)
       videoInfo = new VideoInfo(videoInfo)
       await videoInfo.save()
    } catch (error) {
        throw error
    }
}
async function updateVideoInfo(videoInfo) {
    try {
        const mongoose = await connect()
        const VideoInfo = mongoose.model('VideoInfo', VideoInfoSchema)
        await VideoInfo.findOneAndUpdate({ id: videoInfo.id }, videoInfo)
    } catch (error) {
         throw error
    }
}
async function getAllVideoInfo() {
    try {
        const mongoose = await connect()
        const VideoInfo = mongoose.model('VideoInfo', VideoInfoSchema)
        const query = VideoInfo.find({})
        return await query.exec()
    } catch (error) {
        throw error
    }
}
async function getVideoInfo(id) {
    try {
        const mongoose = await connect()
        const VideoInfo = mongoose.model('VideoInfo', VideoInfoSchema)
        const query = VideoInfo.findOne({ id })
        return await query.exec()
    } catch (error) {
        throw error
    }
}
async function deleteVideoInfo(id) {
    try {
        const mongoose = await connect()
        const VideoInfo = mongoose.model('VideoInfo', VideoInfoSchema)
        await VideoInfo.deleteOne({ id })
    } catch (error) {
        throw error
    }
}

export default { 
    insertVideoInfo,
    updateVideoInfo,
    getAllVideoInfo,
    getVideoInfo,
    deleteVideoInfo
}