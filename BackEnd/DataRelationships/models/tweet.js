const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/models");
  console.log("Connected");
}

main().catch((err) => console.log("Errors"));

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   const user = await User.findOne({ username: "Bob69" });
//   const tweet2 = new Tweet({ text: "You fat little cunt", likes: 25 });
//   tweet2.user = user;
// user.save();
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  const tweets = await Tweet.find({}).populate("user", "username");
  console.log(tweets);
};

findTweet();
