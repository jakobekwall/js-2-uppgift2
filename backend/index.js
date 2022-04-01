const express = require('express');
const cors = require("cors")
const app = express(); //dessa rader låter oss använda express i vår index.js-fil
const port = 5002; //vilken port vi vill ha

//vill vi skapa en GET-route
//det är då denna vi kommer anropa från vår react-app (klientsidan)
app.use(cors({
    orgin: "*"
}));

app.use(express.static("public"));

//vad som kommer ske när vi satt igång vår server

//vi tar bara och loggar vilken port vi är på
app.listen(port, () => {
    console.log("Server is listening on port" + port)
})