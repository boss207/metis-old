const { Schema, model, trusted } = require('mongoose');


const guildSchema = new Schema({
    _id: Schema.Types.ObjectId,
    guildId: { 
        type: String, 
        required: true, 
        unique: true
    },
    guildName: { 
        type: String,
        required: true,
    },
    ownerId: { 
        type: String,
        required: true
    }, 
    owner: { 
        type: String,
        required: true
    },
    prefix: {
        type: String,
        default: '!'
    }, 
    messageLogChannel: {
        type: String,
        default: ''
    }, 
    modLogChannel: { 
        type: String,
        default: ''
    }, 
    serverLogChannel: {
        type: String,
        default: ''
    }, 
    otherLogChannel: {
        type: String,
        default: ''
    }, 
    welcomeChannel: {
        type: String,
        default: ''
    }, 
    botCommander: {
        type: Array, 
        default: []
    }, 
    modRoles: {
        type: Array, 
        default: []
    }, 
    tags: [{
        name: String,
        content: String,
        createdBy: String,
        timestamp: String
    }],
    warnings: [{
         _id: Schema.Types.ObjectId,
         case: String,
         userId: String,
         username: String,
         moderatorID: String,
         moderatorUsername: String,
         reason: String,
         time: String
    }], 
    moderations: [{
        _id: Schema.Types.ObjectId,
        case: String,
        type: String,
        userId: String,
        username: String,
        moderatorID: String,
        moderatorUsername: String,
        duration: String,
        reason: String,
        time: String
    }]
})

module.exports = model('Guild', guildSchema, 'guilds')