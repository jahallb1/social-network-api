const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reactions');
const moment = require('moment');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        require: true,
        min: 1,
        max: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        require: true
    },
    reactions: [ReactionSchema]

    },
    {
        toJSON:{ getters: true},
        id: false
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
});

const Thought = model('Thought', ThoughtSchema); 
module.exports = Thought;


