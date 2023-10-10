const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/models");
  console.log("Connected");
}

main().catch((err) => console.log("Errors"));

const farmSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});
const farmingSchema = new Schema({
  name: String,
  city: String,
  produce: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", farmSchema);
const Farm = mongoose.model("Farm", farmingSchema);

// Product.insertMany([
//   { name: "Melon", price: 50, season: "Summer" },
//   { name: "Mango", price: 70, season: "Summer" },
//   { name: "Cocounut", price: 50, season: "Fall" },
// ]);

// const makeFarm = async () => {
//   const farm = new Farm({ name: "Fully belly Farm", city: "Bangalore, KA" });
//   const mango = await Product.findOne({ name: "Mango" });
//   farm.produce.push(mango);
//   await farm.save();
//   console.log(mango);
// };
// makeFarm();

const addProducts = async () => {
  const farm = await Farm.findOne({ name: "Fully belly Farm" });
  const melons = await Product.findOne({ name: "Melon" });
  farm.produce.push(melons);
  await farm.save();
};
