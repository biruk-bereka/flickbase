const mongoose = require('mongoose');
require('dotenv').config();

const articleSchema = mongoose.Schema({
     title:{
        type:String,
        maxLength:100,
        required:[true, 'You need a title']
     },
     content: {
        type:String,
        required:[true, 'You need a some content']
     },
     excerpt:{
        type:String,
        required:[true, 'Please add an excerpt'],
        maxLength:500
     },
     score:{
        type:Number,
        min:0,
        max:100,
        required:true
     },
     director:{
        type:String,
        required:true
     },
     actors: {
        type: [String],
        required:true,
        validate:{
            validator: function(array) {
                return array.length >= 2
            },
            message: 'You must add at least three actors'
        }
     },
     status: {
        type:String,
        required:true,
        enum:['draft','public'],
        defualt: 'draft',
        index:true,
     },
     date:{
        type:Date,
        default: Date.now  
    },
})

const Article = mongoose.model('Article', articleSchema);
module.exports = { Article };