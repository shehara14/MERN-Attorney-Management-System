const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lawfirmSchema = new Schema({
    lawFirmId : {
        type : String, 
        required : true
    },
   
    name : {
        type : String, 
        required : true
    },
    
    address : {
        type : String,
        required : true
    },

    contactNumber : {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'] 
    },
    
    registrationNo : {
        type : String,
        required : true
    },

    lawyerId : {
        type : String, 
        required : true
    },

})


const lawfirm = mongoose.model("lawfirm", lawfirmSchema);

module.exports = lawfirm;