const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userRegistrationSchema = new Schema({

    userId: {
        type : String, 
        required : true
    },
    
    fName: {
        type : String, 
        required : true
    },
    
    lName: {
        type : String, 
        required : true
    },
    
    nic: {
        type : String, 
        required : true
    },

    address : {
        type : String,
        required : true
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] 
    },
    userType: {
        type: String,
        required: [true, 'User type is required'],
        enum: ['Deed Manager','Legal Manager','Support Agent','Document Manager','Finance Manager','Appointment Management'], 
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] 
    },
    education : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    createDate : {
        type : String,
        required : true
    },

    userStatus : {
        type : String,
        required : true
    }
})

const userRegistration = mongoose.model("userRegistration", userRegistrationSchema);

module.exports = userRegistration;