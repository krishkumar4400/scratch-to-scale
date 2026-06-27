import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        require: ["true", "image url is required"],
        trim: true,
    },

    publicId: {
        type: String,
        require: true 
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true 
    },
}, {
    timestamps: true
});

const Image = mongoose.model('image', imageSchema);

export default Image;