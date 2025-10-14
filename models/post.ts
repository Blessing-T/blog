import mongoose from 'mongoose'


const { Schema } = mongoose

const postSchema = new Schema({

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
    ,
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    }
    ,
    slug: {
        type: String,
        required: false,
        unique: true,
        index: true,
    }

 },{timestamps:true})

// Simple slug generator and ensure uniqueness will be handled during creation/migration
postSchema.pre('save', function (next) {
    if (!this.slug && this.title) {
        const base = String(this.title)
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        this.slug = base;
    }
    next();
});

 export default mongoose.models.post || mongoose.model('post', postSchema)