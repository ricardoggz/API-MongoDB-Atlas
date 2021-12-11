const debug = require('debug')('app:module-products-controller');
const {ProductsServices} = require('./services');

module.exports.ProductsControler={
    getProducts:async (req, res)=>{
        try {
            let products = await ProductsServices.getAll();
            res.json(products) 
        } catch (error) {
            debug('error')
            res.status(500).json({messageError: 'Error'})
        }
    },
    getProduct:(req, res)=>{},
    createProduct:(req, res)=>{}
}