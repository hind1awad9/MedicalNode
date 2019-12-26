const express = require('express');

const Product = require('../models/Product')

const router = express.Router();


router.get('/', async (req,res) =>{
    try{
        
        const products = await Product.find();
        
        if(products.length < 1)
        return res.json({success: false, message: 'No Prdocuts found'});
        
        return res.json({success: true, message: products})
    }catch(err){
        return res.json({success: false, message: err});
    }
})

router.get('/details/:id', async (req,res) =>{
    try{
        const {id} = req.params;
        if(!id)
            return res.json({success:false, message: " Product id is required"});

        const product = await Product.findById(id);
        
        if(!product)
            return res.json({success: false, message: 'Invalid Prdocut ID'});
        
        return res.json({success: true, message: product})
    }catch(err){
        return res.json({success: false, message: err});
    }
})
router.post('/add', async (req,res) =>{
    try{
        const {name, code, originalPrice, sellingPrice, peice, box, packet } = req.body;
        const product = await Product.findOne({code});
        console.log(product)
        if(product)
            return res.json({success: false, message: 'product already exist'});

        const newProduct = new Product()
        
        newProduct.name = name 
        newProduct.code = code 
        newProduct.originalPrice = originalPrice 
        newProduct.sellingPrice = sellingPrice
        if(peice) 
            newProduct.inStock.peice = peice
        if(box) 
            newProduct.inStock.box = box
        if(packet) 
            newProduct.inStock.packet = packet 
        
        await newProduct.save();    
        
        return res.json({success: true, message: 'product added successfully', newProduct})
    }catch(err){
        return res.json({success: false, message: err});
    }
})

router.put('/edit/:id', async (req,res) =>{
    try{

        const {id} = req.params;

        const {name, code, originalPrice, sellingPrice, peice, box, packet } = req.body;

        const product = await Product.findById(id);

        if(!id || id == undefined)
           return res.json({success: false, message: 'Product id is required'});

        if(!product)
            return res.json({success: false, message: 'Invalid product id'});

        
        if(name) 
        product.name = name
        if(code)
        product.code = code 
        if(originalPrice)
        product.originalPrice = originalPrice 

        if(sellingPrice)
        product.sellingPrice = sellingPrice
        if(peice) 
        product.inStock.peice = peice
        if(box) 
        product.inStock.box = box
        if(packet) 
        product.inStock.packet = packet 
        
        await product.save();    
        
        return res.json({success: true, message: 'product updated successfully', product})
    }catch(err){
        return res.json({success: false, message: err});
    }
})

router.delete('/remove/:id', async (req,res) =>{
    try{

        const {id} = req.params;

        const product = await Product.findById(id);

        if(!id || id == undefined)
           return res.json({success: false, message: 'Product id is required'});

        if(!product)
            return res.json({success: false, message: 'Invalid product id'});
        await Product.findByIdAndDelete(id)
        
        return res.json({success: true, message: 'product removed successfully'})
    }catch(err){
        return res.json({success: false, message: err});
    }
})


module.exports = router;