import  express from 'express';
import expressAsyncHandler from 'express-async-handler'
import Order from '../Models/orderModel.js';
//import { isAuth } from '../utils.js';

const orderRouter = express.Router()
orderRouter.post('/',expressAsyncHandler( async(req,res)=>{
    
  // isAuth(req,res,next)
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
      } else {

const order =   new Order({
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAdress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    user: req.body.id,
})

const createdorder = await order.save();
res.status(201).send({ message: 'New Order Created', order: createdorder });

      }
}))








orderRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

export default orderRouter;