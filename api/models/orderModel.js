'use strict';

var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var OrderedItemSchema = new Schema({
    sku:{
        type: String
    },
    name:{
        type: String,
        required: 'Kindly enter ordered item name'
    },
    quantity:{
        type: Number,
        min:1,
        required: 'Kindly enter ordered quantity'
    }, 
    price:{
        type: Number,
        min: 0,
        required: 'Kindly enter the ordered item price'
    },
    served: {
        type: Boolean,
        default: false
    }
}, { strict: false });

var OrderSchema = new Schema({
    ticker:{
        type: String
    },
    consumerName:{
        type: String,
        required: 'Kindly enter consumer Name'
    },
    placementMoment:{
        type: Date,
        default: Date.now
    },
    deliveryAddress:{
        type: String,
        required: 'Kindly enter the delivery address'
    },
    comments:[String],
    total:{
        type:Number,
        min:0
    },
    deliveryMoment:{
        type: Date
    },
    cancellationMoment:{
        type:Date
    },
    customer:{
        type: Schema.Types.ObjectId,
        required: 'consumer id required'
    },
    clerk:{
        type: Schema.Types.ObjectId
    },
    orderedItems: [OrderedItemSchema]

}, { strict: false });

module.exports = mongoose.model('Orders', OrderSchema);