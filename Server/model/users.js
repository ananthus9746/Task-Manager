const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        require : true,
        trim: true,
    },
    password:{
        type : String,
        require : true,
        trim: true,
    }
})

module.exports = mongoose.model("users", UserSchema);
