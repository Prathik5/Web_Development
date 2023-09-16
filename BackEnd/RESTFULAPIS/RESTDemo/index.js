const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

Comments = [
  {
    id: uuid(),
    username: "Prathik",
    comment: "Nice pic deer",
  },
  {
    id: uuid(),
    username: "Vinod",
    comment: "Whatsapp number",
  },
  {
    id: uuid(),
    username: "creepy",
    comment: "Akele akele",
  },
  {
    id: uuid(),
    username: "Adityanath",
    comment: "Mitro peace out",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { Comments });
});
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  Comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const comment = Comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = Comments.find((c) => c.id === id);
  console.log(comment);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  // res.send("This is a patch request");
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundcomment = Comments.find((c) => c.id == id);
  foundcomment.comment = newComment;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  Comments = Comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

// app.get("/tacos", (req, res) => {
//   res.send("Get /tacos response");
// });
// app.post("/tacos", (req, res) => {
//   const { meat, qty } = req.body;
//   res.send(`Yoo! Take your ${qty} ${meat}`);
// });

app.get("/", (req, res) => {
  res.send("Welcome to the home page lol");
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
  console.log("Hello there");
});

//INDEX      =>   GET /comments = Lists all comments

//CREATE     =>   POST /comments = Allows you to post comments

//SHOW       =>   GET /comments/:{id} = Lists one particular comment

//EDIT       =>   Patch/comments/:{id} = Updates one particular comment

// DESTROY   =>   Delete/comments/:{id} = Deletes the comment
