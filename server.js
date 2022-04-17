const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000

const drinks = require('./models/drinks.js');

const foods = require ('./models/food.js');

app.get("/",(req, res)=>{

    res.send("Welcome to the Gitpub App!")
})

app.get("/foods",(req, res) => {
    res.render('food_index.ejs',{foods})
})

app.get("/drinks",(req, res)=>{
// i use the varialbe drinks on my index.ejs file
    res.render('drinks_index.ejs',{drinks})

})
//Setting up your show route
app.get("/drinks/:id",(req, res)=>{
    // res.send(req.params.id)
    // mydrink is a file holder like the name, price and image
    res.render('drinks_show.ejs',{mydrink: drinks[req.params.id]})
    })

app.get("/foods/:id",(req,res)=>{
    res.render('food_show.ejs',{menu: foods[req.params.id]})
})

app.listen(port,() => {
    console.log("Listening port 3000!")
})