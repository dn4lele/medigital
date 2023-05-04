import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();




const connection =new Sequelize(
    process.env.DB_NAME, //database name
    process.env.DB_USERNAME, // userr
    process.env.DB_PASSWORD,
    {
        dialect: mysql,
        host: localhost
    }
)

export default sequelize;
