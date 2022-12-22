import  express from 'express';
import Data from './data.js';
import mongoose from 'mongoose';
import userRouter from './Routers/userRouter.js';
import productRouter from './Routers/productRouter.js';
import orderRouter from './Routers/orderRouter.js';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 // useCreateIndex: true,
});








app.get('/', (req,res) =>{
    res.send('server is ready');
} );




app.use('/api/orders',orderRouter)
app.use('/api/users',userRouter)
app.use('/api/product',productRouter)
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });




const port = process.env.port || 500 ;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})