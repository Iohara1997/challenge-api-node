import express from 'express'
import router from './routes/videos.routes.js'

const app = express()
const port = 3000

app.use('/videos', router)
app.listen(port, () => {
    console.log("Server is running.")
})