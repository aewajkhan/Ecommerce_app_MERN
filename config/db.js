import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://aewaj:pathan123@cluster0.q7xcsqz.mongodb.net/ecommerce');
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};


// const connectDB=async()=>{
//   try {
//     console.log(`connect to port NO. ${process.env.PORT}`)
//     return await mongoose.connect(process.env.MONGO_URL)
//   } catch (error) {
//     console.log("err",error)
//   }
// }
export default connectDB;
