import  express from 'express';
import Data2 from '../data2.js';
import expressAsyncHandler from 'express-async-handler'
import product from '../Models/productModel.js';

const productRouter = express.Router()

productRouter.get('/', expressAsyncHandler( async(req,res)=>{
    
    const products = await product.find({})
    res.send(products)
    
}))

productRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const producto = await product.findById(req.params.id);
      console.log(producto)
      if (producto) {
        res.send(producto);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );


productRouter.get('/seed', expressAsyncHandler( async(req,res)=>{
    await product.remove({})
    const createdproduct = await product.insertMany(Data2.products)
    console.log(createdproduct)
    res.send(createdproduct)
}))


export default productRouter