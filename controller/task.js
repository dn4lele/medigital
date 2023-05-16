import  express  from "express";
const router = express.Router();
import Product from "../models/product.js";
import Category from "../models/category.js";



router.post('/add_category' , async(req,res)=>{
    const {categoryname,categorymainImage}=req.body;
    Category.create({
        categoryname:categoryname,
        categorymainImage:categorymainImage
    })
    .then(result =>{
        console.log(result)
        return res.redirect('/dashboard')
    })
    .catch(errorr=>{
        console.log(errorr.message)
        return res.redirect('/dashboard')
    })
})


export default router;