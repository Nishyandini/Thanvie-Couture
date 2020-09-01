const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            trim: true,
            required: true,
            unique: true
        },
        email : {
            type:String,
            trim : true,
            required : true
        },
        profileImg:{
            type: String,
        },
        phone_number:{
            type : Number,
            trim: true,
            max: 9999999999,
            min : 1000000000
        },
        is_phone_number_verified : {
            type: Boolean,
            default : false
        },
        address: {
            type : String,
            trim: true
        },
        wish_list_items : {
            type: Array,
            default : []
        },
        cart_items : {
            type: Array,
            default : []
        }
    }
)

module.exports = mongoose.model('User', userSchema);

