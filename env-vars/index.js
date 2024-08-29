const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Server healthy!")
} );

app.listen(PORT, ()=>{
    console.log("Server listening");
})

console.log(process.env.FAST);

console.log(process.env.SLOW)