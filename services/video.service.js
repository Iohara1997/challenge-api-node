import VideoRepository from '../repositories/video.repository.js'
import VideoInfoRepository from '../repositories/videoInfo.repository.js'
import axios from 'axios'

async function getVideos(){
    return await VideoRepository.getVideos()
}
async function getVideo(id){
    const video = await VideoRepository.getVideo(id)
    video.info = await VideoInfoRepository.getVideoInfo(parseInt(id))
    return video
}
async function getAllVideoInfo(){
    return await VideoInfoRepository.getAllVideoInfo()
}
async function getVideoInfo(info){
    return await VideoInfoRepository.getVideoInfo(info)
}
async function createVideo(video){
    return await VideoRepository.insertVideo(video)
}
async function updateVideo(video){
    return await VideoRepository.updateVideo(video)
}
async function deleteVideo(id){
    await VideoInfoRepository.deleteVideoInfo(parseInt(id))
    return await VideoRepository.deleteVideo(id)
}
async function createVideoInfo(info) {
    return await VideoInfoRepository.insertVideoInfo(info)
}
async function updateVideoInfo(info) {
    return await VideoInfoRepository.updateVideoInfo(info)
}
// utilizando axios para enviar uma requisição para o server Django
async function calculatorSum(sum) {
    try {
        return await axios.post('http://localhost:8000/sum/numbers/', {
            firstNumber: sum.firstNumber,
            secondNumber: sum.secondNumber
        })
    }catch (error) {
        console.log(error)
    }
}

export default {
    getVideos,
    getVideo,
    createVideo,
    updateVideo,
    deleteVideo,
    createVideoInfo,
    updateVideoInfo,
    getAllVideoInfo,
    getVideoInfo,
    calculatorSum
}