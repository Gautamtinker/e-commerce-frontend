import mongoose from "mongoose";

const connectDatabase = () => {
  console.log(process.env.DB_URI);
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected to ${data.connection.host}`);
    });
};

export default connectDatabase;
