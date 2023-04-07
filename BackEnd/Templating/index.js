const express = require("express")
const path = require('path')

const app = express();
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname,'public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit', {...data})
    }
    else{
        res.render('errorpage', {subreddit})
    }
})

app.get('/cats', (req, res) => {
    const cats = ['Tiffany', 'Liily', 'Steve', 'Colt', 'Prathik']
    res.render('allCats', {cats})
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render('random', {num})
})

app.listen(4500, () =>{
    console.log("Hey! Listening on port 4500")
})