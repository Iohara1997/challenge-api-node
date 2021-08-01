import mongoose from 'mongoose'

const videoInfoSchema = new mongoose.Schema(
    {
        id: Number,
        category: String,
        likes: Number,
        unlikes: Number,
        comments: String
    }, { collection: "videoInfo", versionKey: false }
)

export default videoInfoSchema