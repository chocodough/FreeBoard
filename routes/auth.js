module.exports = (passport) => {
  const route = require("express").Router();

  route.get("/register", (Request, Response) => {
    Response.render("register");
  });

  // route.post("/login",
  //   passport.authenticate("local",
  //   {
  //     successRedirect: "/welcome",
  //     failureRedirect: "/auth/login",
  //     failureRedirect: false
  //   })
  // );

  return route;
};