import VideoService from '../services/video.service.js'

async function getVideos(req, res,  next){
    try {
        const videos = await VideoService.getVideos()
        res.status(200).send(videos)
    } catch (error) {
        next (error)
    } 
}

async function getVideo(req, res, next){
    try {
        const id = req.params.id
        const video = await VideoService.getVideo(id)
        res.status(200).send(video)
    } catch (error) {
        next(error)
    }
}

async function createVideo(req, res, next){
    try {
        const video = req.body
        if(!video.title || !video.description || !video.url){
            throw new Error('Please, add all fields!')
        }
        await VideoService.createVideo(video)
        res.status(200).send('Successfully created!')
    } catch (error) {
        next(error)
    }
}
async function updateVideo(req, res, next){
    try {
        const video = req.body
        if(!video.id || !video.title || !video.description || !video.url){
            throw new Error('Please, add all fields!')
        }
        await VideoService.updateVideo(video)
        res.status(200).send('Successfully updated!')
    } catch (error) {
        next(error)
    }
}

async function deleteVideo(req, res, next){
    try {
        const id = req.params.id
        await VideoService.deleteVideo(id)
        res.status(200).send('Successfully deleted!')
    } catch (error) {
        next(error)
    }
}
async function createVideoInfo(req, res, next){
    try {
        const videoInfo = req.body
        if (!videoInfo.id) {
            throw new Error (`Video Id is a required field.`)
        }
        await VideoService.createVideoInfo(videoInfo)
        res.status(200).send(`Successfully created!`)
    } catch (error) {
        next(error)
    }
}

export default {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo,
    createVideoInfo
}