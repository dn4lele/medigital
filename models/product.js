import sequelize from "sequelize";
import database from "./database.js";

const Product= database.define("product",{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    productname:sequelize.STRING,
    productprice:sequelize.DOUBLE,
    productImage:sequelize.STRING,
    productDescription: sequelize.TEXT,
    isAvailable:sequelize.BOOLEAN,
    unitInStock:sequelize.INTEGER,
    CategoryId: sequelize.INTEGER

});


export default Product;