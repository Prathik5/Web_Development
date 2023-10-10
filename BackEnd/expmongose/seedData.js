// const P = new Product({
//   name: "Grape Fruit",
//   price: 100,
//   category: "fruit",
// });
// P.save()
//   .then((m) => console.log(m))
//   .catch((err) => console.log(err));
const seedData = [
  {
    name: "Tomato",
    price: 100,
    category: "vegetable",
  },
  {
    name: "Apple",
    price: 120,
    category: "fruit",
  },
  {
    name: "Mango",
    price: 60,
    category: "fruit",
  },
  {
    name: "Milk",
    price: 50,
    category: "dairy",
  },
  {
    name: "Paneer",
    price: 200,
    category: "dairy",
  },
  {
    name: "Potato",
    price: 40,
    category: "vegetable",
  },
  {
    name: "Banana",
    price: 5,
    category: "fruit",
  },
];

module.exports = seedData;
