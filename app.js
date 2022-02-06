const express = require("express")
const app = express()

app.use(express.static("public"))

app.listen(process.env.PORT || 3030, function ()
{console.log("Servidor corriendo en el puerto 3030")})

app.get("/", (req, res) => 
{res.sendFile(__dirname + "/views/home.html")})

app.get("/inicio", (req, res) => 
{res.sendFile(__dirname + "/views/home.html")})

app.get("/registro", (req, res) => 
{res.sendFile(__dirname + "/views/register.html")})

app.get("/ingreso", (req, res) => 
{res.sendFile(__dirname + "/views/login.html")})

