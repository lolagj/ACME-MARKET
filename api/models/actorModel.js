'use strict';
var mongoose = require('mongoose');
var Schema= mongoose.Schema

var actorSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the actor name'
    },
    surname: {
        type: String,
        required: 'Kindly enter the actor surname'
    },
    email: {
        type: String,
        required: 'Kindly enter the actor email'
    },
    password: {
        type: String,
        required: 'Kindly enter the actor password'
    },
    address: {
        type: String,
        required: 'Kindly enter the actor address'
    },
    preferedLanguage: {
        type: String,
        required: 'Kindly enter the actor prefered Language',
        default: 'en'
    },
    phone:{
        type: String,
        required: 'Kindly enter the actor phone',
    },
    photo:{
        type: Buffer,
        contentType: String
    },
    role: {
        type: String,
        required: 'Kindly enter the user role(s)',
        enum: ['CUSTOMER', 'CLERK', 'ADMINISTRATOR']
    }, 
    validated:{
        type: Boolean,
        default: false
    },
    created:{
        type: Date,
        default: Date.now
    }

    
}, {stric: false})


module.exports = mongoose.model('Actors', actorSchema);
