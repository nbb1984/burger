var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  console.log("burgers_controller");
  burger.show(function(data){
    res.render("index", { burger: data });
  })
});

router.post("/", function(req, res) {
  burger.add(req.body.burger, function() {
    console.log('trying to post burger');
    return res.redirect("/");
  })
});

// router.delete("/:id", function(req, res) {
//   burger.delete(req.body.id, function(){
//     console.log('deleted');
//     return res.redirect('/');
//   })
// });

router.delete("/:id", function(req, res) {
  burger.update(req.body.id, function(){
    console.log("updated");
    return res.redirect("/");
  })
});

module.exports = router;