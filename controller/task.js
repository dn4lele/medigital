import  express  from "express";
const router = express.Router();
import Product from "../models/product.js";
import Category from "../models/category.js";


//delete category
router.post('/delete/:id' , async(req,res)=>{
    const id=req.params.id;
    await Category.destroy({ where: { id: id } })
    .then(result =>{
        Product.destroy({ where: { CategoryId: id } })
        console.log(result)
        return res.redirect('/dashboard')
    })
    .catch(errorr=>{
        console.log(errorr.message)
        return res.redirect('/dashboard')
    })
})

//delete prod
router.post('/delete_prod/:prodid/:catid' , async(req,res)=>{
    const categoryid=req.params.catid;
    const productid=req.params.prodid;
    await Product.destroy({ where: { id: productid } })
    .then(result =>{
        console.log(result)
        return res.redirect('/product/'+categoryid)
    })
    .catch(errorr=>{
        console.log(errorr.message)
        return res.redirect('/product/'+categoryid)
    })
})


router.post('/edit_category/:id' , async(req,res)=>{
    const {categoryname,categorymainImage}=req.body;
    const id=req.params.id;
    await Category.update({categoryname:categoryname ,categorymainImage:categorymainImage },{ where: { id: id } })
    .then(result =>{
        console.log(result)
        return res.redirect('/product/'+id)
    })
    .catch(errorr=>{
        console.log(errorr.message)
        return res.redirect('/product/'+id)
    })
})

router.post('/edit_product/:id' , async(req,res)=>{
    const {Productname,ProductmainImage,Productprice,unitInStock , productDescription , isAvailable ,CategoryId }=req.body;

    const id=req.params.id;
    const catid=CategoryId;

    await Product.update({productname:Productname ,productImage:ProductmainImage , productprice:Productprice ,unitInStock:unitInStock ,productDescription:productDescription ,isAvailable:isAvailable ,CategoryId:CategoryId},{ where: { id: id } })
    .then(result =>{
        return res.redirect('/product/'+catid)
    })
    .catch(errorr=>{
        return res.redirect('/dashboard')
    })
})



router.post('/add_product/:id' , async(req,res)=>{
    const {productname,productprice,productImage,productDescription,isAvailable,unitInStock}=req.body;
    const CategoryId= req.params.id;

    Product.create({
        productname:productname,
        productprice:productprice,
        productImage:productImage,
        productDescription:productDescription,
        isAvailable:isAvailable,
        unitInStock:unitInStock,
        CategoryId:CategoryId
    })
    .then(result =>{
        console.log(result)
        return res.redirect('/product/'+CategoryId)
    })
    .catch(errorr=>{
        console.log(errorr.message)
        return res.redirect('/product/'+CategoryId)
    })
})



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


//delete category
router.post('/get_prod' , async(req,res)=>{
    const {whatiwrite}=req.body;
    await Product.findOne({ where: { productname: whatiwrite } })
    .then(result =>{
        console.log(result)
        console.log("\n\n\n\n"+result.id+"\n\n\n\n")

        return res.redirect('/edit_product/'+result.id)
    })
    .catch(errorr=>{
        return res.redirect('/dashboard')
    })
})




export default router;