require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var api = require("./routes/api");
var exphbs = require('express-handlebars');
var app = express();
var routers = require("./routes");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: "views/partials",
  layoutsDir: "views/layouts",
  helpers: {
    times: function(n, block) {
      var accum = '';
      for(var i = 0; i < n; ++i)
          accum += block.fn(i);
      return accum;
    }
  }
}));
app.set('view engine', 'hbs');

var port = process.env.PORT || 8080;

app.use("/", routers.view)
app.use("/api", routers.api);
app.use(express.static('public/'));
app.listen(port);
