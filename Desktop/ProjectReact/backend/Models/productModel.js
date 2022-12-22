import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        
          name : {type:String,require:true ,unique:true },
          category : {type:String,require:true },
          image : {type:String,require:true },
          price : {type:Number,require:true },
          brand: {type:String,require:true },
          rate:{type:Number,require:true },
          countInStock: {type:Number,require:true },
          numReviews : {type:Number,require:true } ,
          description : {type:String }
    },
    {
        timestamps:true
    }
)

const product = mongoose.model('product',productSchema)
export default product