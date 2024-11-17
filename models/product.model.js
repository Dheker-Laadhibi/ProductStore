import mongoose  from "mongoose";

const productSchema = new mongoose.Schema(
    {

name:{
    type: String,
    required: true

},
price:{
    type:Number,
    required: true
},
image: {
    type: String,
    required: true,
},
},

{
    timestamps: true, // createdAt, updatedAt
}
);

//create a collection called product(following productSchema)
const Product = mongoose.model("Product", productSchema);
//use of Product in dif files 
export default Product;