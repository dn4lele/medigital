import  express  from "express";
import database from "./models/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.set('view engine' , 'ejs')
app.set('views','views')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

database
.sync()
.then(good => {
    console.log(good);
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running via port ${process.env.PORT}`)
    })
} )
.catch(err => { 
    console.log(err);
})


app.listen()



