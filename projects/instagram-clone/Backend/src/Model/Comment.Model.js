const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true],
        ref: 'users',
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'posts'
    },
    text: {
        type: String,
        require: [true, "Comment text is required"],
    }
}, {
    timestamps: true 
});

const commentModel = mongoose.model('comments', commentSchema);

module.exports = commentModel;