import  express  from "express";
const router = express.Router();



router.get('/dashboard' , async(req,res)=>{

    /*
    //postmail
    return res.status(200).json({
        massage:'hi'
    })
    */

    //html
    res.render('index' , {
        pageTitle: 'Welcome admin' 

    })


})


export default router;