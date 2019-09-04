var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: "1234qwerasfd",
  resave: false,
  saveUninitialized: true
}));

app.get("/count", (request, response) => {
  request.session.count = 1;
  response.send("s");
});

app.get("/tmp", (request, response) => {
  response.send("result : " + request.session.count);
});

app.listen(3003, () => {
  console.log("3003!!");
});

app.post("/auth/login", (request, response) => {
  let user = {
    username: "asdf",
    password: "111"
  };
  
  const username = req.body.usename;
  const password = req.body.password;

  if(username === user.username && password === user.password){
    response.send("Hello matser");
  } else{
    response.send("who are you");
  }

  response.send(username);
});

app.get("/auth/login", (request, response) => {
  var output = `
  <h1>login<h1>
  <form method="post">
    <p>
      <input type="text" name="username" placeholder="username">
      <input type="text" name="password" placeholder="password">
      <input type="submit" name
    </p>
  </form>`;
  response.send(output);
});