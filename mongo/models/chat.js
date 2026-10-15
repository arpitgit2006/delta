const mongoose = require('mongoose');
const chatschema = new mongoose.Schema({
    from:{
        type: String,
        required:true
    },
    to:{
        type: String,
        required:true
    },
    message:{
        type: String,
        maxlength:50
    },
    created_at:{
        type: Date,
        default:new Date()
    }
});
const chat=mongoose.model("chat",chatschema);
module.exports=chat;