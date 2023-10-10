const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");
const appError = require("./appError");
const Farm = require("./models/farm");

const categories = ["fruit", "vegetable", "dairy"];

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("Connected");
}
main().catch((error) => {
  console.log("Error!!");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.get("/", (req, res) => {
  res.send("Welcome to farmStand");
});

// FARM ROUTES:

app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farm/index", { farms });
});

app.get("/farms/new", (req, res) => {
  res.render("farm/new");
});

app.post(
  "/farms",
  wrapAsync(async (req, res, next) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect("/farms");
  })
);

app.get(
  "/farms/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const farms = await Farm.findById(id).populate("products");
    if (!farms) {
      return next(new appError("No Farm found", 404));
    } else {
      res.render("farm/show", { farms });
    }
  })
);

app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  const farms = await Farm.findById(id);
  res.render("products/new", { categories, farms });
});

app.post(
  "/farms/:id/products",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
  })
);

app.delete(
  "/farms/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await Farm.findByIdAndDelete(id);
    res.redirect("/farms");
  })
);
// Products Route:
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get(
  "/products/new",
  wrapAsync((req, res, next) => {
    res.render("products/new");
  })
);

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products) {
      return next(new appError("No product found", 404));
    } else {
      res.render("products/show", { products });
    }
  })
);

app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return next(new appError("No product found", 404));
    }
    res.render("products/edit", { product });
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect(`/products/${product.id}`);
  })
);

app.delete(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

app.use((error, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = error;
  res.status(status).send(message);
});

app.listen(8000, () => {
  console.log("App is listening on port 8000");
});
