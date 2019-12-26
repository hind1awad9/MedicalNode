const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    originalPrice: {
        type:Number,
        required:true
    },
    sellingPrice: {
        type:Number,
        required:true
    },
    inStock: {
        peice:{
            type:Number,
            default:0,
            // priceForEach:{
            //     type:Number,
            //     required:true
            // }
        },
        box:{
            type:Number,
            default:0,
            // priceForEach:{
            //     type:Number,
            //     required:true
            // }
        },
        packet:{
            type:Number,
            default:0,
            // priceForEach:{
            //     type:Number,
            //     required:true
            // }
        }
    },
    code: {
        type:String,
        unique:true,
        required:true
    },
    createdAt: {
        type:Date,
        required:true,
        default: Date.now
    },
    updatedAt: {
        type:Date
        }
    
})
productSchema.pre('save', next =>{
    this.updatedAt = Date.now()
    next()
})
module.exports = mongoose.model('product', productSchema);
