
const mongoose = require("mongoose")

const userSchema = ({
    name : String,
    email : String,
    phone : String,
    label : String,
    booked_slots : {
        type: Array,
        default:[]
    },
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}