import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrls: {
        type: Array,
        required: true
    },
}, {
    timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);


export default Blog;