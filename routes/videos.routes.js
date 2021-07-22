import Router from 'express'
import VideosController from '../controllers/video.controller'

const router = Router()

router.get('/', VideosController.getVideos)
router.get('/:id', Videos.Controller.getVideo)
router.post('/', VideosController.createVideo)
router.put('/', VideosController.updateVideo)
router.delete('/:id', VideosController.deleteVideo)

export default router