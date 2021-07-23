import VideoRepository from '../repositories/video.repository.js'

async function getVideos(){
    return await VideoRepository.getVideos()
}
async function getVideo(){
    return await VideoRepository.getVideo()
}
async function createVideo(){
    return await VideoRepository.insertVideo()
}
async function updateVideo(){
    return await VideoRepository.updateVideo()
}
async function deleteVideo(){
    return await VideosRepository.deleteVideo()
}

export {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo
}