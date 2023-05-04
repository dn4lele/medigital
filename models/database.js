import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();




const connection =new Sequelize(
    process.env.DATABASE_NAME, //database name
    process.env.DATABASE_USERNAME, // userr
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

export default connection;
