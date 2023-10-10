const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/movies");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shop");
  console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: [0, "Price must be positive bro"],
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  quantity: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 5,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

ProductSchema.methods.greet = function () {
  console.log("Heyy!! Hello brother!!");
  console.log(`-from ${this.name}`);
};

const Product = mongoose.model("Product", ProductSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Jersey" });
  foundProduct.greet();
};

findProduct();
// const bike = new Product({
//   name: "Jersey",
//   score: "50",
//   quantity: { online: 20, inStore: 8 },
//   size: "S",
// });
// bike
//   .save()
//   .then((data) => {
//     console.log("It worked!!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("It didn't work!");
//     console.log(err.errors);
//   });

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { score: 120 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("It worked!!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("It didn't work!");
//     console.log(err);
//   });
