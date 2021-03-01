'use strict';
var mongoose= require('mongoose');
var Schema= mongoose.Schema

var CategorySchema= new Schema({
    name:{
        type: String,
        required: 'Kindly enter the category name'
    },
    description:{
        type: String,
        required: 'Kindly enter the category description'
    },
    picture:{
        type: Buffer,
        contentType: String
    },
    created:{
        type:Date,
        default: Date.now
    }

}, {strict: false});

var CommentSchema = new Schema({
    title:{
        type: String,
        required: 'Kindly enter the comment title'
    },
    author:{
        type: String,
        required: 'Kindly enter the comment author'
    },
    commentText:{
        type: String,
        required: 'Kindly enter your comment'
    },
    stars:{
        type: Number,
        min: 0,
        max:5,
        required: 'Kindly enter the stars rate'

    },
    created:{
        type: Date,
        default: Date.now
    }


}, {strict = false});

var ItemSchema= new Schema ({
    sku: {
        type: String
    },
    deleted:{
        type:Boolean,
        default: false
    },
    name:{
        type: String,
        required: 'Kindly enter the item name'
    },
    description:{
        type: String,
        required: 'Kindly enter the item description'
    },
    price:{
        type: Number,
        required: 'Kindly enter the item price',
        min: 0
    },
    picture:{
        type: Buffer,
        contentType: String
    },
    averageStars:{
        type: Number,
        min: 0, max: 5
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    comments: [CommentSchema],
    created:{
        type: Date,
        default: Date.now
    }

}, {strict: false});

module.exports = mongoose.model('Items', ItemSchema);
module.exports = mongoose.model('Categories', CategorySchema);
module.exports = mongoose.model('Comments', CommentSchema);