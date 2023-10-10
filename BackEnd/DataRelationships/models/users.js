const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/models");
  console.log("Connected");
}

main().catch((err) => console.log("Errors"));

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  address: [
    {
      _id: false,
      city: String,
      state: String,
      country: String,
      street: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeuser = async () => {
  const newUser = new User({
    first: "Prathik",
    last: "Prakash",
  });
  newUser.address.push({
    city: "New York City",
    state: "New York",
    country: "USA",
    street: "123 Down Street",
  });

  const res = await newUser.save();
  console.log(res);
};

const addAddress = async (id) => {
  const newAddress = await User.findById(id);
  newAddress.address.push({
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    street: "4th Main 8th Cross",
  });
  const res = await newAddress.save();
  console.log(res);
};

// makeuser();
addAddress("652414646504c364ba8b59fc");
