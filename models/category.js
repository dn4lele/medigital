import sequelize from "sequelize";
import database from "./database.js";

const Category= database.define("category",{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    categoryname:sequelize.STRING,
    categorymainImage:sequelize.STRING,

});


export default Category;