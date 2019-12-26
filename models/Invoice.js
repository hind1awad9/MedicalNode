const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    Invoices: 
        [
            {
                product: {
                _id:{
                    type: mongoose.Schema.Types.ObjectId,
                // ref: 'product',
                required:true,
            },
                name:{
                    type: String,
                    required:true,
                },
                code:{
                    type: String,
                    required:true,
                },
            },
            // productPrice: {
            //     type: Number,
            //     default:0
            // },
            productUnit: {
                type: String,
                required: true,
                default:'peice'
            },
            quantity: {
                type: Number,
                required: true,
                default:0
            },
            taxVat: {
                type: Number,
                required: true,
                default: 0
            },
            totalPrice: {
                type: Number,
                required: true,
                default:0
            }
        }
        ],
    invoiceTotalPrice: {
        type: Number,
        required: true,
        default:0
    },
    createdAt: {
        type: Date,
        required: true,
        default:Date.now
    },
    updatedAt: {
        type: Date
    },
})

invoiceSchema.pre('save', (next)=>{
    this.updatedAt = Date.now();
    next()
})
invoiceSchema.methods.setTotalPrice = function (totalPrice){
    this.invoiceTotalPrice = totalPrice;
}
module.exports = mongoose.model('invoice', invoiceSchema);