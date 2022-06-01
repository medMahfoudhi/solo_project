const express = require("express");
const router = require("./routers");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
