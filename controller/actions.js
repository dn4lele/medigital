import  express  from "express";
const router = express.Router();
import Product from "../models/product.js";
import Category from "../models/category.js";



router.get('/dashboard' , async(req,res)=>{

    Category.findAll()
    .then(categories=> {
        res.render('index' , {
            pageTitle: 'Welcome admin',
            categories:categories
        })

    })
    .catch(errorr=>{
        res.render('index' , {
            pageTitle: 'Welcome admin' 
        })
    })



})


export default router;