const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        mainImageUrl : {
            type : String,
            required : true
        },
        subImagesUrl : {
            type : Array,
            default : [],
        },
        category : {
            type : String,
            trim: true,
            required: true
        },
        price : {
            type : String,
            trim: true,
            required: true
        },
        description : {
            type : String,
            trim: true
        }
    }
)

module.exports = mongoose.model('Product', productSchema);
