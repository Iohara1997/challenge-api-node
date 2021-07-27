import Video from "../models/video.model.js"

async function insertVideo(video)  {
    try {
        return await Video.create(video)
    } catch (error) {
        throw error
    }
}

async function getVideos()  {
    try {
        return await Video.findAll()
    } catch (error) {
        throw error
    }
}

async function getVideo(id)  {
    try {
        return await Video.findByPk(id, { raw: true})
    } catch (error) {
        throw error
    }
}

async function deleteVideo(id)  {
    try {
            await Video.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        throw error
    }
}

async function updateVideo(video)  {
    try {
        await Video.update(video, {
            where:{
                id: video.id
            }
        })
    } catch (error) {
        throw error
    }
}

export default {
    insertVideo,
    getVideos,
    getVideo,
    deleteVideo,
    updateVideo
}