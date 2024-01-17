const mongoose = require("mongoose")
const {Schema} = mongoose

const goalSchema = new Schema ({
title: { // this is for title 
    type: String,
    required: true,
    unique: true // this means u can't have the same title
}, 

description: { // this is for description
type: String, 
required: true
}, 
progress: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
},
},
{timestamps: true} // this is for getting when it was created and updated
)

module.exports = mongoose.model("Goal", goalSchema)