
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const urlka = "mongodb+srv://logineins:passwordeins@chern0nodejs1.ejdff.mongodb.net/chernobyl?retryWrites=true&w=majority"; 
mongoose.connect(process.env.DATABASE_URL /*urlka*/, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);