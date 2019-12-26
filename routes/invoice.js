const express = require('express');

const Invoice = require('../models/Invoice')
const Product = require('../models/Product')

const router = express.Router();


router.get('/', async (req, res) => {
    try {

        const invoices = await Invoice.find().populate('Invoices.product')
        //.populate('Invoices.product');

        if (invoices.length < 1)
            return res.json({ success: false, message: 'No Invoices found' });

        res.json({ success: true, message: invoices });

    } catch (err) {
        return res.json({ success: false, message: err });
    }
})

router.get('/details/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.json({ success: false, message: 'Invoice id is required.' })

        const invoice = await Invoice.findById(id).populate('Invoices.product')
        //.populate('Invoices.product');

        if (!invoice)
            return res.json({ success: false, message: 'Invalid invoice id' });

        res.json({ success: true, message: invoice });

    } catch (err) {
        return res.json({ success: false, message: err });
    }
})

router.post('/add', async (req, res) => {
    try {
        const productInvoice = req.body.productInvoice;
        let invoiceTotalPrice = 0;

        const forLoop = async () => {
            console.log('Start')
            let err = false
            let productPrice;
            let productObject = {}

            for (let i = 0; i < productInvoice.length; i++) {
                const product = await Product.findOne({ _id: productInvoice[i].product })
                    .populate('Invoices.product');

                if (product.inStock.peice < 1 && product.inStock.peice > productInvoice[i].quantity) {
                    err = true
                    return console.log('error')
                }
                productObject = {
                    _id: product._id,
                    name: product.name,
                    code: product.code
                };

                productInvoice[i].product = productObject;
                productPrice = productInvoice[i].quantity * product.sellingPrice;
                productInvoice[i].totalPrice = ((productPrice * productInvoice[i].taxVat) / 100) + productPrice;
                invoiceTotalPrice += productInvoice[i].totalPrice
                productInvoice[i].productUnit = 'peice'


                product.inStock.peice = product.inStock.peice - productInvoice[i].quantity;
                await product.save();
            }

            console.log('End')
        }

        await forLoop()
        if (err == true) {
            console.log('err')
            return res.json({success:false, message: 'Error occured due to product insufficient. Please review your inventory'})
        }

        const newInvoice = new Invoice({})
        newInvoice.Invoices = productInvoice
        newInvoice.invoiceTotalPrice = invoiceTotalPrice
        await newInvoice.save(err => {
            if (err)
                console.log('err', err)
        })
        console.log('saving...')


        res.json({ success: true, message: newInvoice })

    } catch (err) {
        return res.json({ success: false, message: err });
    }
})

router.put('/edit/:id', async (req, res) => {
    try {


    } catch (err) {
        return res.json({ success: false, message: err });
    }
})

router.delete('/remove/:id', async (req, res) => {
    try {


    } catch (err) {
        return res.json({ success: false, message: err });
    }
})


module.exports = router;
