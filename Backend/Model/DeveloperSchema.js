const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const DevSchema = new Schema({
    DevName: {
        type: String,
        required: true,
    },
    DevLog: {
        type:String,
        required:true
    },
    socialmediaAccount: [
        {
            type:{
                type:String,
            },
            URL: {
                type: String,
            },
        }
    ],
    Overview: [
        {
            Title: {
              type: String,
              
            },
            Description: {
              type: String,
              
            }
        },
    ],
    rating: {
        type: Number,
        required: true
    }
});


const developers =  mongoose.model("developers", DevSchema);

module.exports= developers