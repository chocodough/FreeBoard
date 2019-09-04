let express = require("express");
let webApp = express();
let bodyParser = require("body-parser");
webApp.listen(1000, () => {
  console.info(new Date() + " application started!!");
})


webApp.use(bodyParser.urlencoded({extended:false}));

/**
 * 정적 파일 경로 설정
 */
webApp.use(express.static("public"));
webApp.set("view engine", "pug");
webApp.set('views', 'views');


webApp.get("/pa", (request, response) => {
  response.send("hi<br><img src='/pa.png'>");
})
/**
 * 메인페이지
 */
webApp.get("/main", (request, response) => {
  response.render("main");
})

/**
 * 로그인 페이지
 */
webApp.get("/auth/login", (request, response) => {
  response.render("login");
});

/**
 * 계정 등록 페이지 
 */
webApp.get("/auth/register", (request, response) => {
  response.render("register");
});
var passport = null;
const auth = require("./routes/auth")(passport);
webApp.use("/auth/", auth);