const express = require("express");
const router = express.Router();

const listBoisson = require("../data/data");

router.get("/", (req, res)=>{
    res.render("homePage", {
        titreDoc : "Page 1",
        titre : "Bonjour",
    });
});

router.get("/page2", (req, res) => {
    res.render("pageDeux", {
        titreDoc : "Page 2",
        titre : "orvoir",
    });
});

router.get("/page3", (req, res) => {
    res.render("pageTrois", {
        titreDoc : "Page 3 liste boissons", 
        titre : "la page avec une liste de boissons", 
        listBoisson, 
    });
});


module.exports = router;