const mongoose = require('mongoose')
const { Schema } = mongoose;


const taskSchema = new Schema({
   
    userId: {
        type: String,
        required: true

    },  taskname : {

        type:String

    },
    description : {
        type:String
    },
    time : {
       
        type:Number
    },
    created : {
       
        type:Date
    },
    started : {
        type :Date
    },
    finished :{
        type : Date
    },
    totalTime :{
        type : Number
    },
    status:{
        type:String
    }
})

module.exports =  mongoose.model('task', taskSchema)
