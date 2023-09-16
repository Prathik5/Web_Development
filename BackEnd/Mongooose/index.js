const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/movies");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movies");
  console.log("Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const Jawan = new Movie({
  title: "Jawan",
  year: 2023,
  score: 9,
  rating: "U/A",
});

Movie.insertMany([
  { title: "Pathan", year: 2023, score: 8, rating: "U/A" },
  { title: "Jailer", year: 2023, score: 9, rating: "U/A" },
  { title: "Batman", year: 2022, score: 9, rating: "U/A" },
]);
