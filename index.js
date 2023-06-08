import  express  from "express";
import database from "./models/database.js";
import dotenv from "dotenv";
import actions from "./controller/actions.js";
import task from './controller/task.js';


dotenv.config();

const app = express();

app.set('view engine' , 'ejs')
app.set('views','views')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',actions)
app.use('/functions',task)


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




/*
daniel work! number 1
*/