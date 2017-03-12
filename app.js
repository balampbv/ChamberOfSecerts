var express = require('express');
var path = require('path'); 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var moment = require('moment');
var loop  = require('handlebars-loop');


mongoose.connect('mongodb://localhost/cos'); 
var db = mongoose.connection;


var routes = require('./routes/index');
var users = require('./routes/users');
var images = require('./routes/imagefile');

var Handlebars=require("handlebars");

// Init App
var app = express();

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
// helper
Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) { 
       lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
        
      return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
  }

);

Handlebars.registerHelper('times', function(n, qid, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(qid+'['+i+']');
   // return accum;
   console.log(accum);
   return accum;
});

Handlebars.registerHelper("log", function(something) {
  console.log(something);
});
// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'dashlayout'}));
app.set('view engine', 'handlebars');


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));


// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


// Passport init
app.use(passport.initialize());
app.use(passport.session());


// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.use('/', routes);
app.use('/users', users);
app.use('/i',images);
// Set Port
app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function(){
	console.log('Magical port O_O '+app.get('port'));
});

