const mongoose = require("mongoose");
const Product = require("./models/product");
const seedData = require("./seedData");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("Connected");
}
main().catch((err) => {
  console.log("Error!!");
});

Product.insertMany(seedData)
  .then((m) => console.log(m))
  .catch((err) => console.log(err));
