const app = require('express').Router();
const path = require("path")
const Database = require("void.db");
const db = new Database(path.join(__dirname, '../database/json/partners.json'));

console.log("[dislist.me]: Partners router loaded.");

app.get("/partners", async (req,res) => {
    res.render("partners.ejs", {
    	bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        db: db,
        roles: global.config.server.roles
    })
})

module.exports = app;
