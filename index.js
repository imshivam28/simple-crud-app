const express = require("express");
const mongoose = require("mongoose");
const Product = require('./Models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express(); 
       
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes
app.use("/api/products", productRoutes);






app.get("/", (req, res) => {
  res.send("Hello, World!");
});











mongoose.connect("mongodb+srv://slayershivam01_db_user:Won9A9ms3Gd0b7yI@backenddb.xffeqhf.mongodb.net/?appName=Backenddb", )
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
