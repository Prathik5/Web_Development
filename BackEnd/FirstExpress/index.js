const express = require("express");

const app = express();

// console.dir(app);

// app.use((req, res) => {
//   console.log("We got a new request");
//   res.send("<h1>Hello we got your request and this is the response</h1>");
//   // res.send({ color: "red" });
//   res.send("<h2>This is my web page</h2>");
// });

//  / home => homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the home page!!!!</h1>");
});

//  / cats => meow
app.get("/cats", (req, res) => {
  res.send("Meoww");
});

app.post("/cats", (req, res) => {
  console.log("This is different from get request haha!!");
});

//  / dogs => bow
app.get("/dogs", (req, res) => {
  res.send("Boww");
});

app.get("/r/:subredddit", (req, res) => {
  console.log(req.params);
  const { subredddit } = req.params;
  res.send(`<h1>This is a subreddit for ${subredddit}</h1>`);
});

app.get("/r/:subredddit/:postID", (req, res) => {
  const { subredddit, postID } = req.params;
  res.send(
    `<h1>This is a subreddit for ${subredddit} and post is ${postID}</h1>`
  );
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send(`<h2>Nothing found if nothing searched</h2>`);
  }
  res.send(`<h1>Search results for : ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("<h1>Oops! I don't know that path</h1>");
  //   console.log("another request");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
