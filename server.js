var express = require('express');
var request = require('request')
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'public');
var User = require("./models/user.js");
var passport = require("passport");

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();
app.set("view engine","html");

app.use(express.static(publicPath));

app.get("/hello", function(req,res){
  var link="https://data.smcgov.org/resource/vedt-m26i.json";
  request(link, function(error, response, body){
    data = JSON.parse(body);
    data.forEach(function(dat){
      dat["gallonsPerCapita"] = (dat["water_use_ccf"]*748.052)/(dat["service_population"]);
    });
    console.log(data);
  });
  // res.render("landing")
});

app.get("/register", function(req,res){
  res.render("register");
});

app.post("/register", function(req,res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err,user){
    if(err){
      console.log(err);
      return res.render("register");
    }
    else{
      passport.authenticate("local")(req,res, function(){
        res.redirect("/hello");
      });
    }
  });

});

app.get("/login", function(req,res){
  res.render("login");
});

app.post("/login", passport.authenticate("local",{
  successRedirect: "/hello",
  failureRedirect: "/login"
}), function(req,res){
});

app.get("/logout", function(req,res){
  req.logout();
  res.redirect("/hello");
})

// If you only want this for development, you would of course
// put it in the "if" block below

if (!isProduction) {
  var bundle = require('./server/compiler.js');
  bundle();
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});


