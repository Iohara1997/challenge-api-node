import Router from 'express'
import VideoController from '../controllers/video.controller.js'

const router = Router()

router.get('/', VideoController.getVideos)
router.get('/:id', VideoController.getVideo)
router.post('/', VideoController.createVideo)
router.put('/', VideoController.updateVideo)
router.delete('/:id', VideoController.deleteVideo)

export default router