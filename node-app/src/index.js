const express = require("express");

const app = express()

app.use('/',(req, res, next)=> res.json({message:"Hello wrold"}))


app.listen(3000,'localhost',()=> console.info(`Applicatin running on port: 3000`))
