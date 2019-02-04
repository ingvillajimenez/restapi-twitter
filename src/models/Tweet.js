const ODM = require('mongoose');

const Schema = new ODM.Schema({
    _id: ODM.Schema.Types.ObjectId,
    description: {
        type: String,
        required: true
    },
    user: {
        type: ODM.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: ODM.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

module.exports = ODM.model('Tweet', Schema);