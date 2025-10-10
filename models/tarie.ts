import mongoose from 'mongoose'


const { Schema } = mongoose

const tarieSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,

    },

    imageurl:{
        type: String,
        required: true
    }

 },{timestamps:true})

 export default mongoose.models.tarie || mongoose.model('tarie', tarieSchema)