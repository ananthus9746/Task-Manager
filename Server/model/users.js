const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        typeof:String,
    },
    password:{
        typeof:String,
    }
})

module.exports = mongoose.model("users", UserSchema);
