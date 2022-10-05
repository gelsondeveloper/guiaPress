const express = require("express");
const Category = require("./Category");
const slugify = require("slugify");
const router = express.Router();

router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) =>{
    var title = req.body.title;
    res.send("Enviando com sucesso "+title);
   
    // if (title != undefined) {
    //     Category.create({
    //         title: title,
    //         slug: slugify(title)
    //     }).then(() => {
    //         res.redirect("/");
    //     })
    // } else {
    //     res.redirect("admin/categories/new");
    // }
});

module.exports = router;