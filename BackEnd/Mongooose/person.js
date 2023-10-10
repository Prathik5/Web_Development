const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/movies");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shop");
  console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullname").get(function () {
  return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  console.log("Pre Save!!");
});
personSchema.post("save", async function () {
  console.log("Post Save!!");
});

const Person = mongoose.model("Person", personSchema);
