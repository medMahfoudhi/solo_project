const mongoose = require("mongoose");
const mongoUri =
  "mongodb+srv://mohamed:doaa2019@cluster0.eche7.mongodb.net/test";

mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  () => {
    console.log("db connected");
  }
);
const db = mongoose.connection;
