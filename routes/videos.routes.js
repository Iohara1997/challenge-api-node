import Router from 'express'
import VideoController from '../controllers/video.controller.js'

const router = Router()

router.get('/info', VideoController.getAllVideoInfo)
router.get('/', VideoController.getVideos)
router.get('/:id', VideoController.getVideo)
router.post('/info', VideoController.createVideoInfo)
router.post('/', VideoController.createVideo)
router.put('/', VideoController.updateVideo)
router.put('/info', VideoController.updateVideoInfo)
router.delete('/:id', VideoController.deleteVideo)
router.post('/sum', VideoController.calculatorSum) //estabelecendo rota para server Django

export default router