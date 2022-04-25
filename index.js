//use express in app variable here
const express = require("express")
const app = express()
//declare env
require('dotenv').config()

//Get routes to the variabel here
const router =  require("./src/routes")

//define the server port here
const port = 5000

app.use(express.json())

//create the homepage route here and inside it create res means, response, and it send string "Hello Express!" to the API

//Create endpoint grouping and router here
app.use("/api/v1/", router) //api versi 1

app.get("/", (req,res) => {
    res.send("Hello World")
})

// Create listen here
app.listen(port, () => console.log(`Server running on port: ${port}`))